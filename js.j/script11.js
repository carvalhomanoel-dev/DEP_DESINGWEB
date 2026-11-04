let hoje = new date();
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;

const msg = document.getElementById("msg");

function saudacao(){
    let m = "";
    if (nome.value == undefined || nome.value.trim() == ""){
        m = `ola, hoje e ${hoje.getdate()} / ${hoje.getmonth()+1} / ${hoje.getfullyear()}!`
    }else{
        m = `ola, hoje e ${hoje.getdate()} / ${hoje.getmonth()+1} / ${hoje.getfullyear()}!`
        let dt_nasc = new date(nasc.value);
        let dif = 0;
        if (hoje > dt_nasc){
            dif = hoje - dt_nasc
            m = m + `<br/>falta ${dif/(1000*60*60*24)} dias`
        }else{
            dif = dt_nasc - hoje
            m = m + `<br/>passou ${dif/(1000*60*60*24)} dias`
        }
    }
    msg.innerHTML= m;
    
}

cadastro.addEventListener("submit", function(e){
    e.preventDefault();
    saudacao();
})
