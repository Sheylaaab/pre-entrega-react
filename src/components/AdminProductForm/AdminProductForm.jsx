import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useAuthContext } from '../../context/AuthContext';

const AdminProductForm = () => {
  const { logout } = useAuthContext();
  const [nombre, setNombre] = useState('');
  const [autor, setAutor] = useState('');
  const [precio, setPrecio] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');
  const [stock, setStock] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'productos'), {
        nombre,
        autor,
        precio: Number(precio),
        categoria,
        imagen,
        stock: Number(stock),
        descripcion
      });
      setMensaje('¡Producto cargado con éxito!');
      setNombre('');
      setAutor('');
      setPrecio('');
      setCategoria('');
      setImagen('');
      setStock('');
      setDescripcion('');
    } catch (err) {
      setMensaje('Error al cargar el producto.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Panel Admin - Cargar Producto</h2>
        <button onClick={logout} style={{ padding: '0.4rem 0.8rem', background: '#7f8c8d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Cerrar Sesión
        </button>
      </div>

      {mensaje && <p style={{ color: 'green', fontWeight: 'bold' }}>{mensaje}</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        <input type="text" placeholder="Título del Libro" value={nombre} onChange={(e) => setNombre(e.target.value)} required style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="text" placeholder="Autor" value={autor} onChange={(e) => setAutor(e.target.value)} required style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="text" placeholder="Categoría (ej: Novela, Ensayo)" value={categoria} onChange={(e) => setCategoria(e.target.value)} required style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="text" placeholder="URL Imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} required style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} required style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} rows={4} style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <button type="submit" style={{ padding: '0.8rem', background: '#27ae60', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Guardar Producto en Firestore
        </button>
      </form>
    </div>
  );
};

export default AdminProductForm;