const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const calcular = require('./lib/calcular')

app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')



app.get('/', (req, res)=>{
    res.render('index',{

    })
})

app.get('/calcular',(req,res)=>{
    n1 = Number(req.body.numero1)
    n2 = Number(req.body.numero2)
    soma = n1 + n2
    res.render('resultado',{
        soma: soma
    })
})





app.listen(3000, (erro)=>{
    if(erro){
        console.log('Servidor Inativo')
    } else {
        console.log('Servidor Online')
    }
})