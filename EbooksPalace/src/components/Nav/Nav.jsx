import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../Images/logo.png';
import carrito from '../Images/carrito.png';
import SearchBar from '../SearchBar/SearchBar';


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
            </div>

            <div className="navbar-left">
                <Link to="/home">
                    <button>home</button>
                </Link>
            </div>
            <SearchBar />
            <div >
                <Link to="/form">
                    <button>Crear Libro</button>
                </Link>
            </div>
            <div className="navbar-right">
                <img src={carrito} alt="Carrito de Compras" className="shopping-cart" />
            </div>
        </nav>
    );
};

export default NavBar;
