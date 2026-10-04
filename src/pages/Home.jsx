import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section style={{
      padding: '5rem 1.5rem',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      <span style={{
        color: '#8b0000',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        fontSize: '0.85rem',
        fontWeight: '600'
      }}>
        Librería Especializada
      </span>
      <h1 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: '2.8rem',
        color: '#1a1a1a',
        margin: '1rem 0',
        fontWeight: '700'
      }}>
        Literatura de Corea, Japón y China
      </h1>
      <p style={{
        fontSize: '1.1rem',
        color: '#4a4a4a',
        marginBottom: '2.5rem',
        fontStyle: 'italic',
        lineHeight: '1.8'
      }}>
        Una selección curada de narrativa, clásicos y ficción oriental que exploran la profundidad de la condición humana.
      </p>
      <Link to="/productos" style={{
        backgroundColor: '#8b0000',
        color: '#fcfbf7',
        padding: '12px 28px',
        fontFamily: "'Cinzel', serif",
        letterSpacing: '1px',
        fontSize: '0.9rem',
        borderRadius: '2px',
        display: 'inline-block'
      }}>
        Explorar Catálogo
      </Link>
    </section>
  );
};

export default Home;