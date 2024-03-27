import { useState } from 'react';
import "./SearchBar.css";

function SearchBar() {
    const [run, setRun] = useState('');
    const [verifier, setVerifier] = useState('');
    const [error, setError] = useState(null);

    const handleChangeRun = event => {
        setRun(event.target.value);
    };

    const handleChangeVerifier = event => {
        setVerifier(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (validateRun(run, verifier)) {
            console.log('RUN válido: ', run);
            setError(null);
        } else {
            setError('RUN inválido');
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
            <input
                className='verifier-input'
                type="text"
                placeholder="DV..."
                value={verifier}
                onChange={handleChangeVerifier}
            />
            <button type="submit" >Buscar Persona</button>
            {error && <p>{error}</p>}
        </form>
    );
}

export default SearchBar;