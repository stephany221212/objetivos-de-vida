const botoes = document. querySelectorAl1 (" botao");
const textos = document. querySelectorAl1 (".aba-conteudo");
 
for(let i=0;i <botoes.length;i++){
botoes[i].onclick=function(){

    for(let j=0;j<botoes.length;j++){
        botoes[j].classlist.remove("ativo");
        botoes[j].classlist.remove("ativo");
    }

    botoes[i].classlist.add("ativo");
    botoes[i].classlist.add("ativo");
}
} 

const contadores = document.querySelectorAll(".contador");
const contadores1 = new Date("2025-03-04T00:00:00");
const contadores2 = new Date("2026-01-10T00:00:00");
const contadores3 = new Date("2026-04-03T00:00:00");
const contadores4 = new Date("2025-04-03T00:00:00");
const contadores5 = new Date("2025-01-01T00:00:00");
const contadores6 = new Date("2024-11-03T00:00:00");

const tempos = [tempoobjetivo1,tempoobjetivo2,tempoobjetivo3,tempoobjetivo4,tempoobjetivo5,tempoobjetivo6];

function calculetempo(tempoobjetivo) {
    let tempoatual = new Date();
    let tempofinal = tempoobjetivo - tempoatual;
    let segundos = Math.floor(tempofinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 6=;
    horas %= 24;
    if (tempofinal > 0){
        return [dias,horas,minutos,segundos];
    }
}