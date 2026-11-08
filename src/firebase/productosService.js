import { collection, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';
import { db } from './config';

// 1. Obtener todos los productos (para el catálogo / inicio)
export const obtenerProductos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'productos'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
  }
};

// 2. Obtener un producto por su ID (para el detalle)
export const obtenerProductoPorId = async (id) => {
  try {
    const docRef = doc(db, 'productos', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.warn("No se encontró el documento con ID:", id);
      return null;
    }
  } catch (error) {
    console.error("Error al obtener producto por ID:", error);
    return null;
  }
};

// 3. Agregar un producto nuevo
export const agregarProducto = async (nuevoProducto) => {
  try {
    const docRef = await addDoc(collection(db, 'productos'), nuevoProducto);
    return docRef.id;
  } catch (error) {
    console.error("Error al agregar producto:", error);
    return null;
  }
};