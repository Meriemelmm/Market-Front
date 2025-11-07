import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productService } from '../services/productService';
import image from '../assets/images/image.png';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await productService.getById(id);
                console.log("Réponse brute de l'API :", response);
                console.log("response.data :", response.data);
                console.log("response.data.product :", response.data.product);


                //  Correction ici :
                const productData = response.data.data.product;
                console.log("anza rkhi ma ikhdmd", productData);

                setProduct(productData);

            } catch (err) {
                console.error('Erreur:', err);
                setError('Produit non trouvé');
            } finally {
                setLoading(false);
            }
        };
        console.log("products", product);
        if (id) fetchProduct();

    }, [id]);
    useEffect(() => {
        console.log("Product state mis à jour :", product);
    }, [product]);


    if (loading) return <div>Chargement...</div>;
    if (error) return <div>{error}</div>;
    if (!product) return <div>Produit non trouvé</div>;

    return (
        <div className="product-details">
            <Link to="/products" className="back-link">← Retour aux produits</Link>

            <div className="product-info">
                <div className="product-image">
                    <img
  src={product.images?.[0] ? `${import.meta.env.VITE_API_URL}${product.images[0]}` : image}
  alt={product.title}
  onError={(e) => {
    e.target.src = image; 
  }}
/>


                </div>

                <div className="product-content">
                    <h1>{product.title}</h1>
                    <p className="description">{product.description}</p>

                    <p className="price">{product.price}€</p>
                    <p className="stock">
                        {product.stock > 0 ? `En stock (${product.stock})` : 'Rupture de stock'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
