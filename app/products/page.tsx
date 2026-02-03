interface Product {
  id: number;
  title: string;
  price: number;
}

const Products = async () => {
  // 10 seconds - imagine...
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  const products: Product[] = data.products;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} - {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
