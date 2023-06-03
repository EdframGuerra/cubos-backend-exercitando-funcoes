const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historico: [],
    depositar: function (valor) {
        let { nome, saldo, historico } = contaBancaria
        let operacaoDeDeposito = {
            tipo: "Depósito",
            valor: 10000
        }
        if (valor > 0) {
            this.saldo += operacaoDeDeposito.valor
            historico.push(operacaoDeDeposito);
            console.log(`Deposito de R$ ${(valor / 100).toFixed(2)} realizado para o cliente: ${nome}`);
        }



    },
    sacar: function (valor) {

        let { nome, saldo, historico } = contaBancaria;
        let operacaoDeSaque = {
            tipo: "Saque",
            valor: 5000 
        }

        if (operacaoDeSaque.valor > saldo) {
            console.log(`Saldo insuficiente para o saque de: ${nome}`)
        } else {
            saldo = operacaoDeSaque.valor - saldo;
            console.log(`Saque de ${(valor / 100).toFixed(2)} realizado para o cliente: ${nome}`);
        }


    },
    extrato: function () {

    }
}

contaBancaria.depositar(1890000);
console.log(contaBancaria);
contaBancaria.sacar(5000);
