const lecy = {
    nome: "lecy",
    peso: 45.8,
    cor: "preto",
    altura: 0.68,
    raca: "dogo agentino",
    falar(){
        alert("auau");
    },
    comer(kg){
        this.peso = this.peso + kg;
        alert("comi");
    },
    cagar(kg){
      this.peso = this.peso + kg;
      alert("caguei")  
    },
    sauadar(){
        let msg = `nome: ${this.nome}\n`;
         msg = msg + `peso: ${this.peso}\n`;
         msg = msg + `altura: ${this.altura}\n`;
         msg = msg + `raça: ${this.raca}\n`;
         msg = msg + `cor: ${this.cor}\n`;
         alert(msg)
    }
}