/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';

function Perfil() {
  let { userName } = useParams();

  // Aquí puedes hacer una solicitud a tu API para obtener los dats del perfil basado en el userName

  return (
    <div>
      <h2>Perfil de {userName}</h2>
      {/* Aquí puedes mostrar la información del perfil del usuario */}
    </div>
  );
}

export default Perfil;