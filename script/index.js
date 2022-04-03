'use strict';

const body = document.querySelector('body');
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

btn.addEventListener('click', () => {
    let colorValue = randColor()
    body.style.backgroundColor = colorValue;
    color.textContent = colorValue;   
    color.style.color = colorValue;   
});
