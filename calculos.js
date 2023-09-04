/* Desenvolva aqui a rotina */
const valorBase = document.getElementById('valor_base');
const valorTransporte = document.getElementById('valor_transporte');
const valorAlimentacao = document.getElementById('valor_alimentacao');
const receitaTotal = document.getElementById('valor_receita');

const valorAutomovel = document.getElementById('valor_automovel');
const faltas = document.getElementById('faltas');
const descontoTotal = document.getElementById('valor_descontos');
const valorTotal = document.getElementById('valor_total');

const btnCalcular = document.getElementById('btn_calcular');

let somadorReceitas = 0;
let somadorDespesas = 0;

valorBase.addEventListener('change', () => {
    somadorReceitas += +valorBase.value;
    receitaTotal.value = somadorReceitas;
});

valorTransporte.addEventListener('change', () => {
    somadorReceitas += +valorTransporte.value;
    receitaTotal.value = somadorReceitas;
});

valorAlimentacao.addEventListener('change', () => {
    somadorReceitas += +valorAlimentacao.value;
    receitaTotal.value = somadorReceitas;
});

valorAutomovel.addEventListener('change', () => {
    somadorDespesas += +valorAutomovel.value;
    descontoTotal.value = somadorDespesas;
});

btnCalcular.addEventListener('click', () => {
    valorTotal.value = somadorReceitas - somadorDespesas;
})

