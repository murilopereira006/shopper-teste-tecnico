const { readCSV, readXLSX } = require("../controller/validations");
const fs = require('fs');
const path = require('path')
const mock = require("./mocks/shopper_products");

test('Recebe arquivo .csv e retorna um Array de produtos em formato JSON', async () => {
  const csvFilePath = path.join(__dirname, './mocks/csvdemo.csv');
  const csvData = fs.readFileSync(csvFilePath, 'utf8');
  const products = await readCSV(csvData);
  expect(products).toEqual(mock);
});

// test('Recebe arquivo .xlsx e retorna um Array de produtos em formato JSON', () => {
//   const xlsxFile = fs.readFileSync('./mock/shopper_products.xlsx')
//   const products = readXLSX(xlsxFile) 
//   expect(products).toBe(mock)
// });

