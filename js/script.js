window.addEventListener('DOMContentLoader', () => {

const cartWrapper = document.querySelector('.cart__wrapper'),
    cart = document.querySelector('.cart'),
    close = document.querySelector('.cart__close'),
    open = document.querySelector('#cart'),
    goodsBtn = document.querySelectorAll('.goods__btn'),
    products = document.querySelectorAll('.goods__item'),
    confirm = document.querySelector('.confirm'),
    badge = document.querySelector('.nav__badge'),
    totalCost = document.querySelector('.cart__total > span'),
    titles = document.querySelectorAll('.goods__title');

function open_cart() {
    cart.style.display = "block";
};
function close_cart() {
    cart.style.display = "none";
};
open.addEventListener('click', open_cart);
close.addEventListener('click', close_cart);

goodsBtn.forEach(function(btn, i) {
    btn.addEventListener('click', () =>  {
        let item = products[i].cloneNode(true), //клонирование 
            trigger = item.querySelector('button'),
            removeBtn = document.createElement('div'),
            empty = cartWrapper.querySelector('.empty');

        trigger.remove();

        removeBtn.classList.add('goods__item-remove');
        removeBtn.innerHTML = '&times;';
        item.appendChild(removeBtn);

        cartWrapper.appendChild(item);

        if (empty) {
            empty.remove();
        }
    });
});
});
