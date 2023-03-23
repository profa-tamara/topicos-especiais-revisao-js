// Ex 1
const n1 = 8;
const n2 = 6;
const n3 = 10;

const media = (n1 + n2 + n3)/3;
console.log("1) A media de " + n1 + ","+ n2 + ","+ n3 + " é " + media);

//Ex 2
function temp (F){
    let C = ( ( F - 32 ) * 5 ) / 9;
    console.log("2)O resultado é "+ C);
}
console.log(temp(100));

//Ex 3
function maior (n1, n2){
    const r = (n1) + (n2);
    if (r > 85){console.log("3)A soma desses numeros é maior que 85 e é " + r)}
    else{console.log("3)A soma desses numeros é menor que 85")}
}
console.log(maior(7,8));
console.log(maior(77,10));

//Ex 4
function personagemMorreu (dano, saude) {
    if (dano >= saude){console.log("4)" + 1)}
    else {console.log("5) "+0)}
}
console.log(personagemMorreu(2000, 8000));//Não mata
console.log(personagemMorreu(8500, 8000));//Mata

//Ex 5
function nota (valorNota){
    if (valorNota > 0 && valorNota <= 40){console.log("5) Reprovado")}
    if (valorNota > 41 && valorNota <= 59){console.log("5) Recuperação")}
    if (valorNota >= 60){console.log("5) Aprovado")}
}
console.log(nota(10));
console.log(nota(45));
console.log(nota(80));

//Ex 6
function lerArray (a){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let arrayVazio = [];
        arrayVazio[index] = element;
        if(arrayVazio[index] % 2 == 0){console.log("6) " + arrayVazio[index])}   
    }
    
}
let array = [0, 1, 34, 21, 55, 20, 10, 33, 87, 102, 639];
console.log(lerArray(array)); 

//Ex 7
let livro = {
    titulo: 'O Homem de Giz',
    autor: 'C J Tudor',
    ano: 2018,
}

function inserirObj(v1, v2, v3){
    livro.editora= v1;
    livro.paginas= v2;
    livro.tradutor= v3;
}
inserirObj('Intrínseca', 272, 'Alexandre Raposo');
console.log("7)");
console.log(livro);


