const a1 = document.querySelector('.a1');
const b1 = document.querySelector('.b1');
const c1 = document.querySelector('.c1');
const a2 = document.querySelector('.a2');
const b2 = document.querySelector('.b2');
const c2 = document.querySelector('.c2');
const a3 = document.querySelector('.a3');
const b3 = document.querySelector('.b3');
const c3 = document.querySelector('.c3');

const x = document.querySelector('x');
const o = document.querySelector('o');
const xo = document.querySelector('xo');


const suaVez = function () {
    a2.classList.toggle('x');
    
}

a2.onclick = suaVez;

a2.innerHTML="O";
a1.innerHTML="x";
