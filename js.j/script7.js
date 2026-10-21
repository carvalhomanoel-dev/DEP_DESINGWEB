class animal {
    constructor(n, p, r, a, c){
        this.nome = n;
        this.nome = p;
        this.nome = r;
        this.nome = a;
        this.nome = c;
    }
    falar(){
        alert("auau");
    }
    comer(kg){
        this.peso = this.peso + kg;
        alert("comi");
    }
    cagar(kg){
      this.peso = this.peso + kg;
      alert("caguei")  
    }
    sauadar(){
        let msg = `nome: ${this.nome}\n`;
         msg = msg + `peso: ${this.peso}\n`;
         msg = msg + `altura: ${this.altura}\n`;
         msg = msg + `raça: ${this.raca}\n`;
         msg = msg + `cor: ${this.cor}\n`;
         alert(msg)
    }
}

class cachorro extends animal{
        constructor(n, p, r, a, c, d){
            super(n,p,r,a,c,);
            this.dentes = d;
        }
        falar(){
        alert("auau");
        }
        sauadar(){
            super.sauadar();
            alert("sou um cachorro");
        }
}

class papaguio extends animal{
    constructor(n,p,r,a,c){
        super(n,p,r,a,c);
        }
        sauadar(){
            super.sauadar();
            alert("sou um papagaio");
        }
}

const lecy = new cachorro("lecy", 45.8, "dogo argentino", 0.8, "preto");
const zeus = new cachorro("lecy", 35.5, "fox americano", 0.5, "branco");
const leleco = new papagaio("leleco brasil", 0.250, "papagaio", 0.15, "verde e amarelo");
const priscila = new animal("priscila", 55, "homosapiens", 1.55, "amarela");