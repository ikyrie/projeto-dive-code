const linguagem = document.querySelector('.js-linguagem')
const areaDoCodigo = document.querySelector('.js-codigo-wrapper')
const botaoPreview = document.querySelector('.js-botao-preview')
const botaoSalvar = document.querySelector('.js-botao-salvar')
const tituloProjeto = document.querySelector('.js-titulo-projeto')
const descricaoProjeto = document.querySelector('.js-descricao-projeto')

botaoPreview.addEventListener('click', () => {
    let codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})

linguagem.addEventListener('change', () => {
    mudaLinguagem()
})

function mudaLinguagem() {
    let codigo = {'texto': areaDoCodigo.querySelector('code').innerText}
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
    areaDoCodigo.firstChild.innerText = codigo.texto
}

botaoSalvar.addEventListener('click', () => {
    if (typeof(Storage) !== "undefined"){
        console.log("suporta o localstorage")
        const projeto = montaProjeto()
        salvaLocalStorage(projeto)
        console.log(projeto)
    }else{
        console.log("não suporta o localstorage")
    }
})

let numeroId = 1

if (localStorage.length > 0) {
    numeroId = localStorage.length
}

function montaProjeto(){
    let projeto = {
        'id': atribuiId(),
        'detalhesDoProjeto':{
            'nomeDoProjeto': tituloProjeto.value,
            'descricaoDoProjeto': descricaoProjeto.value,
            'linguagem': linguagem.value,
            'codigo': areaDoCodigo.querySelector('code').innerText
        }
    }
    return projeto
}

function atribuiId(){
    if (localStorage.length == 0){
        return 0
    } else {
        if (localStorage.length == numeroId){
            let novoId = numeroId
            numeroId++
            return novoId        
        }
    }
}

function salvaLocalStorage(objetoJson){
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}