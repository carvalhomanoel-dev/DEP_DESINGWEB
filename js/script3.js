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
