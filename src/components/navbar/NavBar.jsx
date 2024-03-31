/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logo from '/src/assets/logo.svg';
import './NavBar.css';


function SearchBar() {
    const [run, setRun] = useState('');
    const [verifier, setVerifier] = useState('');
    const [error, setError] = useState(null);

    const handleChangeRun = event => {
        let run = event.target.value;
        run = run.replace(/\D/g, ""); // Elimina cualquier carácter no numérico
        if (run.length > 1) {
            run = run.slice(0, -1) + '-' + run.slice(-1); // Agrega un guión antes del último carácter
        }
        setRun(run);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (validateRun(run, verifier)) {
            setError(null);
        } else {
            alert('RUN inválido');
        }
    };

    const validateRun = (run, verifier) => {
        //si falta alguno de los dos campos no se puede validar
        if (!run || !verifier) return false;
        let sum = 0;
        let multiples = [2, 3, 4, 5, 6, 7, 2, 3, 4, 5];
        run.split('').reverse().forEach((digit, index) => {
            sum += digit * multiples[index];
        });
        let expectedVerifier = 11 - (sum % 11);
        if (expectedVerifier === 10) expectedVerifier = 'K';
        if (expectedVerifier === 11) expectedVerifier = '0';
        return verifier.toUpperCase() === expectedVerifier.toString();
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px', backgroundColor: 'lightgray' }}>
            <input
                className='run-input'
                type="text"
                placeholder="Ingresar RUN..."
                value={run}
                onChange={handleChangeRun}
            />
            <button type="submit" >Buscar Persona</button>
            {error && <p>{error}</p>}
        </form>
    );
}

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <img className='navbar-logo' src={logo} alt="Logo" />
            <div className="navbar-brand">
                <a href="/">InMemoriam</a>
            </div>
            
            <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                <span>☰</span>
            </button>
            <div className={`navbar-menu ${isOpen ? 'show' : ''}`}>
                <SearchBar className="searchbar" />
                <a href="/search">Buscar</a>
                <a href="/about">Acerca de</a>
                <a href="/contact">Contacto</a>
                
            </div>
        </nav>
    );
}

export default Navbar;