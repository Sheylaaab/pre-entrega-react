import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setCargando(true);
    fetch('/data/productos.json')
      .then((res) => res.json())
      .then((datos) => {
        // Comparamos convirtiendo ambos a String para evitar fallas entre número y texto
        const productoEncontrado = datos.find((item) => String(item.id) === String(id));
        setProducto(productoEncontrado);
        setCargando(false);
      })
      .catch((err) => {
        console.error('Error al cargar el detalle:', err);
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return <div className="detail-loading">Cargando detalles del libro...</div>;
  }

  if (!producto) {
    return <div className="detail-error">El libro solicitado no existe.</div>;
  }

  return (
    <section className="item-detail-container-wrapper">
      <ItemDetail producto={producto} />
    </section>
  );
};

export default ItemDetailContainer;