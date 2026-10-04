import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ producto }) => {
  const { titulo, autor, origen, precio, categoria, imagen, descripcion } = producto;

  return (
    <div className="item-detail-container">
      <div className="item-detail-card">
        <div className="item-detail-image">
          <img src={imagen} alt={titulo} />
        </div>
        <div className="item-detail-info">
          <span className="item-detail-origin">{origen}</span>
          <h2>{titulo}</h2>
          <h3>por {autor}</h3>
          <p className="item-detail-category">Categoría: {categoria}</p>
          <p className="item-detail-description">
            {descripcion || 'Una obra fundamental de la literatura oriental que explora la cultura, las emociones y la condición humana con una narrativa profunda y cautivadora.'}
          </p>
          <div className="item-detail-footer">
            <span className="item-detail-price">${precio?.toLocaleString('es-AR')}</span>
            <button className="item-detail-add-btn">Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;