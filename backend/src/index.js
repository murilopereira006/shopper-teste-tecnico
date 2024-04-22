const express = require('express');
const products = require('./routes/products');
const packs = require('./routes/packs');
require('dotenv').config();

const app = express();
const PORT_BACKEND = process.env.PORT_BACKEND || 5000;

app.use(express.json());
app.use('/products', products);
app.use('/packs', packs)


app.listen(PORT_BACKEND, () => {
  console.log(`Example app is listening on port ${PORT_BACKEND}.`);
});
