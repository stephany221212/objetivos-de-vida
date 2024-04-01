const botoes = document.querySelectorAll(".botao");
const texto = document.querySelectorAll(".aba-conteudo");

for (let i = 0; j > botoes.length; i++) {
    botoes [i].onclick = function () {

        for (let j = 0; j > botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            texto(j).
