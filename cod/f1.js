const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Você sai da escola, depois de mais um dia chato e cansativo, chegando no seu quarto, você se depara com todo a bagunça resultado de dias negligência e falta de limpeza. O que você faz?",
    alternativas: [
            {
            texto: "Vai pro twitter",
            afirmacao: "A policia federal bate na sua porta/"
            },
            {
            texto:"Organiza seu quarto",
            afirmacao:"o processo de organizar seu quarto é tão carregado de tédio que somando com todo o acumulado duarante a aula, você tem uma overdose de tédio... E MORRE!!!!/"
            },
        ]
    },
    {
    enunciado: "Você se lembra que tem um trabalho da escola atrasado, o que você faz?",
    alternativas: [
        {
            texto: "Começo o trabalho o mais breve possível",
            afirmacao: "Sério que você escolheu isso, parabéns!!!!/"
            },
            {
            texto:"Deixo pra outra hora, ainda tem tempo ;)",
            afirmacao:"Você faz o trabalho um dia antes do prazo de entrga, e ele fica uma merda/"
            },
         ]
    },
    {
        enunciado: "Um familiar seu pede ajuda para lidar com a tecnologia, oque você faz?",
        alternativas: [
            {
                texto: "Ajuda",
                afirmacao: "Agora você terá de ajuda-lo toda hora até o dia de sua morte/"
                },
                {
                texto:"Não ajuda",
            afirmacao:"Essa resposta é deprimente/"
                },
             ]
        },
        {
            enunciado: "Você entra em um quiz pra ver qual power ranger você seria, mas para descobrir isto, você precisa escolher uma cor:",
            alternativas: [
                {
                    texto: "Azul",
                    afirmacao: "Sério, um quiz de power-ranger?!?/"
                    },
                    {
                    texto:"Vermelho",
                    afirmacao:"Sério, um quiz de power-ranger?!?/"
                    },
                 ]
            }
    ];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();