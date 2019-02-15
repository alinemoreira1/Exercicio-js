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

let quadrados = document.querySelectorAll('.grid .xo'); 
let xCss = document.querySelector('.x'); 
let oCss = document.querySelector('.o'); 
let x = '<h4>X</h4>';
let o = '<h4>O</h4>';
let jogador2 = false;  

let jogadasP1 = [];
let jogadasP2 = [];

const checarVitoria = function () {
    // [0, 1, 2].
    // [3, 4, 5].
    // [6, 7, 8].
    // [0, 3, 6].
    // [1, 4, 7].
    // [2, 5, 8].
    // [0, 4, 8].
    // [2, 4, 6].
    if (quadrados[0].innerHTML === quadrados[1].innerHTML && quadrados[1].innerHTML === quadrados[2].innerHTML && quadrados[0].innerHTML !== "" || quadrados[3].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[5].innerHTML && quadrados[3].innerHTML !== ""
    || quadrados[6].innerHTML === quadrados[7].innerHTML && quadrados[7].innerHTML === quadrados[8].innerHTML && quadrados[6].innerHTML !== ""
    || quadrados[0].innerHTML === quadrados[3].innerHTML && quadrados[3].innerHTML === quadrados[6].innerHTML && quadrados[0].innerHTML !== ""
    || quadrados[1].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[7].innerHTML && quadrados[1].innerHTML !== ""
    || quadrados[2].innerHTML === quadrados[5].innerHTML && quadrados[5].innerHTML === quadrados[8].innerHTML && quadrados[2].innerHTML !== ""
    || quadrados[0].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[8].innerHTML && quadrados[0].innerHTML !== ""
    || quadrados[2].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[6].innerHTML && quadrados[2].innerHTML !== ""){
        alert(`game over`);
    }
}

const processarClique = function(quadrado, indice){
    if(jogador2 == false){  
        quadrado.innerHTML = x;
        jogadasP1.push(indice);
        jogador2 = true; 
    } 
    else if(jogador2 == true){ 
        quadrado.innerHTML = o;
        jogadasP2.push(indice); 
        jogador2 = false; 
    }
    
    quadrado.onclick = null;
    checarVitoria();
}

for(let i = 0; i < quadrados.length; i++){ 
    let quadradinho = quadrados[i];
    quadradinho.onclick = function () {
        processarClique(quadradinho, i);
    }
}

