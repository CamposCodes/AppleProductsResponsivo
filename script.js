let quant = document.querySelectorAll(".avatar-card .avatar-img");
let atual = 0;
let avatarAtual = document.getElementById("atual");
let setaE       = document.querySelector("#seta-esquerda");
let setaD       = document.querySelector("#seta-direita");
let nome = 0;
let nomeAtual = document.getElementById("nome-atual");

function slideName(){
    if(nome >= quant.length){
        nome = 0;
    }
    else if(nome < 0){
        nome = quant.length - 1;
    }
    nomeAtual.style.marginLeft =  -17 * nome  + 'rem';
}

function slide(){
    if(atual >= quant.length){
        atual = 0;
    }
    else if(atual < 0){
        atual = quant.length - 1;
    }
    avatarAtual.style.marginLeft =  -20 * atual  + 'rem';
}



setaE.addEventListener("click", () => {
    atual --;
    nome --;
    slide();
    slideName();
});
setaD.addEventListener("click", () => {
    atual++;
    nome ++;
    slide();
    slideName();
});

