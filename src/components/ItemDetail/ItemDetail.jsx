import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ producto }) => {
  const [added, setAdded] = useState(false);
  const { addItem } = useCartContext();

  if (!producto) return null;

  const { id, nombre, titulo, autor, origen, precio, categoria, imagen, descripcion, stock } = producto;
  const tituloMostrar = nombre || titulo;

  const handleAdd = (cantidad) => {
    addItem({ id, nombre: tituloMostrar, precio, imagen }, cantidad);
    setAdded(true);
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail-card">
        <div className="item-detail-image-box">
          <img src={imagen} alt={tituloMostrar} className="item-detail-image" />
        </div>
        
        <div className="item-detail-info-box">
          {categoria && <span className="item-detail-category">{categoria}</span>}
          <h1 className="item-detail-title">{tituloMostrar}</h1>
          
          {autor && <p className="item-detail-meta"><strong>Autor:</strong> {autor}</p>}
          {origen && <p className="item-detail-meta"><strong>Origen:</strong> {origen}</p>}
          
          <p className="item-detail-description">
            {descripcion || "Sin descripción disponible por el momento."}
          </p>
          
          <div className="item-detail-price">
            ${precio ? precio.toLocaleString('es-AR') : 0}
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            {added ? (
              <Link to="/carrito" className="add-to-cart-btn" style={{ textDecoration: 'none', textAlign: 'center', display: 'block' }}>
                Ir al Carrito
              </Link>
            ) : (
              <ItemCount stock={stock || 10} initial={1} onAdd={handleAdd} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;