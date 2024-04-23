const { PrismaClient } = require('@prisma/client');
const express = require("express");

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  try {
    const products = await prisma.products.findMany({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Erro ao consultar produtos. ${error}`);
  }
});

router.get('/:id', async (req, res) => {
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

router.get('/code/:id', async (req, res) => {
  console.log('REQ =>  ', req)
  const productCode = parseInt(req.params.id);
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

router.post('/', async (req, res) => {
  const { code, name, cost_price, sales_price, packs } = req.body;
  try {
    const existingProduct = await prisma.products.findUnique({
      where: {
        code: code
      }
    });

    if (existingProduct) {
      return res.status(400).send('Código de produto já está em uso.');
    }

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

module.exports = router;
