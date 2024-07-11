import React, { useState, useEffect, useRef } from 'react';
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleCartClick = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      navigate('/cartitem');
    }
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
      <div className="navbar-left">
        {isAuthenticated && (
          <div className="dropdown" ref={dropdownRef}>
            <button className="dropdown-toggle" onClick={handleDropdownToggle}>
              Cuenta
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/admin">Administrador</Link>
                <Link to="/downloads">Mis Libros</Link>
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
      <div className="navbar-right">
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
