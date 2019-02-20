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

        showConfig();
        calcProduct(1);

        removeBtn.classList.add('goods__item-remove');
        removeBtn.innerHTML = '&times;';
        item.appendChild(removeBtn);

        cartWrapper.appendChild(item);

        if (empty) {
            empty.style.display = 'none';
        }
        calcTotal();
        removeFrom();
    });
});

    function sliceTitle() {
    titles.forEach(function(item) {
        if (item.textContent.length < 70) {
            return;
        } else {
            const str = item.textContent.slice(0, 71) + '...'; // от 0 до 70 символов
            item.textContent = str;
        }
    });
    }
    sliceTitle();

    function showConfig() {
        confirm.style.display = 'block';
        let counter = 100; //счетчик
        const id = setInterval(frame, 10);
    
        function frame() {
            if (counter == 10) {
                clearInterval(id);
                confirm.style.display = 'none';
            } else {
                counter--;
                confirm.style.transform = `translateY(-${counter}px)`;
                confirm.style.opacity = '.' + counter;
            }
        }
    }

    function calcProduct(i) {
        const items = cartWrapper.querySelectorAll('.goods__item');
        badge.textContent = i + items.length;
    }

    function calcTotal() {
        const prices = document.querySelectorAll('.cart__wrapper > .goods__item > .goods__price > span'),
              empty = cartWrapper.querySelector('.empty');
        let total = 0;
        prices.forEach(function(item) {
            total += +item.textContent;
        });
        totalCost.textContent = total;
        if (total == 0) {
            empty.style.display = 'block';
        }
    }

    function removeFrom() {
        const removeBtn = cartWrapper.querySelectorAll('.goods__item-remove');
        removeBtn.forEach(function(btn) {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                calcTotal();
                calcProduct(0);
            })
        })
    }