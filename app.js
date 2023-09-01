var calculoDesconto = require('./modulo/descontoCalculo.js')

const { stdin } = require('process');
var readline = require('readline');
const { isStringObject } = require('util/types');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('+-----------------------------------------+')
console.log('|             MAGAZINE E LUANA            |')
console.log('+-----------------------------------------+')
console.log('---------  BEM-VINDO A APLICAÇÃO ----------')
console.log('-------------------------------------------')
console.log('Selecione o item que deseja comprar: ')
console.log(' ')
console.log('Geladeira..........................R$ 3.114')
console.log('Celular............................R$ 3.599')
console.log('Teleisão...........................R$ 2.299')
console.log('Fogão..............................R$ 4.441')
console.log('Ar-condicionado....................R$ 2.199')
console.log('Micro-ondas........................R$ 1.154')
console.log('-------------------------------------------')
console.log(' ')

entradaDados.question('Informe o valor do item desejado: ', function (produtoEscolha) {
    let produtoValor = produtoEscolha.toLowerCase();

    if (produtoValor == '') {

        console.log('-------------------------------------------')
        console.log('ERRO: Preencha o campo CORRETAMENTE')
        console.log('-------------------------------------------')

    } else if (isNaN(produtoValor)) {

        console.log('-------------------------------------------')
        console.log('ERRO: Digite SOMENTE números')
        console.log('-------------------------------------------')

    } else {
        console.log('Selecione a forma de pagamento: que deseja comprar: ')
        console.log(' ')
        console.log('1 - À vista, com 8% de desconto')
        console.log('2 - À vista no cartão, 4% de desconto')
        console.log('3 - Em 2x, preço normal sem juros')
        console.log('4 - Em 4x, preço acrescdo de 8%')
        console.log('-------------------------------------------')

        entradaDados.question('Selecione a forma de pagamento: que deseja comprar: ', function (pagamentoEscolha) {
            let pagamento = pagamentoEscolha;

            pagamento = parseInt(pagamentoEscolha)

            if (pagamento == '') {

                console.log('-------------------------------------------')
                console.log('ERRO: Preencha TODOS os campos CORRETAMENTE')
                console.log('-------------------------------------------')

            } else if (isNaN(pagamento)) {

                console.log('-------------------------------------------')
                console.log('ERRO: Digite SOMENTE números')
                console.log('-------------------------------------------')

            } else if (pagamento == 1 || pagamento == 2 || pagamento == 3 || pagamento == 4) {

                produtoValor = parseInt(produtoValor)
                
                console.log(' ')
                console.log('| Valor original: ' + produtoValor)

                resultado = calculoDesconto.desconto(produtoValor, pagamento);

            }else {
                console.log('-------------------------------------------')
                console.log('ERRO: Opção INVÁLIDA')
                console.log('-------------------------------------------')
        
            }
            entradaDados.close();

        })
    }
})
