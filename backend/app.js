const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');


const productsRouter = require('./routers/products')

require('dotenv/config');
const api = process.env.API_URL;

// middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));



//Routes
app.use(`${api}/products`, productsRouter)

//connecting mongoDb: make sure your Ip is added in mongoDb server 
mongoose.connect(process.env.CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'eshop-database'
    }
)
    .then(() => {
        console.log('Database is connectd')
    })
    .catch(err => {
        console.log(err)
    })

app.listen(3000, () => {
    console.log('listening at port 3000')
})