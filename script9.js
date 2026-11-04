const bolos = [
    "bolo de chocolate",
    "bolo de cenoura com cobertura de chocolate",
    "bolo de laranja",
    "bolo de queijo",
    "bolo recheado de chocolate",
    "bolo de baunilha",
]

const buscar = document.getElementById("buscar");
const termo = buscar.termo;
const lista = document.getElementById("lista");

function listarbolos(t){
    t = t.trim().tolowercase();
    let resultados = [];
    if (t == null){
        resultados = bolos;
    }else{
        for(let i = 0; i<bolos.length; i++){
            let nome = bolos[i]
            if (nome.toLocaleLowerCase().trim().includes){
                resultados.push(nome)
            }
        }
    }
    let itens = "";
    for(let i = 0; i < resultados.length; i++){
        let item = resultados[i];
        let li = `<li>${item}`
        itens = itens + li;
    }
    lista.innerHTML = itens;
}

buscar.addEventListener("submit", function(e){
    e.preventDefault();
    listarbolos(termo.value);
})