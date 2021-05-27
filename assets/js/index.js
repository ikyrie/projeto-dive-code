const linguagem = document.querySelector('.js-linguagem')
const areaDoCodigo = document.querySelector('.js-codigo-wrapper')
const botaoPreview = document.querySelector('.js-botao-preview')

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
