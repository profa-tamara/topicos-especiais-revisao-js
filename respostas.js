//Exercício 1 - Faça um programa que leia 3 números, some-os e exiba a média entre eles.

var num1 = 30;
var num2 = 20;
var num3 = 10;

    var soma = num1 + num2 + num3;
    var media =  soma / 3;

console.log("a média é:" + media);



//  Exercício 2 - Faça um programa que leia do usuário uma temperatura em Fahrenheit, converta-a
// para graus Celsius e escreva o novo valor na tela. A fórmula de conversão de Fahrenheit (F) para 
//  Celsius é: C = ( ( F - 32 ) * 5 ) / 9. 

    var fahrenheit = 100;
    var celsius = ((fahrenheit - 32) * 5) / 9;
    console.log("a conversão é: " + celsius);
 


//  Exercício 3 - Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado
//  apenas se o resultado for maior que 85.


    var soma = 35 + 40;

    if(soma > 85) {
        console.log("a soma é:" + soma);
    } 
    else {
        console.log("menor que 85");
    }
    

// Exercício 4 -Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque.
// Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' se o dano for
// matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.

function morreu(dano, saude) {
    if(dano > 0 && saude > 0) {
        return 1;
    }
    else {
        return 0;
    }
}

console.log(morreu("10", "10"));

// Exercício 5
// Crie uma função que receba um valor de 0 a 100 como parâmetro e faça a seguinte validação:

// Se o valor estiver entre 0 a 40, a função deve retornar Reprovado.
// Se o valor estiver entre 41 a 59, a função deve retornar Recuperação.
// Se o valor for maior que 60, a função deve retornar Aprovado.

function valor(num1) {
    if(num1 > 0 && num1 < 40) {
        return "Reprovado";
    }
    else if(num1 > 41 && num1 < 59) {
        return "Recuperação";
    }
    else if(num1 > 60) {
        return "Aprovado";
    }
}

console.log(valor(75));

// Exercício 6
// Crie uma função que leia o seguinte array

// let array = [0, 1, 34, 21, 55, 20, 10, 33, 87, 102, 639];

// E retorne um novo array apenas com os números pares.


let array = [0, 1, 34, 21, 55, 20, 10, 33, 87, 102, 639];

function lerPar(array) {
    let novoArray = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            novoArray.push(array[i]);
        }
    }
    console.log(novoArray);
}

lerPar(array);

// Exercício 7
// Considere o objeto abaixo, que possui dados de um livro.
// Escreva o código que vai inserir novas entradas no objeto. As entradas que devem ser inseridas são:

let livro = {
    titulo: 'O Homem de Giz',
    autor: 'C J Tudor',
    ano: 2018,
}

livro.editora = 'Intrínseca';
livro.paginas = 272;
livro.tradutor = 'Alexandre Raposo';

console.log(livro);
