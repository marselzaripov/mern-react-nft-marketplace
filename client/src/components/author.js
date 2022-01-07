const filt = document.getElementById('tabs__btns'),
      cards = document.querySelectorAll('.tabs__card');

const changeFilt = el =>{
    for(let i = 0; i < filt.children.length; i++){
        filt.children[i].classList.remove('tabs__btn_active');
    }
    el.classList.add('tabs__btn_active');
}
if(filt){
filt.addEventListener('click', e =>{
    const currCard = e.target.dataset.filt;
    changeFilt(e.target);
    for(let i = 0; i < cards.length; i++){
        cards[i].classList.remove('tabs__card_active');
        if(cards[i].dataset.card === currCard){
            cards[i].classList.add('tabs__card_active');
        }
    }
})}