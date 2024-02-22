const minimist = require("minimist")

const args = minimist(process.argv.slice(2))
console.log(args)

const nome = args["nome"]
console.log(`Meu nome é: ${nome}`)
const idade = args["idade"]
console.log(`Tenho: ${idade} anos`)

