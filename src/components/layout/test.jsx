// 📁 src/pages/user/Shop.jsx
import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Nos produits</h2>
      {products.map(p => (
        <div key={p.id}>
          <h4>{p.name}</h4>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}

