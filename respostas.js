// Preencha aqui as respostas dos exercícios

//EXERCICIO 1

function exercicio1(a, b, c) {
  let media = (a + b + c) / 3;
  return media;
}
console.log("----------------------------------------------");
console.log("Exercício 1");
console.log("A média é igual a: " + exercicio1(10, 10, 10));


//EXERCICIO 2

function temperatura(F) {
  let celcius = ((F - 32) * 5) / 9;
  return celcius;
}
console.log("----------------------------------------------");
console.log("Exercício 2");
console.log(temperatura(100).toFixed(2) + " Celcius");


//EXERCICIO 3

function exercicio3(a, b) {
  let soma = a + b;
  if (soma > 85) {
    return soma;
  } else {
    return "Menor que 85.";
  }
}
console.log("----------------------------------------------");
console.log("Exercício 3");
console.log("Soma é igual a: " + exercicio3(50, 50));


//EXERCICIO 4

function personagemMorreu(dano, saude) {
  if (dano >= saude) {
    return 1;
  } else {
    return 0;
  }
}
console.log("----------------------------------------------");
console.log("Exercício 4");
console.log(personagemMorreu(100, 50));


//EXERCICIO 5

function validacao(num) {
  if (num > 0 && num < 40) {
    console.log("Reprovado");
  } else if (num > 40 && num < 60) {
    console.log("Recuperacao");
  } else if (num >= 60) {
    console.log("Aprovado");
  }
}
console.log("----------------------------------------------");
console.log("Exercício 5");
validacao(80);
validacao(59);
validacao(30);


//EXERCICIO 6

function deixaPares(array) {
    var arrayPar = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0){
        arrayPar.push(array[i]);
    }
  }
  return arrayPar;
}
console.log("----------------------------------------------");
console.log("Exercício 6");
console.log("Array de pares: " + deixaPares([0, 1, 34, 21, 55, 20, 10, 33, 87, 102, 639]));


//EXERCICIO 7 

let livro = {
    titulo: 'O Homem de Giz',
    autor: 'C J Tudor',
    ano: 2018,
}

livro.editora = "Inrinseca";
livro.paginas = 272;
livro.tradutor = "Alexandre Raposo";

console.log("----------------------------------------------");
console.log("Exercício 7");
console.log(livro);
