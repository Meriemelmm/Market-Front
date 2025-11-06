
import '../../assets/styles/navbar.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    
    const NavElement = [
        { name: 'Home', link: '/' },
        { name: 'Products', link: '/products' },
    ];
    
    return (
        <header>
            <div className='name-site'>
                <Link to="/">E-Market</Link>
            </div>
            <nav>
                {NavElement.map((Element, index) => (
                    <Link key={index} to={Element.link}>
                        {Element.name}
                    </Link>
                ))}
            </nav>
            <div className='auth-section'>
                {user ? (
                    <>
                        <span>Bonjour, {user.name}</span>
                        <button onClick={logout}>Déconnexion</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Sign Up</Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Navbar;