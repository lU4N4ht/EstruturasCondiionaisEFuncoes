function desconto(produto, tipoPagamento) {
    let produtoValor = produto;
    let pagamento = tipoPagamento;
    let resultado;

    if (pagamento == "1") {
        let resultado =  produtoValor - ((8 / 100) * produtoValor) 

        console.log('| Valor final com desconto aplicado: ' + resultado)


    } else if (pagamento == "2") {
        resultado = produtoValor - ((4 / 100) * produtoValor) 

        console.log('| Valor final com desconto aplicado: ' + resultado)

    } else if (pagamento == "3") {
        resultado =  produtoValor / 2
        
        console.log('| Valor final em duas parcelas de: ' + resultado)

    } else if (pagamento == "4") {

        resultado =  (((8 / 100) * produtoValor) + produtoValor) / 4

        console.log('| Valor final em quatro parcelas com o acrescimo de 8% aplicado: ' + resultado)

    } 

    if (resultado != undefined)
        return resultado;

    else
        return false;
}

module.exports = {
    desconto
}