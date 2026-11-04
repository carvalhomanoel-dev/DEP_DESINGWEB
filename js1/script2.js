const cabecalho = document.getElementById("cabecalho");
window.addEventListener("scroll", function(){
    if (window.scrollY){
        cabecalho.classList.add("solido");
    }else{
        cabecalho.classList.remove("solido");
    }
})