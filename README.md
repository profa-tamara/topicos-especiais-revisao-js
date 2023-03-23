# Tópicos Especiais em Informática

## Revisão de Conteúdo - JavaScript

Olá, turma!
Neste repositório, consta uma lista de exercícios de lógica de programação para revisar seus conhecimentos em JavaScript.

Essa lista pode ser feita individualmente ou em duplas.

__Valor: 5 pontos__

### Antes de começar

- Crie uma branch a partir de `main`, que conste o nome/sobrenome da dupla e a sigla da disciplina. Com o mesmo comando, faça a criação da branch e a migração.

__Exemplo__: `git checkout -b TE-joana-silva-marcelo-santos`

- Faça o `git clone` na máquina local ou abra o arquivo `respostas.js` no `github.dev`.

[Caso trabalhe com o repositório com o uso de `git clone`:
Salve o arquivo, dê os `commits` e o `push`]

[Caso trabalhe com o uso do `github.dev`:
Clique no ícone lateral do GitHub.dev, dê um nome ao commit e clique em **Commit & Push**]

- Abra um **Pull Request** comparando a branch criada com a `main`.
No nome do Pull Request, use a sigla da disciplina, o nome do exercício e o nome da dupla.
_Exemplo_: [TE] Revisão - Joana Silva e Marcelo Santos

### Lista de Exercícios

#### Exercício 1

Faça um programa que leia 3 números, some-os e exiba a média entre eles.

Dica:

```code
A média entre dois números, é a soma dos dois números divididos por 2
A média entre três números, é a some dos três números divididos por 3
A média entre 'n' números, é a some dos 'n' números divididos por 'n'
```

<hr>

#### Exercício 2

Faça um programa que leia do usuário uma temperatura em Fahrenheit, converta-a para graus Celsius e escreva o novo valor na tela. A fórmula de conversão de Fahrenheit (F) para Celsius é:

```code
C = ( ( F - 32 ) * 5 ) / 9.
```

**Exemplo:** 100 Fahrenheit = 37,77 Celsius.

<hr>

#### Exercício 3

Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 85.

<hr>

### Exercício 4

Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' se o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.

Dica - utilize a seguinte função:

```code
function personagemMorreu (dano, saude) {
  //
}
```

<hr>

### Exercício 5

Crie uma função que receba um valor de 0 a 100 como parâmetro e faça a seguinte validação:

- Se o valor estiver entre 0 a 40, a função deve retornar `Reprovado`.
- Se o valor estiver entre 41 a 59, a função deve retornar `Recuperação`.
- Se o valor for maior que 60, a função deve retornar `Aprovado`.

<hr>

### Exercício 6

