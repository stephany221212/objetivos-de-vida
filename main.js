const botoes = document.querySelectorAll(".botao");
const botoes = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i]. onclick = function ()  {

for (let j = 0; j <botoes.length; j++){
    botoes[j].classList.remove("ativo");
    textos[j].classList.remove("ativo");
}
botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo");
}   
        }
    
        const contadores = document.querySelectorAll(".contador");
        const tempoObjetivo1 = new Date("2024-03-05T00:00:00");
        const tempoObjetivo2 = new Date("2025-01-20T00:00:00");
        const tempoObjetivo3 = new Date("2025-02-05T00:00:00");
        const tempoObjetivo4 = new Date("2025-03-05T00:00:00");
        const tempoObjetivo5 = new Date("2025-01-05T00:00:00");
        const tempoObjetivo6 = new Date("2024-11-O1T00:00:00");

        const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4,tempoObjetivo5,tempoObjetivo6]

        function calculaTempo(tempoObjetivo){
            let tempoAtual = new Date ();
            let tempoFinal = tempoObjetivo - tempoAtual;
            let segundos = math.floor(tempoFinal/1000);
            let minutos = math.floor(segundos/60);
            let horas = math.floor(horas/24);

            segundos %=60;
            minutos %=60;
            horas %=24:
            if (tempoFinal >0){
                return [dias,horas,minutos,segundos];
            }else{
                return[0,0,0,0];
            
            }
        }
        function atualizacronometro(){}
