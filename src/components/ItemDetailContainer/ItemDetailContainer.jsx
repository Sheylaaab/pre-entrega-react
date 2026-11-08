import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerProductoPorId } from '../../firebase/productosService';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const { id } = useParams(); // <-- Debe coincidir con el :id de tu App.jsx

  useEffect(() => {
    setCargando(true);
    if (id) {
      obtenerProductoPorId(id)
        .then((res) => {
          setProducto(res);
        })
        .catch((err) => {
          console.error("Error al obtener detalle:", err);
        })
        .finally(() => {
          setCargando(false);
        });
    }
  }, [id]);

  if (cargando) return <p style={{ textAlign: 'center', padding: '2rem' }}>Cargando detalle...</p>;
  if (!producto) return <p style={{ textAlign: 'center', padding: '2rem' }}>El libro solicitado no existe.</p>;

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;