const selectSingle = document.querySelector('.__select');
if(selectSingle) {
  const selectSingle_title = selectSingle.querySelector('.__select__title');
  const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
  selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '');
    } else {
      selectSingle.setAttribute('data-state', 'active');
    }
  });
  // Close when click to option
  for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '');
    });
  }

}

const selectSingleColl = document.querySelector('.__select-coll');
if(selectSingleColl){
const selectSingleColl_title = selectSingleColl.querySelector('.__select__title-coll');
const selectSingleColl_labels = selectSingleColl.querySelectorAll('.__select__label-coll');

// Toggle menu
selectSingleColl_title.addEventListener('click', () => {
  if ('active' === selectSingleColl.getAttribute('data-state')) {
    selectSingleColl.setAttribute('data-state', '');
  } else {
    selectSingleColl.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingleColl_labels.length; i++) {
  selectSingleColl_labels[i].addEventListener('click', (evt) => {
    selectSingleColl_title.textContent = evt.target.textContent;
    selectSingleColl.setAttribute('data-state', '');
  });
}}