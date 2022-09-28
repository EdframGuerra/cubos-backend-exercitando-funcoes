// b) Sabendo que o parâmetro carrinho será sempre um objeto com o seguinte formato:
const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ]
}


// a) Declare uma função de nome imprimirResumoDoCarrinho que tenha apenas um parâmetro chamado carrinho.

function imprimiResumoDoCarrinho(parrinho) {
    // Implemente a função imprimirResumoDoCarrinho de modo que, ao receber um objeto como este como 
    // parâmetro, o resultado seja o seguinte.
    // Cliente: Guido Bernal
    carrinho.nomeDoCliente;
    contador = 0;
    valorTotal = 0;
    for (let item of carrinho.produtos) {
        if (item.qtd > 0) {
            contador += item.qtd
            valorTotal = valorTotal + (item.qtd * item.precoUnit)
        }


    }
    console.log(`${carrinho.nomeDoCliente} \n Total de Itens: ${contador} \n Total a pagar: ${valorTotal}`)
}

// Total de itens: 5 itens

// Total a pagar: R$ 190,00

// Para testar sua implementação, chame a função imprimirResumoDoCarrinho passando o objeto carrinho
// exemplificado acimam como argumento.
// imprimiResumoDoCarrinho(carrinho);


// c) Modifique a questão anterior para que a função imprimirResumoDoCarrinhoseja um método do
// objeto carrinho (sendo assim, cabe mudar o nome do método para apenas imprimirResumo) ao invés de
// uma função isolada.

// d) Declare uma nova função isolada chamada addProdutoAoCarrinho que tenha dois argumentos: carrinho
//  e produto.

// e) Implemente a função addProdutoAoCarrinho de modo que o produto passado com argumento seja adicionado ao array de produtos da compra.

// b) Sabendo que o parâmetro carrinho será sempre um objeto com o seguinte formato:

