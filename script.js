// const a1 = document.querySelector('.a1');
// const b1 = document.querySelector('.b1');
// const c1 = document.querySelector('.c1');
// const a2 = document.querySelector('.a2');
// const b2 = document.querySelector('.b2');
// const c2 = document.querySelector('.c2');
// const a3 = document.querySelector('.a3');
// const b3 = document.querySelector('.b3');
// const c3 = document.querySelector('.c3');
// const x = document.querySelector('x');
// const o = document.querySelector('o');
// const xo = document.querySelector('xo');
// const suaVez = function () {
//     a2.classList.toggle('x');
    
// }

// a2.onclick = suaVez;

// a2.innerHTML="O";
// a1.innerHTML="x";

let xo = document.querySelectorAll('.grid .xo'); 
let xCss = document.querySelector('.x'); 
let oCss = document.querySelector('.o'); 
let x = '<h4>X</h4>';
let o = '<h4>O</h4>';
let XorO = false;  

let vitorias = []

for(i = 0; i < xo.length; i++){ 
    let quadradinho = xo[i];
    quadradinho.onclick = function(){
        if(XorO == false){  
            if(quadradinho.innerHTML == ''){ 
                quadradinho.innerHTML = x; 
                XorO = true; 
            }
        } 
        else if(XorO == true){ 
            if(quadradinho.innerHTML == ''){ 
                quadradinho.innerHTML = o; 
                XorO = false; 
            }
        }
    }
}