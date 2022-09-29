let quant = document.querySelectorAll(".avatar-card .avatar-img");
let atual = 0;
let productAtual = document.getElementById("atual");
let setaE       = document.querySelector("#seta-esquerda");
let setaD       = document.querySelector("#seta-direita");
let nome = 0;
   

function slide(){
    if(atual >= quant.length){
        atual = 0;
    }
    else if(atual < 0){
        atual = quant.length - 1;
    }
    productAtual.style.marginLeft =  -20 * atual  + 'rem';
}



setaE.addEventListener("click", () => {
    atual --;
    slide();
});
setaD.addEventListener("click", () => {
    atual++;
    slide();
});

