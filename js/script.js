var nome ="messias"
let nasc = 2006
const viva = confirm("clique em ok, se estiver viva");
let altura;
if(viva){
    altura = prompt("digite a sua altura");
}
function calcIdade (ano = 2026){
    let idade = ano - nasc;
    console.log(`Idade dentro da funcao:${idade}`);
    let menor;
    if(idade < 18){
        let menor =  true;
    }else{
        let menor = false;
    }
        return [idade, menor];
}
let retorno = calcIdade()
if (retorno[1]){
    alert(`Idade: ${retorno[0]}. Você é menor de idade`);
}else{
    alert(`Idade: ${retorno[0]}. Você é maior de idade`)
}
alerta(`Idade fora da funcao: ${calcIdade()}`);

if(viva){
    altura = prompt("digite a sua altura");
}
