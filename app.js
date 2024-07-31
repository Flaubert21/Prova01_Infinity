// Declarando as notas
let n1 = 7.5;
let n2 = 8.5;
let n3 = 6.0;
// Declarando os pesos
let p1 = 2;
let p2 = 4;
let p3 = 5;

// Cálculo da média
let somaPeso = p1 + p2 + p3
let somaNotaPondarada = (n1*p1) + (n2*p2) + (n3*p3)
let media = somaNotaPondarada/somaPeso;

// Exibindo a média
console.log(`A média ponderada é de: ${media}`);