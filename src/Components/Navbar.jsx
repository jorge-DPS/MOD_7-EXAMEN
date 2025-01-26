import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // Obtener datos del store
  const { USERNAME, EMAIL } = useSelector((state) => state.form);
  console.log(USERNAME, EMAIL);
  

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#FFF',
      }}
    >
      <h2>App</h2>
      <div>
        {/* Mostrar USERNAME y EMAIL */}
        {USERNAME && EMAIL ? (
          <p style={{ margin: 0 }}>
            Bienvenido, <strong>{USERNAME}</strong> ({EMAIL})
          </p>
        ) : (
          <p style={{ margin: 0 }}>Inicia sesión</p>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
