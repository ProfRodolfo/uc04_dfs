const inquirer = require("inquirer")

const questions = [
    {
        type: 'input',
        name: 'name', 
        message: 'Qual é o seu nome?',
        validate: function (value){
            if (value.trim().length> 3){
                return true;
            } else {
                return 'Por favor, digite seu nome'
            }
        }
    }
]

inquirer
    .prompt(questions)
    .then(answers => {
        console.log("Olá, " + answers.name + "!")
    })
    .catch(error => {
        console.log("Ocorreu um erro: ", error)
    })