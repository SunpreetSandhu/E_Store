//coffee: price_1MzDySJ6ar54FA8lWCDechX0
//sunglasses: price_1MzDzSJ6ar54FA8lOeY71Mzr
//camera: price_1MzE0FJ6ar54FA8lgapF8oub

const productsArray = [
  {
    id: "price_1MzDySJ6ar54FA8lWCDechX0",
    title: "Coffee",
    price: 4.99,
  },

  {
    id: "price_1MzDzSJ6ar54FA8lOeY71Mzr",
    title: "Sunglasses",
    price: 9.99,
  },

  {
    id: "price_1MzE0FJ6ar54FA8lgapF8oub",
    title: "Camera",
    price: 39.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product data DNE for ID " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
