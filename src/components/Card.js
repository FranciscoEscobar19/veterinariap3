import React, { useState } from 'react';


const Cards = ({items}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='col-lg-3 tamaño '>
        <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={expandCard}>
      <div className="card-image">
        <img src={items.imgProducto} alt="Imagen de la tarjeta" />
      </div>
      <div className="card-header TituloProducto">
        <h5>{items.nombreProducto}</h5>
        <h6>{items.marcaProducto}</h6>
        <h6>{items.precioProducto}</h6>
      </div>
      {isExpanded && (
        <div className="card-content">
          <p>{items.descripcionProducto}</p>
        </div>
      )}
    </div>
    </div>
    
  );
};
export default Cards;
