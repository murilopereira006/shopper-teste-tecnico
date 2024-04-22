const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


// Obter todos os packs
router.get('/', async (req, res) => {
  try {
    const allPacks = await prisma.packs.findMany();
    res.json(allPacks);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Erro ao obter todos os packs. ${error}`);
  }
});

// Obter um pack pelo ID
router.get('/:id', async (req, res) => {
  const packId = parseInt(req.params.id);
  try {
    const pack = await prisma.packs.findUnique({
      where: {
        id: packId
      }
    });
    if (!pack) {
      return res.status(404).send('Pack não encontrado.');
    }
    res.json(pack);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Erro ao obter o  ${error}`);
  }
});

// Criar um novo pack
router.post('/', async (req, res) => {
  const { product_id, qty } = req.body;
  try {
    // Verifica se o produto existe antes de criar o pack
    const existingProduct = await prisma.products.findUnique({
      where: {
        id: product_id
      }
    });

    if (!existingProduct) {
      return res.status(404).send('Produto não existente.');
    }

    // Se o produto existe, cria o novo pack
    const newPack = await prisma.packs.create({
      data: {
        product_id,
        qty
      }
    });

    res.json(newPack);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar um novo pack.');
  }
});

// Atualizar um pack
router.put('/:id', async (req, res) => {
  const packId = parseInt(req.params.id);
  const { qty } = req.body;
  try {
    const updatedPack = await prisma.packs.update({
      where: {
        id: packId
      },
      data: {
        qty
      }
    });
    res.json(updatedPack);
  } catch (error) {
    console.error(error);
    res.status(500).send(`Erro ao atualizar o  ${error}`);
  }
});

// Deletar um pack
router.delete('/:id', async (req, res) => {
  const packId = parseInt(req.params.id);
  try {
    await prisma.packs.delete({
      where: {
        id: packId
      }
    });
    res.send('Pack excluído com sucesso.');
  } catch (error) {
    console.error(error);
    res.status(500).send(`Erro ao excluir o  ${error}`);
  }
});

module.exports = router;
