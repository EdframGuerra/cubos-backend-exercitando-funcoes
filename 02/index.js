const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (carro.ligado === true) {
            console.log("Este carro já está ligado");
        } else {
            carro.ligado = true;
            console.log(`Carro ligado. Velocidade: ${carro.velocidade}`);
        }
    },
    desligar: function () {
        if (carro.ligado === false) {
            console.log("Este carro já está desligado");
        } else {
            carro.ligado = false;
            console.log(`Carro desligado. Velocidade ${carro.velocidade}`);
        }
    },
    acelerar: function () {
        if (carro.ligado === false) {
            console.log("Não é possível acelerar um carro desligado");
        } else {
            carro.velocidade = carro.velocidade + 10;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}`);
        }
    },
    desacelerar: function () {
        if (carro.ligado === false) {
            console.log("Não é possível desacelerar um carro desligado");
        } else {
            carro.velocidade = carro.velocidade - 10;
            console.log(`Carro ligado. Velocidade ${carro.velocidade}`)
        }
    }

}

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
