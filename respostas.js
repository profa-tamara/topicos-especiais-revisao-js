
console.log("Exercicio 1");

//Exercício 1

function media(a, b, c) {
    return (a+b+c)/3;
}

console.log(media(10,20,30));

console.log("\nExercicio 2");
//Exercício 2

function cparaf(f) {
    return ((f-32)*5)/9;
}

console.log(cparaf(149));

console.log("\nExercicio 3");
//Exercício 3

function maiorque(a, b) {
    if (a+b > 85) {
        return "Maior que 85";
    }
    else {
        return "Menor que 85";
    }
}

console.log(maiorque(34,12));
console.log(maiorque(40,46));

console.log("\nExercicio 4");
//Exercício 4

function calculamorte(hp, atk) {
    if (hp-atk <= 0) {
        return "Voce morreu";
    }
    else {
        return "Voce esta vivo";
    }
}

console.log(calculamorte(20,20));
console.log(calculamorte(20,15));

console.log("\nExercicio 5");
//Exercício 5

function calculanota(nota) {
    if (nota >= 0 && nota <= 40) {
        return "Reprovado"
    }
    else if (nota >= 41 && nota <= 59){
        return "Recuperacao"
    }
    else {
        return "Aprovado"
    }
}

console.log(calculanota(40));

console.log("\nExercicio 6");
//Exercício 6

function arraypar(vetor) {
    let resultado = [];
    for (let i in vetor) {
       if (i % 2 == 0) {
            resultado.push(i)
       }
    }
    return resultado;
}
let array = [0, 1, 34, 21, 55, 20, 10, 33, 87, 102, 639];
console.log(arraypar(array));

console.log("\nExercicio 7");
//Exercício 7

let livro = {
    titulo: 'O Homem de Giz',
    autor: 'C J Tudor',
    ano: 2018,
}

console.log(livro);

livro.editora = "Intrínseca";
livro.paginas = 272;
livro.tradutor = "Alexandre Raposo";

console.log(livro);