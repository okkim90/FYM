document.addEventListener('DOMContentLoaded', function() {

    const optionsLists = document.querySelectorAll('.select-box .options');
    const selectBoxes = document.querySelectorAll('.select-box');
    
  
    selectBoxes.forEach((selectBox, index) => {
      selectBox.addEventListener('click', function() {
        closeAllOptions();
        selectBox.querySelector('.options').classList.toggle('on');
        selectBox.classList.toggle('on');
      });
  

      let option = selectBox.querySelectorAll('.option');
      let options = selectBox.querySelector('.options');
      let option_multi = selectBox.querySelectorAll('.f_chk');
      let selectInput = selectBox.querySelector('.select-input');

      
      if(option){
        console.log(selectBox)
        option.forEach(e=>{
          e.addEventListener('click',event=>{
            event.stopPropagation();
            selectInput.value = e.textContent;
            closeAllOptions(); 
          })
        });
      }
      if(option_multi){
       
        option_multi.forEach(e=>{
          e.addEventListener('click',event=>{
            event.stopPropagation();
            chkCount = options.querySelectorAll('.f_chk input[type=checkbox]:checked').length
            selectInput.value = chkCount + '개 선택'
             
          })
        });
      }
     
      

      
    });


  
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.select-box')) {
        closeAllOptions();
      }
    });
  
    function closeAllOptions() {
      optionsLists.forEach((options, index) => {
        //options.classList.remove('on');
        selectBoxes[index].classList.remove('on');
      });
    }
    

    
    
});

function user_toggle(){
  const user = document.querySelector('.user');
  if(!user.classList.contains('on')){
    user.classList.add('on');
  }
}

document.addEventListener('click', (event)=> {
  const excludedArea = document.querySelectorAll('.ex_close');
  excludedArea.forEach((e)=>{
    if (!event.target.closest('.ex_close')) {
      e.classList.remove('on')
    }
  });

  const srchArea = document.querySelectorAll('.srch');
  srchArea.forEach((e)=>{
    let srchResult = e.querySelector('.srch_result');
    if (!event.target.closest('.srch')) {
      srchResult.classList.remove('on')
    }
  });
});
