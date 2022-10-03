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
    ],
    imprimirResumo: function () {
        this.nomeDoCliente;
        contador = 0;
        valorTotal = 0;

        for (let item of this.produtos) {
            if (item.qtd > 0) {
                contador += item.qtd
                this.calcularTotalAPagar();
            }

        }
        console.log(`Cliente: ${this.nomeDoCliente} \n Total de itens: ${contador} itens \n Total a pagar: ${(valorTotal / 100).toFixed(2)}`);
    },
    addProduto: function (produto) {
        let existe = false
        let { produtos } = carrinho;
        for (const item of produtos) {
            if (item.id == produto.id) {
                item.qtd += produto.qtd;
                existe = true;
            }
        }

        if (!existe) {
            this.produtos.push(produto);
        }

    },
    imprimirDetalhes: function () {
        let { nomeDoCliente, produtos } = this;
        console.log(`Cliente: ${nomeDoCliente}`);

        let valorTotal = 0;
        let contadorDeItens = 1;

        for (const produto of produtos) {
            let { nome, precoUnit, qtd } = produto;
            if (produto > 0) {

                console.log(`Item ${contadorDeItens} - ${nome} - ${qtd} und - R$ ${(precoUnit * qtd) / 100}`)
                contadorDeItens++;
                this.calcularTotalAPagar();
            }
        }

        console.log(`Total de itens: ${this.calcularTotalDeItens()}`);
        console.log(`Total a pagar: ${(this.calcularTotalDeItens() / 100).toFixed(2)}`);
    },
    calcularTotalDeItens: function () {
        let totalDeItens = 0;
        for (const produto of carrinho.produtos) {
            if (produto > 0) {
                totalDeItens += item.qtd;
            }
        }
        return totalDeItens;

    },
    calcularTotalAPagar: function () {
        valorTotal = 0;
        for (const produto of produtos) {
            if (produto > 0) {
                valorTotal += produto.qtd * produto.precoUnit;
            }
        }
    },
    calcularDesconto: function () {
        let { produtos } = carrinho;
        let totalAPagar = this.calcularTotalAPagar() / 100;
        let totalDeItens = this.calcularTotalDeItens();

        let descontoTotalPorItens = 0;
        let descontoTotalPorValor = 0;

        if (totalDeItens > 4) {
            descontoTotalPorItens = produtos[0].precoUnit / 100;
            for (const produto of produtos) {
                if (produto.precoUnit < descontoTotalPorItens) {
                    descontoTotalPorItens = produto.precoUnit / 100;
                }
            }
        }

        if (totalAPagar > 100) {
            descontoTotalPorValor = totalAPagar * 0.1;
        }

        return descontoTotalPorItens > descontoTotalPorValor ? descontoTotalPorItens : descontoTotalPorValor;
    }

}


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}


carrinho.imprimirDetalhes();
carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
// carrinho.imprimirResumo();

console.log(carrinho);