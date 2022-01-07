const tabs = document.getElementById('details__btns'),
      block = document.querySelectorAll('.details__content');

const changeClass = el =>{
    for(let i = 0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('details__btna');
    }
    el.classList.add('details__btna');
}
if(tabs){
tabs.addEventListener('click', e =>{
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < block.length; i++){
        block[i].classList.remove('details__active');
        if(block[i].dataset.block === currTab){
            block[i].classList.add('details__active');
        }
    }
})}