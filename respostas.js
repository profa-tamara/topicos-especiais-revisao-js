// Preencha aqui as respostas dos exercícios

media();
conversaoTemp();
soma();
vida();
aprovacao();
vetor();
objeto();


// Exercício 01

function media (numero1, numero2, numero3) {

    var numero1 = 1;
    var numero2 = 5;
    var numero3 = 3;
    var media;

    media = (numero1 + numero2 + numero3)/3;

    console.log("O valor da media eh " + media + ".");

}

// Exercício 02

function conversaoTemp (fahrenheit) {

    var fahrenheit = 100;
    var celsius;

    celsius = ((fahrenheit - 32)*5)/9;

    console.log("O valor em celsius eh " + celsius + ".");

}

// Exercício 03

function soma (valor1, valor2) {

    var valor1 = 100;
    var valor2 = 100;
    var resultado;

    resultado = valor1 + valor2;

    if (resultado > 85) {
        console.log("O valor valor da soma eh " + resultado + ".");
    }

}

// Exercício 04

function vida (dano, saude) {

    var dano = 10;
    var saude = 100;
    var vida;

    vida = saude - dano;

    if (vida <= 0) {
        console.log("1");
    }

}

// Exercício 05

function aprovacao (valor) {

    var valor = 78;

    if (valor >= 0 && valor <= 40) {
        console.log("Roprovado");
    }
    if (valor > 40 && valor < 60) {
        console.log("Recuperação");
    }
    if (valor > 60) {
        console.log("Aprovado");
    }

}

// Exercício 06

function vetor () {

    let array = [0, 1, 34, 21, 55, 20, 10, 33, 87, 102, 639];
    let arrayPar = [10];
    var i;
    var j = 0;
    var contador = 0;

    for(i = 0; i < array.length; i++) {
        if(array[i] / 2 == 0) {
            array[i] = arrayPar[j];
            j++;
        }
    }

    for(i = 0; i < arrayPar.length; i++) {
        console.log(arrayPar[i]);
    }

}

// Exercício 07

function objeto () {
    

    let livro = {
        titulo: 'O Homem de Giz',
        autor: 'C J Tudor',
        ano: 2018,
    }

    livro.editora = 'Intrínseca';
    livro.paginas = 272;
    livro.tradutor = 'Alexandre Raposo';

}
