//EXERCÍCIO 1
function media(a,b,c) {
    let media = a + b + c / 3;
    return media;
}
console.log(media(10,2,4));

//EXERCÍCIO 2
function converte(f) {
    let C = ( ( f - 32 ) * 5 ) / 9;
    return C;
}
console.log(converte(50) + ' ℃');

//EXERCÍCIO 3
function soma(a,b) {
    let soma = a + b;
    
    if (soma >= 85) {
        return soma;
    }
    }
console.log(soma(75,16));

//EXERCICIO 4
function personagemMorreu (dano, saude) {
    
    let morte = saude - dano;
    
    if (morte <= 0) {
        return 1;
    } 
    else{
        return 0;
    }
    }

console.log(personagemMorreu(4,5));

//EXERCICIO 5
function avalia(nota) {

    if(nota >=0 && nota <=40) {
        return 'Reprovado';
    }
    if(nota >=41 && nota <=59) {
        return 'Recuperação';
    }
    if(nota>=60) {
        return 'Aprovado';
    }
}
console.log(avalia(30));
console.log(avalia(57));
console.log(avalia(90));


//EXERCÍCIO 6
function filtrarArray(array) {
    let arrayPar = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        arrayPar.push(array[i]);
      }
    }
    return arrayPar;
  }

  let array = [0, 1, 34, 21, 55, 20, 10, 33, 87, 102, 639];
  let arrayPar = filtrarArray(array);

  console.log(arrayPar); 


//EXERCÍCIO 7
let livro = {
    titulo: 'O Homem de Giz',
    autor: 'C J Tudor',
    ano: 2018,
}

    livro.editora = 'Intrínseca';
    livro.paginas = 272;
    livro.tradutor = 'Alexandre Raposo';


console.log(livro);