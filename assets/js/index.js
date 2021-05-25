const linguagem = document.querySelector('.js-linguagem')
const areaDoCodigo = document.querySelector('.js-codigo-wrapper')
const tituloProjeto = document.querySelector('.js-titulo-projeto')
const descricaoProjeto = document.querySelector('.js-descricao-projeto')
const botaoPreview = document.querySelector('.js-botao-preview')
const botaoSalvar = document.querySelector('.js-botao-salvar')

botaoPreview.addEventListener('click', () => {
    let codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

function mudaLinguagem() {
    let codigo = areaDoCodigo.querySelector('code')
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
    areaDoCodigo.firstChild.innerText = codigo.innerText
}

botaoSalvar.addEventListener('click', () => {
    if (typeof(Storage) !== "undefined") {
        console.log('Yay, support!')
        const projeto = montaProjeto()
        salvaLocalStorage(projeto)
    } else {
        console.log('Nay, no support!')
    }
})

function montaProjeto() {
    let projeto = {
        'id': atribuiId(),
        'detalhesDoProjeto': {
            'nomeDoProjeto': tituloProjeto.value,
            'descricaoDoProjeto': descricaoProjeto.value,
            'linguagem': linguagem.value,
            'codigo': areaDoCodigo.querySelector('code').innerText
        }
    }
    return projeto
}

let numeroId = 1

function atribuiId() {
    if(localStorage.length == 0) {
        return 0
    } else {
        if(localStorage.length == numeroId) {
            let novoId = numeroId
            numeroId++
            return novoId
        }
    }
}

function salvaLocalStorage(objetoJson) {
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}
