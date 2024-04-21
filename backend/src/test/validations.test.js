const { readCSV, readXLSX } = require("../controller/validations");
const mock = require("./mocks/shopper_products");

test('Recebe arquivo .csv e retorna um Array de produtos em formato JSON', async () => {
  const products = await readCSV();
  expect(products).toBe(mock)
});

// test('Recebe arquivo .xlsx e retorna um Array de produtos em formato JSON', () => {
//   const xlsxFile = fs.readFileSync('./mock/shopper_products.xlsx')
//   const products = readXLSX(xlsxFile)
//   expect(products).toBe(mock)
// });

