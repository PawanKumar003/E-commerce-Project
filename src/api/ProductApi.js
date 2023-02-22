export const AllProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();
  return products;
};

export const SingleProducts = async (productId) => {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  const products = await res.json();
  return products;
};
