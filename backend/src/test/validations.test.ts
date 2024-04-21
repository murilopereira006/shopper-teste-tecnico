import { expect, test } from "bun:test";
import fs from 'fs';
const path = require('path');
import { readCSV, readXLSX } from "../controller/validations";
import mock from "./mocks/shopper_products";
import Product from "../core/products";

test('Recebe arquivo .csv e retorna um Array de produtos em formato JSON', async () => {
  const dirPath = path.join(__dirname, '/mocks/csvdemo.csv');
  const products = await readCSV(dirPath) ;
    expect(products).toMatchObject(mock)
});

// test('Recebe arquivo .xlsx e retorna um Array de produtos em formato JSON', () => {
//   const xlsxFile = fs.readFileSync('./mock/shopper_products.xlsx')
//   const products = readXLSX(xlsxFile)
//   expect(products).toBe(mock)
// });
