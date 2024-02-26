/*
====
15_tarefa_02
====

Enunciado 

Crie um novo projeto de Node.js;
Crie um arquivo para a aplicação com o nome programa;
No arquivo crie duas variáveis e imprima a soma delas;
Execute o arquivo e verifique a resposta no terminal;


*/

const inquirer = require("inquirer")
const chalk = require("chalk")

inquirer
    .prompt([
        {
            name: 'nome',
            message: 'Qual o seu nome?'
        },
        {
            name: 'idade',
            message: 'Qual é a sua idade?'
        },
    ])
    .then((answers) => {
        const response = `O nome do usuário é ${answers.nome} e ele(a) tem ${answers.idade}`
        console.log(chalk.bgYellow.black(response))
    })
    .catch((err) => {
        console.log(err)
    })