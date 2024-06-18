document.addEventListener('DOMContentLoaded', function() {
    //const optionsLists = document.querySelectorAll('.select-box .options');
    const selectBoxes = document.querySelectorAll('.select-box');
    const selectOption = document.querySelectorAll('.select-box .option');
    const selectOptionMulti = document.querySelectorAll('.select-box .f_chk');
    selectBoxes.forEach(e => {
      e.addEventListener('click', function() {
        
        if(e.classList.contains('on')){
          closeAllOptions();
        }else{
          //e.querySelector('.options').classList.toggle('on');
          closeAllOptions();
          e.classList.toggle('on');
        }
      });
    });
    selectOption.forEach(e=>{
      e.addEventListener('click',(event)=>{
        event.stopPropagation();
        let selectBox = e.closest('.select-box');
        let selectInput = selectBox.querySelector('.select-input');
        selectInput.value = e.textContent;
        closeAllOptions();
      });
    });
    selectOptionMulti.forEach(e=>{
      e.addEventListener('click',(event)=>{
        let selectBox = e.closest('.select-box');
        let selectInput = selectBox.querySelector('.select-input');
        let chkCount = selectBox.querySelectorAll('.f_chk input[type=checkbox]:checked').length
        selectInput.value = chkCount + '개 선택'
      });
    });
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.select-box')) {
        closeAllOptions();
      }
    });
    function closeAllOptions() {
      selectBoxes.forEach(e => {
        e.classList.remove('on');
      });
    }


    const h_tbl_wrap = document.querySelectorAll('.h_tbl_wrap');
    const mobile_alert = document.querySelector('.mobile_alert');
    ['load', 'resize'].forEach(function(event) {
      window.addEventListener(event, ()=>{
        h_tbl_wrap.forEach(e=>{
          if(e.querySelector('.h_tbl').offsetWidth > e.offsetWidth){
            e.classList.add('scrolling');
          }else{
            e.classList.remove('scrolling');
          }
        });
        if(window.innerWidth < 1023){
          mobile_alert.classList.add('on')
        }else{
          mobile_alert.classList.remove('on')
        }
      });
    });

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


function reset(target){
  let this_form  = target.closest('form');
  this_form.reset();
}


function close_modal(target){
  const modal = target.closest('.modal');
  modal.classList.remove('on');
}
