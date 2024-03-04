const express = require ("express")
const app = express()
const path = require ("path")
const port = 3000

const basePath = path.join(__dirname, 'templates')

var checkAuth = function(req, res, next){
    req.authStatus = true

    if(req.authStatus){
        console.log(`Está logado, pode continuar`)
        next()
    }else{
        console.log('Não está logado, faça o login para continuar')
    }
}

app.use(checkAuth)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`)
} )