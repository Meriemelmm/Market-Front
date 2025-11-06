import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productService } from '../services/productService';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await productService.getById(id);
                setProduct(response.data);
            } catch (err) {
                setError('Produit non trouvé');
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    if (loading) return <div className="loading">Chargement...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!product) return <div className="error">Produit non trouvé</div>;

    return (
        <div className="product-details">
            <Link to="/products" className="back-link">← Retour aux produits</Link>
            
            <div className="product-info">
                <div className="product-image">
                    <img 
                        src={product.image || 'https://via.placeholder.com/400x300'} 
                        alt={product.name} 
                    />
                </div>
                
                <div className="product-content">
                    <h1>{product.name}</h1>
                    <p className="description">{product.description}</p>
                    <p className="price">{product.price}€</p>
                    
                    {product.category && (
                        <p className="category">Catégorie: {product.category}</p>
                    )}
                    
                    {product.stock !== undefined && (
                        <p className="stock">
                            {product.stock > 0 ? `En stock (${product.stock})` : 'Rupture de stock'}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;