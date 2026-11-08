import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { obtenerProductos } from '../../firebase/productosService';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    obtenerProductos()
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar los productos de Firebase:", error);
        setCargando(false);
      });
  }, []);

  return (
    <section className="item-list-container">
      <h2 className="catalog-greeting">{greeting}</h2>

      {cargando ? (
        <div className="loading-spinner">Cargando literatura asiática...</div>
      ) : (
        <ItemList productos={productos} />
      )}
    </section>
  );
};

export default ItemListContainer;