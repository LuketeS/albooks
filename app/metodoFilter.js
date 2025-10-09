//Fazer o botão de filtrar livros front funcionar e realmente filtrar os livros

const botoes = document.querySelectorAll(".btn");
botoes.forEach(botao => botao.addEventListener("click", filtrarLivros))



function filtrarLivros () {
    const elementoBotao = document.getElementById(this.id);
    const categoriaBotao = elementoBotao.value;

    let livrosFiltrados = categoriaBotao == "disponivel" ? filtrarPorDisponibilidade() : FiltrarPorCategoria(categoriaBotao)
    exibirOsLivrosNaTela(livrosFiltrados);
    if (categoriaBotao == "disponivel"){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    } 
}

function FiltrarPorCategoria(categoriaBotao) {
    return livros.filter(livro => livro.categoria == categoriaBotao);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela (valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}