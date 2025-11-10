import { Link } from 'react-router-dom';
import placeholder from '/src/assets/images/image.png';



const ProductCart = ({ product }) => {



            
    return (
        <div key={product._id} className="product-card">
           <img 
  src={
    product.images && product.images.length > 0
      ? `${import.meta.env.VITE_API_UR}${product.images[0]}`  // <-- backticks ajoutés
      : '/src/assets/images/image.png'
  }
  alt={product.title} 
/>

            <h3>{product.title}</h3>
            <p className="description">{product.description}</p>
            <p className="price">{product.price}€</p>
            <Link to={`/products/${product._id}`} className="btn">
                Voir détails
            </Link>
        </div>
    );
};

export default ProductCart;
