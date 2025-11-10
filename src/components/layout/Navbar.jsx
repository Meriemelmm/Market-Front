
import '../../assets/styles/navbar.css';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import authService from '../../services/authService';

const Navbar = () => {
     console.log("test");
     console.log("test",localStorage.getItem("user"));
        console.log("test",localStorage.getItem("token"));
    const { user,token, logout } = useAuth();
      
  const navigate = useNavigate(); 
    
    const NavElement = [
        { name: 'Home', link: '/' },
        { name: 'Products', link: '/products' },
    ];
     const handleLogout = async () => {
    try {
      
        await logout();
        
        // localStorage.removeItem("token");
          


        // localStorage.removeItem("user");
        ;
      
      
        navigate('/login');
        
      
        window.location.reload();
    } catch (err) {
        console.error("Logout error:", err);
    }
};
    
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
                        <span> {user.fullname}</span>
                        <button onClick={handleLogout}>Déconnexion</button>
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