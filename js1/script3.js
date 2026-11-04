class bolo{
    constructor(n, valor, imgem){
        this.nome = n;
        this.valor = v;
        this.imagem = i;
        this.curtidads = 0;
    }
    elemento(){
        let div = document.createElement("div");
        let titulo = document.createElement("p")
        let valor = document.createElement("p")
        let curtidas = document.createElement("p")
        titulo.textContent = this.nome;
        valor.textContent = this.valor;
        div.style.backgroundImage = this.imagem;
        div.classList.add("item");
        curtidas.textContent = this.curtidas
        div.append(titulo,valor,curtidas);

        return div;
    }
}
const b1 = new bolo("bolo de chocolate", "R$ 40,00")
const b2 = new bolo("bolo de ovos", "R$ 20,00")
const b3 = new bolo("bolo da moça", "R$ 25,00")


const catalogo = [b1,b2,b3]
const produtos = document.getElementById("produtos");
window.addEventListener("load", function(e){
    for (let i = 0; i< catalogo.length; i++){
        let item = catalogo[i];
        produtos.append(item.comoElementoHTML());
    }
})