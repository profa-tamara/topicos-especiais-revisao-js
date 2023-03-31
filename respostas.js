//EX1
var a= prompt("Exercicio 1: Insira o valor de A:")
a = parseFloat(a)
var b= prompt("Insira o valor de B")
b = parseFloat(b)
var c= prompt("Insira o valor de C:")
c = parseFloat(c)
var media = (a+b+c)/3
alert("Media: "+media)

//EX2
f = prompt("Exercicio 2: Temperatura em Fahrenheit")
var graus = ( ( f - 32 ) * 5 ) / 9
alert("Em graus: "+graus)

//EX3
a= prompt("Exercicio 3: Primeiro numero:")
a = parseFloat(a)
b= prompt("Segundo numero")
b = parseFloat(b)
var soma = a+b
if(soma > 85){
    alert(soma)
}

//EX4
var dano= prompt("Exercicio 4: Dano: ")
dano = parseFloat(dano)
var vida = prompt("Vida: ")
vida = parseFloat(vida)
function mortoOuVivo(dano, vida){
    if(dano >= vida){
        alert(1)
    }else{
        alert(0)
    }
}
mortoOuVivo(dano, vida);

//EX5
function recebeNum(num){
    if(num < 40){
        alert("Reprovado")
    }else if(num>=40 && num < 60){
        alert("Recuperacao")
    }else{
        alert("Aprovado")
    }
}
var nota = prompt("Exercicio 5: Digite sua nota:")
nota = parseInt(nota)
recebeNum(nota)

//EX6
function parVetor(){
    var vetor = [0, 1, 34, 21, 55, 20, 10, 33, 87, 102, 639]
    var novoVetor = []
    for(var i = 0; i <= vetor.length; i++){
        if((vetor[i] % 2) == 0){
            novoVetor.push(vetor[i])
        }
    }
    alert("Exercicio 6: "+novoVetor.join(","))
}
parVetor()

//EX7
let livro = {
    titulo: 'O Homem de Giz',
    autor: 'C J Tudor',
    ano: 2018,
}
livro.editora = 'Intrínseca',
livro.paginas = 272,
livro.tradutor = "Alexandre Raposo"
var textLivro = JSON.stringify(livro);
alert(textLivro)
