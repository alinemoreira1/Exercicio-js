let quadrados = document.querySelectorAll('.grid .xo'); 
let xCss = document.querySelector('.x'); 
let oCss = document.querySelector('.o'); 
let x = '<h4>X</h4>';
let o = '<h4>O</h4>';
let jogador2 = false;  

let jogadasP1 = [];
let jogadasP2 = [];

const checarVitoria = function () {
    if (quadrados[0].innerHTML === quadrados[1].innerHTML && quadrados[1].innerHTML === quadrados[2].innerHTML && quadrados[0].innerHTML !== "" || quadrados[3].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[5].innerHTML && quadrados[3].innerHTML !== ""
    || quadrados[6].innerHTML === quadrados[7].innerHTML && quadrados[7].innerHTML === quadrados[8].innerHTML && quadrados[6].innerHTML !== ""
    || quadrados[0].innerHTML === quadrados[3].innerHTML && quadrados[3].innerHTML === quadrados[6].innerHTML && quadrados[0].innerHTML !== ""
    || quadrados[1].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[7].innerHTML && quadrados[1].innerHTML !== ""
    || quadrados[2].innerHTML === quadrados[5].innerHTML && quadrados[5].innerHTML === quadrados[8].innerHTML && quadrados[2].innerHTML !== ""
    || quadrados[0].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[8].innerHTML && quadrados[0].innerHTML !== ""
    || quadrados[2].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[6].innerHTML && quadrados[2].innerHTML !== ""){
        setTimeout(function(){ alert(`Game Over. Vitória!`); }, 50);
    }
    else if (quadrados[0].innerHTML !== "" && quadrados[1].innerHTML !== "" && quadrados[2].innerHTML !== "" && quadrados[3].innerHTML !== "" && quadrados[4].innerHTML !== "" && quadrados[5].innerHTML !== "" && quadrados[6].innerHTML !== "" && quadrados[7].innerHTML !== "" && quadrados[8].innerHTML !== "") {
        setTimeout(function(){ alert(`Empate.`); }, 50);
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

