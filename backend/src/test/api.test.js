const app = require('../../src');

test('Deve retornar todos os produtos', async () => {
  const response = await request(app).get('/products');
  expect(response.status).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
});

test('Deve retornar um produto pelo ID', async () => {
  const productId = 1; // Suponha que o ID do produto seja 1
  const response = await request(app).get(`/products/${productId}`);
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('id', productId);
});

test('Deve retornar um produto pelo código', async () => {
  const productCode = 123; // Suponha que o código do produto seja 123
  const response = await request(app).get(`/products/by-code?code=${productCode}`);
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('code', productCode);
});
