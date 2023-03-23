// Preencha aqui as respostas dos exercícios
//1
let media, number1, number2, number3;

number1 = 10;

number2 = 20;

number3 = 30;

media = (number1 + number2 + number3)/ 3;

console.log(media);

//2

let F = 100;

let C = ( ( F - 32 ) * 5 ) / 9;

console.log(C);

//3

let a = 1, b = 84, c;

c = a + b;

if (c > 85) {
    console.log(c);
}

//4

function personagemMorreu (dano, saude) {

    if (dano > saude) {

        return 1;
    }
    
    else { 
        
        return 0;
    
    }

}

let dano = 0.6, saude = 0.5; 

console.log(personagemMorreu(dano, saude));

//5 
let caso;
function calcNota(nota){
    if(nota < 40) 
    return 1;
    else if(41 < nota < 59)
    return 2;
    else return 3;
}
    switch (calcNota(30)) {
        case 1 :
            console.log("Reprovado");
            break;
        case 2 : 
            console.log("Recuperação");
            break;
        case 3 : 
            console.log("Aprovado");
            break;
    }

//6 

let array = [0, 1, 34, 21, 55, 20, 10, 33, 87, 102, 639];

for(let i = 0; i < 11; i++) {

        array[i] 
}


