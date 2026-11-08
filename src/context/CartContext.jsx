import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito (si ya existe, acumula la cantidad)
  const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
      setCart(cart.map(prod => 
        prod.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod
      ));
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  // Eliminar un producto específico por su ID
  const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  // Vaciar todo el carrito
  const clear = () => {
    setCart([]);
  };

  // Verificar si el producto ya está en el carrito
  const isInCart = (id) => {
    return cart.some(prod => prod.id === id);
  };

  // Calcular la cantidad total de unidades para el badge del Navbar
  const totalCantidad = () => {
    return cart.reduce((acum, prod) => acum + prod.cantidad, 0);
  };

  // Calcular el precio total de la compra
  const totalPrecio = () => {
    return cart.reduce((acum, prod) => acum + (prod.cantidad * prod.precio), 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      clear,
      isInCart,
      totalCantidad,
      totalPrecio
    }}>
      {children}
    </CartContext.Provider>
  );
};