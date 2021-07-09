//alert("Revisando javascrip"); //Mostra um popup no navegador

let num1 = 2; //declara a variável
let num2 = 3;
let soma = num1 + num2; // somando valores
let valor = 4.99;
let exemploArray = []; //cria array
let data = new Date()
let idade = data.getFullYear() - 1992
let computador = ["Monitor", "Teclado", "Mouse", "Gabinete"]
let pessoa = { nome: "Rodrigo", estadoCivil: "Casado", Idade: data.getFullYear() - 1992 }
//alert("Resultado de " + num1 + " + " + num2 + " = " +soma);// concatenando variaveis e string
//console.log("Resultado de " + num1 + " + " + num2 + " = " +soma); // mostra no console do navegador
//console.log("O par de meia custa: "+ valor.toString().replace(".",",")); // converte número em string e depois troca "." por ","
//console.log(exemploArray); //retorna array vazio
//console.log(computador[3]); // retorna o valor dentro do array na posição 3
//console.log(pessoa)

function somaValores(a, b) {
    return a + b;
}
//console.log(somaValores(num2, num2)) //executando uma função

/*idade = prompt("Qual é a sua idade?")

if (idade >= 18) {
    alert("Maior de idade")
}else {
    alert("Menor de idade")
} */
/*
let count = 0;

while (count <= 5) {
    console.log(count)
    count++;
}
*/

function botao(){
    alert("Obrigado por Clicar");
}

function mensagem(){
    document.getElementById("mensagem").innerHTML = "Seja bem vindo!"
}