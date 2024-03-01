
import React from 'react'
import "./Card.css";//importamos el css para poder aplicar estilos
import { Link } from 'react-router-dom';

function Card({ title = "titulo por defecto", description = "descripcion por defecto" }) {
  return (
    <div className="Card">
      <h2>
        <Link to={title}>{title}</Link>
      </h2>
      <p>{description}</p>
    </div>
  );
}

/*function Card(propiedades) {
  return (
    <div className='Card'>
        <h2>{propiedades.title}</h2>
        <p>{propiedades.description}</p>
    </div>
  )
}*/

export default Card