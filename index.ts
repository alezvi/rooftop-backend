import express from "express"
import "reflect-metadata";
import {createConnection} from "typeorm"
import Product from './src/entity/Product'

const app = express()
const connection = await createConnection()

app.get('/', function (req, res) {
    res.send('/')
})

// http://localhost:4000/products?price=123
// {price : 123}
app.get('/products', async function (req, res) {
    let repository = await connection.getRepository(Product)

    repository.find(req.query).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.send({message: 'error'})
    })
})

// http://localhost:4000/products/123
app.get('/products/:id', function (req, res) {
    let repository = await connection.getRepository(Product)

    repository.findOne(req.params.id).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.send({message: 'error'})
    })
})

app.post('/products', function (req, res) {
    let product = new Product

    product.title = 'Nuevo producto desde typeorm'
    product.stock = 3
    product.price = 123.99
    product.description = "Lorem ipsum..."
    product.isVisible = true
    product.brandId = 1

    product.save().then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.send({message: 'error'})
    })
})

app.patch('/products/:id', function (req, res) {
    let repository = await connection.getRepository(Product)
    let product = await repository.findOne(req.params.id)
    product.price = req.body.price

    product.save().then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
        res.send({message: 'error'})
    })
})

app.delete('/products/:id', function (req, res) {
    let repository = await connection.getRepository(Product)
    let product = repository.findOne(req.params.id)

    repository.remove().then(() => {
        res.send({message: 'deleted'})
    }).catch(err => {
        console.log(err)
        res.send({message: 'error'})
    })
})



app.listen(3300)
