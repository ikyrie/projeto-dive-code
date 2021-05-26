const listaProjetos = document.querySelector('.js-todos-projetos')

new function () {
    mostraProjetos()
}

function mostraProjetos() {
    if(localStorage.length <= 0) {
        return
    }
    let projetos = []
    for(let i = 0; i < localStorage.length; i++) {
        projetos.push(JSON.parse(localStorage.getItem(i)))
    }
    projetos.forEach(projeto => {
        const cartao = criaCartao(projeto)
        listaProjetos.innerHTML += cartao
        const codigoHtml = listaProjetos.querySelector(`[data-id="${projeto.id}"]`)
        codigoHtml.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo
    })
}

function criaCartao(projeto) {
    const cartao = `
        <a href="index.html" class="projeto-wrapper" data-id="${projeto.id}">
            <article class="projeto">
                <code class="projeto__codigo hljs ${projeto.detalhesDoProjeto.linguagem}"></code>
                <h2 class="projeto__titulo">${projeto.detalhesDoProjeto.nomeDoProjeto}</h2>
                <p class="projeto__descricao">${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
                <span class="projeto__linguagem linguagem--${projeto.detalhesDoProjeto.linguagem}">${projeto.detalhesDoProjeto.linguagem}</span>
            </article>
        </a>
    `
    return cartao
}