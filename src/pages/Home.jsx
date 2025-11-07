import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productService } from '../services/productService';

const Home = () => {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const response = await productService.getAll();
    //             console.log("API response:", response.data);
    //             setProducts(response.data?.slice(0, 6) || []);
    //         } catch (err) {
    //             setError('Erreur lors du chargement des produits');
    //             console.error('Error:', err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchProducts();
    // }, []);

    // if (loading) return <div className="loading">Chargement...</div>;
    // if (error) return <div className="error">{error}</div>;

    // return (
    //     <div className="home">
    //         <section className="hero">
    //             <h1>Bienvenue sur MINIMALL</h1>
    //             <p>Découvrez nos produits sélectionnés</p>
    //         </section>
            
    //         <section className="featured-products">
    //             <h2>Produits en vedette</h2>
    //             {products.length > 0 ? (
    //                 <div className="products-grid">
    //                     {products.map(product => (
    //                         <div key={product._id || product.id} className="product-card">
    //                             <img 
    //                                 src={product.image || 'https://via.placeholder.com/300x200'} 
    //                                 alt={product.name} 
    //                             />
    //                             <h3>{product.name}</h3>
    //                             <p className="price">{product.price}€</p>
    //                             <Link to={`/products/${product._id || product.id}`} className="btn">
    //                                 Voir détails
    //                             </Link>
    //                         </div>
    //                     ))}
    //                 </div>
    //             ) : (
    //                 <p>Aucun produit disponible</p>
    //             )}
    //             <Link to="/products" className="btn-secondary">
    //                 Voir tous les produits
    //             </Link>
    //         </section>
    //     </div>
    // );
};

export default Home;