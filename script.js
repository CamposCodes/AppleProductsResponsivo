let avatarName  = document.querySelector(".avatar-nome");
let quant = document.querySelectorAll(".avatar-card .avatar-img");
let atual = 0;
let avatarAtual = document.getElementById("atual");
let setaE       = document.querySelector("#seta-esquerda");
let setaD       = document.querySelector("#seta-direita");


function animationName(){
    if(avatarName.classList.contains('animation-avatar')){
        avatarName.classList.remove('animation-avatar');
    }
    else{
        avatarName.classList.add('animation-avatar');
    }
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
    animationName();
    atual --;
    slide();
});
setaD.addEventListener("click", () => {
    animationName();
    atual++;
    slide();
});

