import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ producto }) => {
  const { id, titulo, nombre, autor, origen, precio, categoria, imagen } = producto;
  
  const tituloMostrar = nombre || titulo;

  return (
    <div className="item-card">
      {origen && <div className="item-badge">{origen}</div>}
      <div className="item-image-container">
        <img src={imagen} alt={tituloMostrar} className="item-image" />
      </div>
      <div className="item-details">
        {categoria && <span className="item-category">{categoria}</span>}
        <h3 className="item-title">{tituloMostrar}</h3>
        {autor && <p className="item-author">{autor}</p>}
        <div className="item-footer">
          <span className="item-price">
            ${precio ? precio.toLocaleString('es-AR') : 0}
          </span>
          <Link to={`/producto/${id}`} className="item-button">
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;