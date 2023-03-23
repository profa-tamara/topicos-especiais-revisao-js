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