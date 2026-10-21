const zeus = {
    nome: "zeus",
    peso: 34.8,
    cor: "branco",
    altura: 0.64,
    raca: "fox americano",
    falar(){
        alert("auau");
    },
    comer(kg){
        this.peso = this.peso + kg;
    },
    cagar(kg){
      this.peso = this.peso + kg;  
    },
    sauadar(){
        let msg = `nome: ${this.nome}\n`;
         msg = msg + `peso: ${this.peso}\n`;
         msg = msg + `altura: ${this.altura}\n`;
         msg = msg + `raça: ${this.raca}\n`;
         msg = msg + `cor: ${this.cor}\n`;
    }
}