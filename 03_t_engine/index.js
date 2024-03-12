const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
});

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static("public"));

app.get('/', function(req, res) {
    const user = {
        name: 'Rodolfo',
        surname: 'Gonçalves'
    }
    
    const approved = true; 

    res.render('home', {user: user, auth: true, approved} )
})

app.get("/dashboard", function(req, res) {
    
    const items = ["Item a", "Item b", "Item c"];
    
    res.render("dashboard", {items: items});
});

app.get("/post", function(req, res){
    const post = {
        title: "Aprender Node.js",
        category: "Node.js",
        body: "Node.js é muito utilizado na programação atual.",
        comments: 4,
    };
    res.render("blogpost", {post});
});

app.get("/blog", function (req, res){
    const posts = [
        {
            title: "Aprender Node.js",
            category: "Node.js",
            body: "Node.js é muito utilizado na programação atual.",
            comments: 4,
        },
        {
            title: "PHP ainda vale a pena?",
            category: "PHP",
            body: "",
            comments: 12,
        },
        {
            title: "Os segredos de JS",
            category: "Javascript",
            body: "",
            comments: 5,
        },
    ];
    res.render("blog", {posts});
});

app.listen(3000)