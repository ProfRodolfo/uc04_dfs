const inquirer = require("inquirer")

const questions = [
    {
        type: 'list',
        name: 'animal',
        message: 'Qual é o seu animal favorito?',
        choices: ['Cachorro', 'Gato', 'Coelho', 'Peixe', 'Passaro'],
    }
]

inquirer
    .prompt(questions)
    .then(answers => {
        console.log('Seu animal favorito é: ', answers.animal)
        }
    )
    .catch(error => {
             console.error('Ocorreu um erro:', error);
           })