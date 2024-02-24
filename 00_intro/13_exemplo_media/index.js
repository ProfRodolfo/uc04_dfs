const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite o nome do aluno: ", (nomeAluno) => {
    rl.question("Digite a primeira nota: ", (nota1) => {
        rl.question("Digite a segunda nota: ", (nota2) => {
            const media = (parseFloat(nota1) + parseFloat(nota2)) / 2;

            console.log(chalk.bold(`Aluno(a): ${nomeAluno} teve a Média: ${media.toFixed(2)}`));

            if (media >= 7) {
                console.log(chalk.green.bold(" 😉😎 Aprovado!"));

            } else if (media > 5 && media < 7) {
                console.log(chalk.yellow.bold("⚠️ Recuperação!"))
            } else {
                console.log(chalk.red.bold("🤦‍♂️ Reprovado!"));
            }

            rl.close();
        });
    });
});