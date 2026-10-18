const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    expect(searchProducts(products, 'Наушники')).toEqual([products.find((product) => {
      return product.id === 1;
    })]);
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    expect(searchProducts(products, 'Чистый код')).toEqual([products.find((product) => {
      return product.id === 6;
    })]);
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    expect(searchProducts(products, 'Настольная лампа')).toEqual([products.find((product) => {
      return product.id === 4;
    })]);
  });
  test("'javascript' возвращает товар с ID 3", () => {
    expect(searchProducts(products, 'javascript')).toEqual([products.find((product) => {
      return product.id === 3;
    })]);
  });
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    expect(searchProducts(products, 'ЧЕХОЛ')).toEqual([products.find((product) => {
      return product.id === 5;
    })]);
  });
  test("'наушники' возвращает товар с ID 1", () => {
    expect(searchProducts(products, 'наушники')).toEqual([products.find((product) => {
      return product.id === 1;
    })]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, '').map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, '   ').map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("'\t\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, '\t\n').map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
