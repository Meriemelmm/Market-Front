import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productService } from '../services/productService';
import ProductCart from  '../components/ui/ProductCart';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

 useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await productService.getAll();
            console.log('test pr:Products:', response.data);
            setProducts(response.data.data); // <-- le tableau réel
        } catch (err) {
            setError('Erreur lors du chargement des produits');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    fetchProducts();
}, []);



    if (loading) return <div className="loading">Chargement...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="products-page">
            <h1>Tous nos produits</h1>
            {products.length > 0 ? (
                <div className="products-grid">
                    {products.map(product => (
                      
                        <ProductCart   key={product._id} product={product} />
                    ))}
                </div>
            ) : (
                <p>Aucun produit disponible</p>
            )}
        </div>
    );
};

export default Products;
