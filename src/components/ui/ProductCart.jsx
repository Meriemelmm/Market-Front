import { Link } from 'react-router-dom';

const ProductCart = ({ product }) => {



            
    return (
        <div key={product._id} className="product-card">
            <img 
                src={product.images[0]} 
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
