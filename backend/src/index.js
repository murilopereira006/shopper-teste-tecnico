const express = require('express');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();
const app = express();
const PORT_BACKEND = process.env.PORT_BACKEND || 5000;

app.use(express.json());

app.get('/products', async (req, res) => {
  try {
    const products = await prisma.products.findMany({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Erro ao consultar produtos. ${error}`);
  }
});

app.get('/products/:id', async (req, res) => {
  const productId = parseInt(req.params.id);
  try {
    const product = await prisma.products.findUnique({
      where: {
        id: productId
      }
    });
    if (!product) {
      return res.status(404).send('Produto não encontrado.');
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Erro ao consultar produto. ${error}`);
  }
});

app.get('/products/by-code', async (req, res) => {
  const productCode = parseInt(req.query.code);
  try {
    const product = await prisma.products.findFirst({
      where: {
        code: productCode
      },
      include: {
        packs: true
      }
    });
    if (!product) {
      return res.status(404).send('Produto não encontrado.');
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao consultar produto.');
  }
});

app.post('/products', async (req, res) => {
  const { code, name, cost_price, sales_price, packs } = req.body;
  try {
    // Verificar se o código do produto já existe no banco de dados
    const existingProduct = await prisma.products.findUnique({
      where: {
        code: code
      }
    });

    if (existingProduct) {
      // Se o código do produto já existir, retorne um erro
      return res.status(400).send('Código de produto já está em uso.');
    }

    // Se o código do produto não existir, criar um novo registro
    const product = await prisma.products.create({
      data: {
        code,
        name,
        cost_price,
        sales_price,
        packs: {
          create: packs
        }
      },
      include: {
        packs: true
      }
    });
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Erro ao cadastrar produto. ${error}`);
  }
});

app.listen(PORT_BACKEND, () => {
  console.log(`Example app is listening on port ${PORT_BACKEND}.`);
});
