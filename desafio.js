// Parte 1
// Declarar 5 variaveis para representar um produto
// preço, nome do produto, numeração de lote, validade do produto, quantidade de estoque 

const nomeDoProduto = "Limpol";
let preco = 12;
let numeracaoDoLote = 13579;
let validadeDoProduto = "01.07.2027";
let quantidadeEstoque = 20;

console.log(`O produto ${nomeDoProduto}, do lote ${numeracaoDoLote}, validade ${validadeDoProduto} está saindo por ${preco} reais! Corra já, somente ${quantidadeEstoque} unidades no estoque! `);


// Parte 2 
// Crie duas variaveis numericas e exiba uma subtração

let precoInicial = 12;
const desconto = 0.3;
const precoComDesconto = precoInicial - desconto;

console.log(`Além disso, temos 3% de desconto. Então, ao inves de você levar o produto ${nomeDoProduto} por ${precoInicial} reais, você irá levar por ${precoComDesconto} reais!`);


// Parte 3 
// Declarar preço e quantidade. Calcular o valor total, o valor com 20% de desconto, quantos produtos inteiros se compra com R$ 500 reais, e quanto sobra de troco.

const produto = "Caderno";
let precoSecundario = 40;
let quantidade = 60;

const descontoSecundario = 0.20;
const precoComDescontoSecundario = (precoSecundario * descontoSecundario);
const precoAtualizado = precoSecundario - precoComDescontoSecundario;

console.log(`Somente nas lojas americanas, o ${produto} está saindo no preço bruto de ${precoSecundario} reais. Porém, estamos com desconto de 20%, então nosso produto ficará ${precoAtualizado} reais`);


// Quantos produtos inteiros se compra com R$ 500 reais, e quando sobra de troco:

const quinhentosReais = 500;
const quantidadeCadernos = Math.floor(quinhentosReais / precoSecundario);
const troco = quinhentosReais % precoSecundario;

console.log(`Você pode comprar ${quantidadeCadernos} cadernos com apenas 500 reais.`);
console.log(`E o melhor, ainda vai sobrar R$ ${troco} de troco.`);

// Parte 4 
// Declare estoque e preço e exiba se o produto, se está em falta e se precisa de reposição de produto.