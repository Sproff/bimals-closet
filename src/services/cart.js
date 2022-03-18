import {setItem} from './storage';

export const updateCart = (selectedProducts, product, itemCount) => {
  const products = [...selectedProducts];

  const productIndex = products.findIndex(
    (productObject) => productObject.slug === product.slug
  );

  if (productIndex === -1) {
    products.push({slug: product.slug, product, itemCount});
  } else if (itemCount === 0) {
    products.splice(productIndex, 1);
  } else {
    let count = products[productIndex].itemCount;
    count = count + itemCount;
    if (!count) {
      products.splice(productIndex, 1);
    } else {
      products[productIndex] = {
        ...products[productIndex],
        itemCount: count,
      };
    }
   
  }

  setItem('cartStorage', products);

  return products;
};

export const totalProductsPrice = (products) => {
  let totalPrice = 0;

  for (const {product, itemCount} of products) {
    totalPrice = totalPrice + product.price * itemCount;
  }
  return totalPrice.toFixed(2);
};