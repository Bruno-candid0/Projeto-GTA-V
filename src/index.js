alert("P E D R O   S A L A F R A R I O")
/*

objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma


objetivo 2 - caso a lista de botões de plataformas ja estaja aparecendo e o usuario clicar no botão de fechar, o conteudo deve ser escondido

*/

const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas")

botao.addEventListener("click", () => {


const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");
if(botaoEstaAberto) {
elementoPlataformas.classList.remove("ativo");
}else{
    elementoPlataformas.classList.add("ativo");
}

    

});

