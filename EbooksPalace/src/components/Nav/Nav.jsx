import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginButton } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { LogoutButton } from '../Logout/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../Images/logo.png';
import carrito from '../Images/carrito.png';
import './NavBar.css';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCartClick = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      navigate('/cartitem');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-left">
        <Link to="/home">
          <button>Tienda</button>
        </Link>
      </div>
      <div className="navbar-right">
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleMenu}>
            {isAuthenticated ? <Profile /> : 'Iniciar Sesión'}
          </button>
          {menuOpen && (
            <div className="dropdown-content">
              <Link to='/downloads'>
                <button className="menu-item">Mis Libros</button>
              </Link>
              <LogoutButton />
              {isAuthenticated && (
                <Link to="/admin">
                  <button className="menu-item">Administrador</button>
                </Link>
              )}
            </div>
          )}
        </div>
        <br/>
        <img
          src={carrito}
          alt="Carrito de Compras"
          className="shopping-cart"
          onClick={handleCartClick}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </nav>
  );
};

export default NavBar;
