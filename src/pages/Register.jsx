import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
 console.log(" information",formData);
    try {
 console.log("test",formData);
        await register({
            fullname: formData.name,
            email: formData.email,
            password: formData.password
        });
        navigate('/login');
    } catch (err) {
        setError(err.response?.data?.message || 'Erreur lors de l\'inscription');
    } finally {
        setLoading(false);
    }
};


    return (
        <div className="auth-page">
            <div className="auth-form">
                <h1>Sign Up</h1>
                <p className="subtitle">Create your account to get started</p>
                
                {error && <div className="error">{error}</div>}
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nom:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
               
                    
                    <button type="submit" disabled={loading} className="btn">
                        {loading ? 'Inscription...' : 'S\'inscrire'}
                    </button>
                </form>
                
                <p>
                    Déjà un compte? <Link to="/login">Se connecter</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;