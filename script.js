
function Some_botoes() {
    //todos os botões da tela como lista
    var Botoes = document.getElementsByTagName("button");

    if (window.innerWidth <= 756){
        console.log("Entrou aqui!")
        for (var i = 0; i < Botoes.length; i++){
            Botoes[i].style.display = "none";
        }
    }
}

Some_botoes();


function Criando_botão() {
    //criando botão com template strings html

    var Botao_inicio = `
        <figure>
            <img src="https://horadecodar.com.br/wp-content/uploads/2022/11/logo.webp" alt="Logo do hora de codar" class="Logo">
        </figure>
        <button class="inicio">
            <p>Imagem</p>
        </button><br>
    `;
    var estado = false;

    // os dois componentes(em um) ficarão dentro do elemento de id=fundo
    var Elementopai = document.getElementById("fundo");
    Elementopai.innerHTML = Botao_inicio;

    var prime_botao = document.querySelector(".inicio");

    prime_botao.addEventListener("click", () => {
        
        if (estado){
            estado = True;
        }else{
            estado = false;
        }

        var componenteHTML = `
        <figure>
            <img src="https://horadecodar.com.br/wp-content/uploads/2022/11/logo.webp" alt="Logo do hora de codar" class="Logo">
        </figure>

        <nav class="novonav">
            <button class="Bo B1">
                <b>Hora de codar</b>
            </button>
            <button class="Bo B2">
                <b>Blog</b>
            </button>
            <button class="Bo B3">
                <b>Contato</b>
            </button>
            <button class="Bo B4">
                <b>Comunidade</b>
            </button>
        </nav>
    `;
        //inverte o estado do botão
        estado = !estado;

        var Elementopai = document.getElementById("fundo");
        Elementopai.innerHTML = componenteHTML;
    })


}

Criando_botão();