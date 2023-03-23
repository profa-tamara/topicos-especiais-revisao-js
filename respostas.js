
//exercicio 1
    function exer1(num1, num2, num3){
        let resposta = (num1 + num2 + num3)/3;
        return resposta; 
    }
    console.log(exer1(2,2,2));



//exercicio 2
function exer2 (F) {
    let C = ( ( F - 32 ) * 5 ) / 9;
    return C; 
}
console.log(exer2(100));


//exercicio 3
function exer3(n1, n2) {
    let soma = n1 + n2;
    if(soma > 85){
        return soma
    }
}
 console.log(exer3(81, 5))

//exercicio 4

function personagemMorreu(dano, saude) {
    if(dano>=saude){
        return 1 //MORREU
    }
    else return 0 //VIVEU
}

console.log(personagemMorreu(105, 100))


//exercicio 5
function exer5(nota) {
    let condicao
    if(nota <= 40) {
        condicao = 'reprovado'
        return condicao
    }
    if (nota > 41 && nota < 59) {
        condicao = 'recuperacao'
        return condicao
    }
    else return 'aprovado'
}

console.log(exer5(62)); 

//exercicio 6

function exer6(array){
    let j = 0;
    let vetor=[]
    for (i=0; i<array.length; i++){
        if(array[i] %2 === 0){
        vetor[j] = array[i];
        j++
    }
    return vetor
}
}
console.log(exer6([0,1,34,21,55,20,10,33,87,102,639]))

//exercicio 7

let livro = {
    titulo: 'O Homem de Giz',
    autor: 'C J Tudor',
    ano: 2018,
}

livro.editora = 'Intrínseca';
livro.paginas=272;
livro.tradutor= 'Alexandre Raposo';

console.log(livro);
