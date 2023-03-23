// Preencha aqui as respostas dos exercícios

// Exercício 1

console.log('\nEXERCÍCIO 1\n');

function Media (n1, n2, n3) 
{
    return (n1 + n2 + n3) / 3;
}

console.log(Media(1, 2, 3));

//Exercicio 2

console.log('\nEXERCÍCIO 2\n');

function FahrenheitToCelsius(f) 
{
    return ((f - 32) * 5) / 9;
}

console.log(FahrenheitToCelsius(50));

//Exercicio 3

console.log('\nEXERCÍCIO 3\n');

function Soma(n1, n2)
{
    let soma = n1 + n2;

    return soma > 85 ? soma : ''
}

console.log(Soma(43, 43));

//Exercício 4

console.log('\nEXERCÍCIO 4\n');

function Matar(dano, saude) 
{
    let res = saude - dano;

    return res > 0 ? 0 : 1;
}

console.log(Matar(110, 100));

//Exercício 5

console.log('\nEXERCÍCIO 5\n');

function Resultado(nota)
{
    if(nota <= 40)
        return 'Reprovado';

    if(nota <= 59)
        return 'Recuperação';

    return 'Aprovado';
}

console.log(Resultado(60));

//Exercício 6

console.log('\n EXERCÍCIO 6\n');

let array = [0, 1, 34, 21, 55, 20, 10, 33, 87, 102, 639];

function Pares(array) 
{
    let pares = []

    for(let i of array)
    {
        if(i % 2 === 0)
            pares.push(i);
    }

    return pares;
}

console.log(Pares(array));

//Exercício 7

console.log('\nEXERCÍCIO 7\n');

let livro = {
    titulo: 'O Homem de Giz',
    autor: 'C J Tudor',
    ano: '2018'
};

livro.editora = 'Intríseca';
livro.paginas = 272;
livro.tradutor = 'Alexandre Raposo';

console.log(livro);
