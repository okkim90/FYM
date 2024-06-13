document.addEventListener('DOMContentLoaded', function() {
    const selectInputs = document.querySelectorAll('.select-input');
    const optionsLists = document.querySelectorAll('.options');
    const selectBoxes = document.querySelectorAll('.select-box');
  
    selectBoxes.forEach((selectBox, index) => {
      selectBox.addEventListener('click', function() {
        closeAllOptions();
        optionsLists[index].classList.toggle('open');
        selectBox.classList.toggle('open');
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
        options.classList.remove('open');
        selectBoxes[index].classList.remove('open');
      });
    }
  });