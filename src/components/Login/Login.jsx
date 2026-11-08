import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('admin@admin.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const { login, register } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setInfo('');
    try {
      await login(email, password);
      navigate('/admin');
    } catch (err) {
      console.error("Error Firebase Login:", err.code, err.message);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        setError('El usuario no existe o las credenciales no son válidas. Intentá crearlo presionando el botón de abajo.');
      } else if (err.code === 'auth/operation-not-allowed') {
        setError('Debes habilitar "Correo electrónico/Contraseña" en la pestaña Authentication de tu consola Firebase.');
      } else {
        setError(`Error (${err.code}): ${err.message}`);
      }
    }
  };

  const handleRegisterAdmin = async () => {
    setError('');
    setInfo('');
    try {
      await register(email, password);
      setInfo('¡Usuario admin creado con éxito! Ya podés ingresar.');
    } catch (err) {
      console.error("Error Firebase Register:", err.code, err.message);
      if (err.code === 'auth/email-already-in-use') {
        setError('El usuario ya existe. Si la contraseña no coincide, verifica en la consola de Firebase.');
      } else if (err.code === 'auth/operation-not-allowed') {
        setError('Tenés que activar "Email/Password" en Firebase Console > Authentication > Method.');
      } else {
        setError(`Error al registrar (${err.code}): ${err.message}`);
      }
    }
  };

  return (
    <div style={{ maxWidth: '420px', margin: '3rem auto', padding: '2rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <h2>Iniciar Sesión (Admin)</h2>
      
      {error && <p style={{ color: '#c0392b', fontSize: '0.9rem', background: '#fceae8', padding: '0.6rem', borderRadius: '4px' }}>{error}</p>}
      {info && <p style={{ color: '#27ae60', fontSize: '0.9rem', background: '#eafaf1', padding: '0.6rem', borderRadius: '4px' }}>{info}</p>}

      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={{ padding: '0.7rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{ padding: '0.7rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '0.8rem', background: '#c0392b', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Ingresar
        </button>
      </form>

      <hr style={{ margin: '1.5rem 0', border: 'none', borderTop: '1px solid #eee' }} />

      <button 
        type="button" 
        onClick={handleRegisterAdmin}
        style={{ width: '100%', padding: '0.6rem', background: '#2c3e50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Crear Usuario Admin en Firebase
      </button>
    </div>
  );
};

export default Login;