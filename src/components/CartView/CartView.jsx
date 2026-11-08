import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './CartView.css';

const CartView = () => {
  const { cart, removeItem, clear, totalPrecio } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="cart-empty-container">
        <h2>Tu carrito está vacío 📖</h2>
        <p>¿No sabés qué leer? Explora nuestro catálogo de literatura oriental.</p>
        <Link to="/" className="cart-btn-primary">Ver Catálogo</Link>
      </div>
    );
  }

  return (
    <div className="cart-view-container">
      <h1>Tu Carrito de Compras</h1>
      
      <div className="cart-items-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-item-card">
            <img src={item.imagen} alt={item.nombre} className="cart-item-img" />
            <div className="cart-item-details">
              <h3>{item.nombre}</h3>
              <p>Precio unitario: ${item.precio.toLocaleString('es-AR')}</p>
              <p>Cantidad: {item.cantidad}</p>
              <p><strong>Subtotal: ${(item.precio * item.cantidad).toLocaleString('es-AR')}</strong></p>
            </div>
            <button className="cart-remove-btn" onClick={() => removeItem(item.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total de la compra: ${totalPrecio().toLocaleString('es-AR')}</h2>
        <div className="cart-actions">
          <button className="cart-clear-btn" onClick={clear}>Vaciar Carrito</button>
          <button className="cart-checkout-btn">Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
};

export default CartView;