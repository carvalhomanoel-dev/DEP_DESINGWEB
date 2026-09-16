let saudacao_a = () => {
    alert(`olá fulano, seja bem-vindo`);
}

let saudacao_b = () => {
    alert(`olá ${nome}, seja bem-vindo`);
}

let saudacao_c = (nome="desconhecido") => {
    alert(`olá ${nome}, seja bem-vindo`);
}

let saudacao_d = (nome="desconhecida") => {
    return `olá ${nome}, seja bem-vindo`;
}
