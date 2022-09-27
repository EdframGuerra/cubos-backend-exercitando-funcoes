// implemente a função corrigirProva de modo que, ao receber um 
// objeto como este como parâmetro, o resultado seja o seguinte.

// O aluno(a) João acertou 3 questões e obteve nota 6
let contador = 0;


const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {
    for (let item of prova.questoes) {
        if (item.resposta === item.correta) {
            contador++;
        }
    }
    let nota = contador * 2;
    console.log(`O(A) ${prova.aluno} acertou ${contador} questões e obteve nota ${nota}`)
}
corrigirProva(prova)


