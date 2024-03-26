/* eslint-disable react/prop-types */

import "./Vecinos.css"

function Vecinos( {userName, name}) {
    return (
        <article className="im-vecinoCard-header">
            <img 
                className="im-vecinoCard-image"
                src={`https://unavatar.io/${userName}`}
            />
            <h3 className="im-vecinoCard-name">{name}</h3>
            <p className="im-vecinoCard-epitaph">Epitafios de {name}</p>

            <button className="im-vecinoCard-button">Ver Persona</button>
        </article>
    );
}

export default Vecinos;