// ========== HEADER ==========
function pix() {
    navigator.clipboard.writeText(`*Pix*  ⬇️
    CPF: 08913729466
    Nome: Diego Luiz da Silva
    Banco: Nubank`)
}
function msg() {
    navigator.clipboard.writeText(`         ‼️ Imports Variedades ‼️
 
Clique neste link para falar conosco 😄 : https://wa.me/558189222797
Aqui você vê nosso Instagram com todas as novidades 🔥 : https://www.instagram.com/imports.variiedades/
Este é o link do nosso site de vendas: https://importsvariedades.com.br/`)
}
function gp() {
    navigator.clipboard.writeText(`https://chat.whatsapp.com/BulIV0XsudAIYjnzUykHlB`)
}
// ========== COPIAR TEXTOS ==========
const list = document.querySelectorAll('.copy li')
const copyicon = document.querySelectorAll('.catalogo img')
const price = document.querySelectorAll('.price')
for (let element of list) {
    element.addEventListener('click', function () {
        let txt = element.innerText
        navigator.clipboard.writeText(txt)
    })
}
function copyiconf(father) {
    navigator.clipboard.writeText(father)
}
for (let element of price) {
    element.addEventListener('click', function () {
        let txt = element.innerText
        navigator.clipboard.writeText(txt)
    })
}
