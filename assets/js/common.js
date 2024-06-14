document.addEventListener('DOMContentLoaded', function() {

    const selectInputs = document.querySelectorAll('.select-input');
    const optionsLists = document.querySelectorAll('.options');
    const selectBoxes = document.querySelectorAll('.select-box');
  
    selectBoxes.forEach((selectBox, index) => {
      selectBox.addEventListener('click', function() {
        closeAllOptions();
        optionsLists[index].classList.toggle('on');
        selectBox.classList.toggle('on');
      });
  
      optionsLists[index].addEventListener('click', function(event) {
        event.stopPropagation();
        if (event.target.tagName === 'LI') {
          const value = event.target.getAttribute('data-value');
          selectInputs[index].value = event.target.textContent;
          // You can do something with the selected value here
          console.log(value);
          closeAllOptions();
        }
      });
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
