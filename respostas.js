//Exercício 1

function media(num1, num2, num3){
    let media;

    if(num3 !== undefined){
        let soma = num1 + num2 + num3;
        media = soma/3;
    } else{
        let soma = num1 + num2;
        media = soma/2;
    }

    return media;
}

console.log(media(2, 4, 8));

//Exercício 2

function convercao(temp){
    return ( ( temp - 32 ) * 5 ) / 9;
}

console.log(convercao(87));

//Exercício 3

function oitenta(num1, num2){
    let soma = num1 + num2;
    if(soma >= 85){
        return soma;
    } else{
        return "Menor que 85";
    }
}

console.log(oitenta(12, 7));
console.log(oitenta(67, 112));

//Exercício 4

function personagemMorreu (dano, saude){
    let result = saude - dano;
    if(result >= 0){
        return 1;
    } else{
        return 0;
    }
}

console.log(personagemMorreu(20, 25));
console.log(personagemMorreu(35, 7));

//Exercício 5

function boletim (val){
    if(val <= 40){
        return "Reprovado";
    } else if (val <= 59) {
        return "Recuperação";
    } else if (val <= 100) {
        return "Aprovado";
    } else{
        return "inválido";
    }
}

console.log(boletim(59));
console.log(boletim(99));

//Exercício 6

function pares (array){
    let array2 = [];

    for(let i = 0; i < array.length; i++){
        if((array[i] % 2) === 0){
            array2.push(array[i]);
        }
    }

    return array2;
}

let array = [0, 1, 34, 21, 55, 20, 10, 33, 87, 102, 639];
console.log(pares(array));

//Exercício 7

let livro = {
    titulo: 'O Homem de Giz',
    autor: 'C J Tudor',
    ano: 2018,
}

livro.editora = 'Intrínseca';
livro.paginas = 272;
livro.tradutor = 'Alexandre Raposo';

console.log(livro);
