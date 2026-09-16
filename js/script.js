function saudacao_a(){
    alert (`olá fulano, seja bem-vindo`);
}

function saudacao_b(nome){
    alert (`olá ${nome}, seja bem-vindo`);
}

function saudacao_c(nome="desconhecido"){
    alert(`olá ${nome}, seja bem vindo!`)
}

function saudacao_d(nome="desconhecido"){
    return `olá ${nome}, seja bem-vindo!`;
}