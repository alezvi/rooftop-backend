const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const products = require('./products')

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.json()
})

// http://localhost:3000/products?page=1&price_min=100&price_max=1000
// Collection
app.get('/products', function (req, res) {
    let results = [...products]

    if (Object.keys(req.query).length > 0) {
        // si tiene parametros busco los resultados
        if (req.query.price_min) {
            results = results.filter(function (product) {
                return Number(product.price.replace('$', '')) >= req.query.price_min
            })
        }
        
        if (req.query.price_max) {
            results = results.filter(function (product) {
                return Number(product.price.replace('$', '')) <= req.query.price_max
            })
        }
    } else {
        results = products.slice(0, 10)
    }

    if (req.query.hasOwnProperty('page')) {
        // si tiene paginado, pagino los resultados
        if (req.query.page) {
            if (req.query.page > 0) {
                start = req.query.page * 10
                end = start+10
                results = results.slice(start, end)
            }
        }
    }

    res.json(results)
})

// http://localhost:3000/products/123
// Recurso
app.get('/products/:id', function (req, res) {
    let product = products.find(function (product) {
        return product.id == req.params.id
    })

    if (product) {
        return res.json(product)
    }

    res.status(404).send({message : "This product doest not exist"})
})

app.post('/products', function (req, res) {
    let newProduct = {
        id : Date.now(),
        description : '',
        is_visible : false,
        ...req.body
    }

    // obtener el contenido (string)
    let content = fs.readFileSync('./products.json', {encoding: 'utf8'})

    // interpretar el contenido como array/json
    let array = JSON.parse(content)

    // agregar al array 
    array.push(newProduct)

    // volver a convertir a string
    content = JSON.stringify(array)

    // guardar el contenido en el archivo
    fs.writeFileSync('./products.json', content)

    // if (true) {
    //     return res.status(403).json({message: "Cannot post"})
    // }

    res.status(201).json({message: "Created", "id" : newProduct.id})
})

app.patch('/products/:id', function (req, res) {
    if (req.params.id == 45) {
        return res.status(404).json({message: "Not found"})
    }

    res.json()
})

app.delete('/products/:id', function (req, res) {
    res.json()
})

app.listen(3000)
