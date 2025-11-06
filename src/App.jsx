import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar.jsx';
import RouteList from './routes/AppRoute.jsx';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <RouteList />
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
