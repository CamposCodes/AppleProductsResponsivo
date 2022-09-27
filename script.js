let avatarName  = document.querySelector(".avatar-nome");
let avatarImg   = document.querySelector(".avatar-img");
let setaE       = document.querySelector("#seta-esquerda");
let setaD       = document.querySelector("#seta-direita");


setaE.addEventListener("click", () => {
    if(avatarName.classList.contains('animation-avatar') && avatarImg.classList.contains('animation-avatar')){
        avatarName.classList.remove('animation-avatar');
        avatarImg.classList.remove('animation-avatar');
    }
    else{
        avatarName.classList.add('animation-avatar');
        avatarImg.classList.add('animation-avatar');
    }
});
setaD.addEventListener("click", () => {
    if(avatarName.classList.contains('animation-avatar') && avatarImg.classList.contains('animation-avatar')){
        avatarName.classList.remove('animation-avatar');
        avatarImg.classList.remove('animation-avatar');
    }
    else{
        avatarName.classList.add('animation-avatar');
        avatarImg.classList.add('animation-avatar');
    }
});
