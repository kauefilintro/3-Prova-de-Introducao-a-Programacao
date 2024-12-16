/* 1º Escreva um programa que imprima os números de 1 a 10 usando um laço
   de repetição. Explique o motivo de escolher o laço utilizado */

for (let i = 1; i <= 10; i++) {
    console.log(i)
}
  // Escolhi o laço "for" porque, como sabemos onde será o final do laço, acabou sendo mais simples.
  
  /* 2º Crie um algoritmo que calcule e imprima a soma dos números de 1 a 50
     usando uma estrutura de repetição */
  
let soma2 = 0
for (let i2 = 1; i2 <= 50; i2++) {
    soma2 += i2
}
console.log("Soma de 1 a 50:", soma2)
  
  /* 3º Desenvolva um programa que peça ao usuário um número inteiro positivo
     e utilize uma estrutura de repetição para imprimir todos os números pares
     de 0 até o número informado */
  
let numero3 = parseInt(prompt("Digite um número inteiro positivo:"))
if (numero3 >= 0) {
    console.log("Números pares de 0 até " + numero3)
    for (let i3 = 0; i3 <= numero3; i3 += 2) {
        console.log(i3)
    }
}else{
    console.log("Por favor, insira um número positivo.")
}

  /* 4. Escreva um algoritmo que leia 5 números inteiros digitados pelo usuário
  e calcule a média deles. Utilize um laço para realizar a leitura dos números. */

let total4 = 0
let i4 = 1
while (i4 <= 5) {
    let num4 = parseInt(prompt("Digite o " + i4 + "º número:"))
    total4 += num4
    i4++
}
let media4 = total4 / 5
console.log("Média:", media4)

/* 5. Desenvolva um programa que leia um número inteiro positivo n e exiba o fatorial
de n usando um laço de repetição. */

//Brother, eu não aprendi a fazer fatorial até hoje... vou ficar devendo KKKKK foi mal

/* 6. Implemente um programa que leia números inteiros inseridos pelo usuário até que
seja digitado o número zero. Após isso, exiba a quantidade de números digitados e a soma
total deles (desconsiderando o zero). */

let quantidade6 = 0
let somaTotal6 = 0
let num6

while (num6 !== 0) { 
    num6 = parseInt(prompt("Digite um número (0 para sair):"))
    if (num6 !== 0) {
        somaTotal6 += num6
        quantidade6++
    }
}

console.log("Quantidade de números digitados:", quantidade6)
console.log("Soma total:", somaTotal6)

/* 7. Crie um programa que gere a sequência de Fibonacci até o décimo quinto termo. */

let a7 = 0, b7 = 1
console.log(a7)
console.log(b7)
for (let i7 = 2; i7 < 15; i7++) {
    let proximo7 = a7 + b7
    console.log(proximo7)
    a7 = b7
    b7 = proximo7
}

/* 8. Escreva um programa que simule uma "calculadora interativa". O
programa deve exibir um menu com opções para soma, subtração,
multiplicação e divisão. O usuário escolhe uma operação, insere dois
números e o programa exibe o resultado. O programa deve continuar
rodando até que o usuário escolha a opção "sair". Utilize um laço de
repetição e trate divisões por zero. */

// Professor, eu juro q tenho capacidade para fazer essa questão, mas levando em consideração o fator tempo e atraso para entrega??? Vou ter q estar deixando p período q vem...

/* 9. Elabore um programa que leia uma sequência de números inteiros
(quantidade definida pelo usuário) e determine o maior e o menor valor da sequência. */

let quantidadeNumeros9 = parseInt(prompt("Quantos números você quer informar?"))
let maior9 = -Infinity
let menor9 = Infinity
for (let i9 = 0; i9 < quantidadeNumeros9; i9++) {
    let valor9 = parseInt(prompt(`Digite o ${i9 + 1}º número:`))
    if (valor9 > maior9) maior9 = valor9
    if (valor9 < menor9) menor9 = valor9
}
console.log("Maior valor:", maior9)
console.log("Menor valor:", menor9)

// Essa o ChatGPT me salvou também, não conhecia o termo Infinity. O cálculo funcionou certinho

/* 10. Desenvolva um algoritmo que leia um número inteiro n e desenhe um triângulo formado por
asteriscos (*), onde o número de linhas é igual a n. */

// Brother, essa eu nem vou tentar.. foi mal KKKKKK, como desenhar um triângulo aqui????????