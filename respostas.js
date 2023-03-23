





// Exercício 1

console.log("EXERCÍCIO 1\n");

let num1 = 1;
let num2 = 2;
let num3 = 3;

function media(a, b, c) {
    let media = (a + b + c)/3;
    return media;
}

console.log("Media = ");
console.log(media(num1, num2, num3));
console.log("\n");

// Exercício 2

console.log("EXERCÍCIO 2\n");

let fahrenheit = 92;
function calculaFahrenheit(f) {
    let celsius = ( ( f - 32 ) * 5 ) / 9;
    return celsius;
}

let celsius = calculaFahrenheit(fahrenheit);

console.log("Fahrenheit em Celsius = ")
console.log(Math.round(celsius));
console.log("\n");

// Exercício 3

console.log("EXERCÍCIO 3\n");

let num4 = 60;
let num5 = 80;
let soma = num4 + num5;

if(soma > 85){
    console.log("soma maior que 85, resultado: ");
    console.log(soma);
} else if(soma <= 85){
    console.log("soma menor que 85, resultado: ");
    console.log(soma);
}
console.log("\n");

// Exercício 4

console.log("EXERCÍCIO 4\n");

let dano = 52;
let saude = 40;
function personagemMorreu (dano, saude) {
    if(dano => saude)
        return 1;
    if(dano < saude)
        return 0;
}

let resultado = personagemMorreu(dano, saude);

if(resultado == 1){
    console.log("O personagem morreu! :(");
} else {
    console.log("O personagem está vivo!!!! :)")
}

console.log("\n");

// Exercício 5
    let nota = 87;
    function anoLetivo(nota) {
        
        if(nota < 40 && nota > 0)
            return "Reprovado";

        if(nota < 60 && nota > 40)
            return "Recuperação";   
        if(nota > 60)
            return "Aprovado"; 

    }
    console.log("EXERCICIO 5\n");
    console.log(anoLetivo(nota));
    console.log("\n");

// Exercício 6

let array = [0, 1, 34, 21, 55, 20, 10, 33, 87, 102, 639];
function arrayPar(array) {
    let arrayPares = [];
    let y = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            arrayPares[y] = array[i];
            y++;
        }
    }
    return arrayPares;
}

console.log("EXERCICIO 6\n");
console.log(arrayPar(array));
console.log("\n");

// Exercício 7

let livro = {
    titulo: 'O Homem de Giz',
    autor: 'C J Tudor',
    ano: 2018,
}

function ex7() {

    livro.editora = 'Intrínseca';
    livro.paginas = 272;
    livro.tradutor = 'Alexandre Raposo';   

    return livro;
}
console.log("EXERCICIO 7\n");
console.log("Livro: ");
console.log(ex7());
console.log("\n");
