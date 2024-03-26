import { useState } from 'react';
import "./SearchBar.css";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Aquí puedes manejar la búsqueda, por ejemplo, llamando a una API o filtrando localmente tus datos
        console.log('Buscar: ', searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px', backgroundColor: 'lightgray' }}>
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleChange}
                style={{ padding: '10px', fontSize: '16px' }}
            />
            <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>Buscar</button>
        </form>
    );
}

export default SearchBar;