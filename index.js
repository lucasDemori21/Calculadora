var historico = [''];
var exibirH = '';

function inserir(num){
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        var calculo = document.getElementById('resultado').innerHTML = eval(resultado);
        historico.unshift(calculo); // adiciona o resultado atual ao histórico
    }
    if (historico.length > 5) {
        historico.pop(); // remove o resultado mais antigo do histórico se ele tiver mais de 5 elementos
    }
    var exibirH = historico.slice(0, 5); // exibe os últimos 5 resultados no elemento HTML #historic
    document.getElementById('historic').innerHTML = exibirH;
}
