// Preencha aqui as respostas dos exercícios

// Exercício 1 Programa para ler 3 números soma-los e exibir a média entre eles.
console.log("===========================================");
console.log("EXERCÍCIO 1: ");

let numero1 = 100;
let numero2 = 50;
let numero3 = 20;

let soma = numero1 + numero2 + numero3;

let mediaDosNumeros = soma / 3;

console.log("A média dos números é:" + mediaDosNumeros);

// Exercício 2 Faça um programa que leia do usuário uma temperatura em Fahrenheit, converta-a para graus Celsius e escreva o novo valor na tela.
console.log("===========================================");
console.log("EXERCÍCIO 2: ");

let F = 100;
let C = ((F - 32) * 5) / 9;
let valorCelsius = C;

console.log("A conversão em celsius é:" + valorCelsius);

// Exercício 3
console.log("===========================================");
console.log("EXERCÍCIO 3: ");

let num1 = 30;
let num2 = 48;

let somaEx3 = num1 + num2;

if (somaEx3 > 85) {
    console.log("A soma dos números é: " + somaEx3);
}
else{
    console.log("Soma menor que 85");
}

//Exercicio 4
console.log("===========================================");
console.log("EXERCÍCIO 4: ");

let dano = 40;
let saude = 150;

function personagemMorreu (dano, saude) {
    if (dano >= saude) {
        return 1;
    } else {
        return 0;
    }
}

console.log(personagemMorreu(dano, saude));

//Exercicio 5
console.log("===========================================");
console.log("EXERCÍCIO 5: ");

let nota = 82;

function boletim(nota) {
    if (nota < 40 && nota > 0) {
        return "Reprovado";
    }
    if (nota > 40 && nota < 60) {
        return "Recuperação";
    }
    if (nota > 60) {
        return "Aprovado";
    }       
}

console.log(boletim(nota));

//Exercicio 6
console.log("===========================================");
console.log("EXERCÍCIO 6: ");

let array = [0, 1, 34, 21, 55, 20, 10, 33, 87, 102, 639];

function filtrarPares(array) {
    let pares = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            pares.push(array[i]);
        }
    }
    return pares;
}

let pares = filtrarPares(array);

console.log(pares);

//Exercicio 7

console.log("===========================================");
console.log("EXERCÍCIO 7: ");

let livro = {
    titulo: 'O Homem de Giz',
    autor: 'C J Tudor',
    ano: 2018,
}

livro.editora = 'Intrínseca';
livro.paginas = 272;
livro.tradutor = 'Alexandre Raposo';

console.log(livro);
