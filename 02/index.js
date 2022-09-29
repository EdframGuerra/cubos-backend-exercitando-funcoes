// b) Acrescentar neste objeto carro um membro chamado ligar que possuirá como valor uma função que implementará a seguinte lógica:
// Verificar se o carro está ligado ou não. - Se o carro já estiver ligado, deverá imprimir uma mensagem no console dizendo: 
// . - Se não (se o carro não estiver ligado), deverá alterar a propriedade ligado para true.
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

// f) Após construir todo o objeto com suas propriedades e métodos, deveremos executar os métodos na seguinte ordem:
// Desligar o carro
carro.desligar();
// Ligar o carro
carro.ligar();
// Ligar o carro
carro.ligar();
// Acelerar o carro
carro.acelerar();
// Acelerar o carro
carro.acelerar();
// Desacelerar o carro
carro.desacelerar();
// Desligar o carro
carro.desligar();
// Acelerar o carro
carro.acelerar();
// Desacelerar o carro
carro.desacelerar();
// As mensagens que deverão ser exibidas no console são:

// Este carro já está desligado.
// Carro ligado. Velocidade: 0.
// Este carro já está ligado.
// Carro ligado. Velocidade: 10.
// Carro ligado. Velocidade: 20.
// Carro ligado. Velocidade: 10.
// Carro desligado. Velocidade: 0.
// Não é possível acelerar um carro desligado.
// Não é possível desacelerar um carro desligado.
