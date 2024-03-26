//importar navbar.css
import SearchBar from './searchbar/SearchBar';

import './NavBar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">InMemoriam</a>
            </div>
            <SearchBar />
            <div className="navbar-menu">
                <a href="/search">Buscar</a>
                <a href="/about">Acerca de</a>
                <a href="/contact">Contacto</a>
            </div>
        </nav>
    );
}

export default Navbar;