const inquirer = require('inquirer');
const chalk = require('chalk');

function calculateTips() {
  console.log(chalk.bgBlue.black('Calculadora de Gorjetas'));
  console.log(chalk.blue('----------------------------------'));

  const serviceLevels = [
    { name: 'Bom (15%)', value: 15 },
    { name: 'Ótimo (20%)', value: 20 },
    { name: 'Excelente (25%)', value: 25 },
  ];

  inquirer
    .prompt([
      {
        name: 'totalBill',
        type: 'number',
        message: 'Qual é o valor total da conta?',
        validate: (value) => value > 0,
      },
      {
        name: 'numPeople',
        type: 'number',
        message: 'Quantas pessoas estão dividindo a conta?',
        validate: (value) => value > 0,
      },
      {
        name: 'serviceLevel',
        type: 'list',
        message: 'Selecione o nível de serviço:',
        choices: serviceLevels,
      },
    ])
    .then((answers) => {
      const totalBill = answers.totalBill;
      const numPeople = answers.numPeople;
      const serviceLevel = answers.serviceLevel;

      const people = [];
      for (let i = 0; i < numPeople; i++) {
        people.push({
          name: `person${i + 1}`,
          message: `Quanto deseja contribuir a pessoa ${i + 1}?`,
          type: 'number',
          validate: (value) => value >= 0,
        });
      }

      console.log(chalk.blue('----------------------------------'));
      console.log(chalk.bgBlue.black('Contribuição Individual'));

      inquirer.prompt(people).then((contributions) => {
        const totalContribution = Object.values(contributions).reduce(
          (acc, curr) => acc + curr
        );

        if (totalContribution !== totalBill) {
          console.log(
            chalk.red(
              `A soma das contribuições individuais (${totalContribution}) não é igual ao valor total da conta (${totalBill})`
            )
          );
          return;
        }

        const tipPercentage = serviceLevel / 100;
        const totalWithTip = totalBill * (1 + tipPercentage);
        const individualAmount = totalWithTip / numPeople;
        const tipAmount = totalWithTip - totalBill;

        console.log(chalk.blue('----------------------------------'));
        console.log(chalk.bgBlue.black('Resultado'));
        console.log(chalk.yellow(`Valor total da conta: R$${totalBill.toFixed(2)}`));
        console.log(chalk.yellow(`Gorjeta (${serviceLevel}%): R$${tipAmount.toFixed(2)}`));
        console.log(chalk.yellow(`Valor total a pagar: R$${totalWithTip.toFixed(2)}`));
        console.log(chalk.blue('----------------------------------'));

        Object.keys(contributions).forEach((person) => {
          const contribution = contributions[person];
          const amountToPay = (contribution * individualAmount) / totalBill;

          console.log(
            chalk.green(`${person}: R$${amountToPay.toFixed(2)}`)
          );
        });
      });
    })
    .catch((error) => {
      console.log(chalk.red('Ocorreu um erro:', error));
    });
}

calculateTips();