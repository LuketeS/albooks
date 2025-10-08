//Fazer o botão de filtrar livros front funcionar e realmente filtrar os livros

const botoes = document.querySelectorAll(".btn");
botoes.forEach(botao => botao.addEventListener("click", filtrarLivros))



function filtrarLivros () {
    const elementoBotao = document.getElementById(this.id);
    const categoriaBotao = elementoBotao.value;

    let livrosFiltrados = categoriaBotao == "disponivel" ? livros.filter(livro => livro.quantidade > 0) : livros.filter( livro => livro.categoria == categoriaBotao)
    exibirOsLivrosNaTela(livrosFiltrados);
}