import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../Images/logo.png';  
import carrito from '../Images/carrito.png';  
import SearchBar from '../SearchBar/SearchBar';


const NavBar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
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
                    <button>home</button> 
                </Link>
            </div>
            <SearchBar />
            <div className="dropdown">
                <button onClick={toggleDropdown} className="dropdown-toggle">
                    Perfil
                </button>
                {dropdownVisible && (
                    <div className="dropdown-menu">
                        <a href="/form">Form</a>
                        {/* Puedes agregar más opciones aquí */}
                    </div>
                )}
            </div>
            <div className="navbar-right">
                <img src={carrito} alt="Carrito de Compras" className="shopping-cart" />
            </div>
        </nav>
    );
};

export default NavBar;
