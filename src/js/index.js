// const anos = document.getElementById('anos');
// const meses = document.getElementById('meses');
// const dias = document.getElementById('dias');
// const horas = document.getElementById('horas');
// const minutos = document.getElementById('minutos');
// const segundos = document.getElementById('segundos');

// const contagem = setInterval(function time() {
//     let dateToday = new Date();
//     let ans = dateToday.getYear();
//     let mes = dateToday.getMonth();
//     let ds = dateToday.getDay();
//     let hrs = dateToday.getHours();
//     let min = dateToday.getMinutes();
//     let seg = dateToday.getSeconds();

//     if (ans < 10) ans = '0' + ans;
//     if (mes < 10) mes = '0' + mes;
//     if (ds < 10) ds = '0' + ds;
//     if (hrs < 10) hrs = '0' + hrs;
//     if (min < 10) min = '0' + min;
//     if (seg < 10) seg = '0' + seg;

//     anos.textContent = ans;
//     meses.textContent = mes;
//     dias.textContent = ds;
//     horas.textContent = hrs;
//     minutos.textContent = min;
//     segundos.textContent = seg;
// });

// Seleção de elementos do HTML
const anos = document.getElementById('anos');
const meses = document.getElementById('meses');
const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const dataConhecimento = new Date('2024-05-07T19:00:00');

// Função que calcula o tempo decorrido
const contagem = setInterval(function time() {
    let agora = new Date();
    let diferenca = agora - dataConhecimento;

    // Conversão de milissegundos para unidades de tempo
    let totalSegundos = Math.floor(diferenca / 1000);
    let totalMinutos = Math.floor(totalSegundos / 60);
    let totalHoras = Math.floor(totalMinutos / 60);
    let totalDias = Math.floor(totalHoras / 24);
    let totalMeses = Math.floor(totalDias / 30.44);
    let totalAnos = Math.floor(totalMeses / 12);

    // Cálculo do tempo restante
    let seg = totalSegundos % 60;
    let min = totalMinutos % 60;
    let hrs = totalHoras % 24;
    let ds = totalDias % 30.44;
    let mes = totalMeses % 12;
    let ans = totalAnos;

    // Introdução do zero em números antes do dez
    if (ans < 10) ans = '0' + ans;
    if (mes < 10) mes = '0' + mes;
    if (ds < 10) ds = '0' + ds;
    if (hrs < 10) hrs = '0' + hrs;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    // Exibição dos valores na tela
    anos.textContent = ans;
    meses.textContent = mes;
    dias.textContent = Math.floor(ds);
    horas.textContent = hrs;
    minutos.textContent = min;
    segundos.textContent = seg;
}, 1000);