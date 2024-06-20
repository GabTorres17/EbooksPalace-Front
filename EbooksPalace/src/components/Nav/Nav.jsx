import React from 'react';
import { Link } from 'react-router-dom';
import { LoginButton } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { LogoutButton } from '../Logout/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import logo from '../Images/logo.png';
import carrito from '../Images/carrito.png';
import './NavBar.css';


const NavBar = () => {

  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-left">
        <Link to="/home">
          <button>Home</button>
        </Link>
      </div>
      <div>
        <Link to="/form">
          <button>Crear Libro</button>
        </Link>
      </div>
      <div>
        {isAuthenticated ? <>
          <Profile />
          <LogoutButton />
        </> : <LoginButton />}
      </div>
      <div className="navbar-right">
        <Link to="/cartbuy"><img src={carrito} alt="Carrito de Compras" className="shopping-cart" /></Link>
      </div>
    </nav>
  );
};

export default NavBar;
