const express = require('express')
const app = express()
const port = 3300
const produtos = []

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//Arquivos estáticos -> CSS, IMG, VIDEOS,JS
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(`${basePath}/home.html`)
})

app.get('/cadastrarProdutos.html', (req,res)=>{
    res.sendFile(`${basePath}/cadastrarProdutos.html`)
})

app.get('', (req,res)=>{
    res.sendFile(`${basePath}/`)
})

app.post('/user/save', (req, res)=>{
    const {name, preco, descricao} = req.body
    produtos.push({nome:name, preço:preco, descrição:descricao})
    console.log(produtos)
    res.sendFile(`${basePath}/cadastrarProdutos.html`)
})

app.listen(port, ()=>{
    console.log('Servidor on 🚀')
})