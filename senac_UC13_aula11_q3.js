
let alunos = [
    { nome: 'Arthur', notas: [7, 8, 9] },
    { nome: 'Adonias', notas: [1, 4, 6] },
    { nome: 'João', notas: [10, 9, 8] }
];

for (let i = 0; i < alunos.length; i++) {
    let aluno = alunos[i];
    let soma = 0;

    
    for (let j = 0; j < aluno.notas.length; j++) {
        soma += aluno.notas[j];
    }

    
    let media = soma / aluno.notas.length;

    
    console.log(`${aluno.nome}: Média = ${media.toFixed(2)}`);
}
