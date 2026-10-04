import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ producto }) => {
  const { id, titulo, autor, origen, precio, categoria, imagen } = producto;

  return (
    <div className="item-card">
      <div className="item-badge">{origen}</div>
      <div className="item-image-container">
        <img src={imagen} alt={titulo} className="item-image" />
      </div>
      <div className="item-details">
        <span className="item-category">{categoria}</span>
        <h3 className="item-title">{titulo}</h3>
        <p className="item-author">{autor}</p>
        <div className="item-footer">
          <span className="item-price">${precio.toLocaleString('es-AR')}</span>
          <Link to={`/producto/${id}`} className="item-button">
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;