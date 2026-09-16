let saudacao_a = function(){
    alert(`olá fulano, seja bem-vindo`);
}

let saudacao_b = function (nome){
    alert(`olá ${nome}, seja bem-vindo`);
}

let saudacao_c = function (nome="desconhecido"){
    alert(`olá ${nome}, seja bem-vindo`);
}

let saudacao_d = function (nome="desconhecida"){
    return `olá ${nome}, seja bem-vindo`;
}

const btn_a = document.getElementById("btn_a");
btn_a.addEventListener("click", function(e){
    e.preventDefault();
    saudacao_a();
});

const btn_b = document.getElementById("btn_b");
btn_b.addEventListener("click", function(e){
    e.preventDefault();
    let nome = prompt("digite seu nome: ");
    saudacao_b(nome)
});

const btn_cp = document.getElementById("btn_cp");
btn_b.addEventListener("click", function(e){
    e.preventDefault();
    saudacao_c(nome)
});

const btn_cn = document.getElementById("btn_cn");
btn_b.addEventListener("click", function(e){
    e.preventDefault();
    let nome = prompt("digite seu nome: ");
    saudacao_c(nome)
});

const btn_dp = document.getElementById("btn_dp");
btn_b.addEventListener("click", function(e){
    e.preventDefault();
    alert(saudacao_d)
});

const btn_dn = document.getElementById("btn_dp");
btn_b.addEventListener("click", function(e){
    e.preventDefault();
    let nome = prompt("digite seu nome")
    alert(saudacao_d(nome));
});