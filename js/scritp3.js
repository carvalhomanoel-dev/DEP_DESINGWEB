let nome = prompt ("digite seu nome");
let nasc = Number(prompt("digite seu ano de nascimento:"))
let viva = confirm("clique em ok se estiver viva, caso contrario cancelar.");
let altura = Number(altura);
let sexo = prompt("digite seu sexo");
let peso = prompt("digite seu peso");
peso = Number(peso);
let imc = peso/altura;


console.log("nome", typeof(nome));
console.log("nasc", typeof(nasc));
console.log("viva", typeof(viva));
console.log("altura", typeof(altura));
console.log("sexo", typeof(sexo));
console.log("peso", typeof(peso));
console.log("imc", typeof(imc));


msg = `nome: ${nome}\nAno de nascimento: ${nasc}\nViva: ${viva}`;
msg = msg + `\nAltura: ${altura}\nSexo: ${sexo}\nPeso: ${peso}`;
msg = msg + `\nIMC: ${imc.toFixed(2)}`;

alert(msg);