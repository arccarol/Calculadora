function insert (num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

}

function apagar (){
    document.getElementById("resultado").innerHTML = "";
}

function apagaum(){
    var result = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = result.substring(0, result.length  -1); 

}

function calcular(){
    var resultado = document.getElementById("resultado").innerHTML;
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado); //eval é uma função que calcula automatico
    } else {
        document.getElementById("resultado").innerHTML = "0";
    }
}




