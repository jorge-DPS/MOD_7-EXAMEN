import React from 'react';

const LandingPage = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '900px',
        margin: '0 auto',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      {/* Título */}
      <div
        style={{
          backgroundColor: '#4CAF50',
          color: '#fff',
          padding: '15px',
          borderRadius: '10px 10px 0 0',
          textAlign: 'center',
          fontSize: '1.5rem',
        }}
      >
        Módulo 7: DESARROLLO FRONTEND CON REACTJS
      </div>

      {/* Bienvenida */}
      <section style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <h2 style={{ color: '#333', marginBottom: '10px' }}>Bienvenido</h2>
        <p style={{ color: '#555', lineHeight: '1.6' }}>
          Este módulo se centra en el uso de <strong>React</strong>, incluyendo la creación de <strong>componentes</strong>,
          el manejo de <strong>hooks</strong>, y el uso de <strong>Redux</strong>.
        </p>
      </section>

      {/* Temas Cubiertos */}
      <section style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <h2 style={{ color: '#333', marginBottom: '10px' }}>Temas Cubiertos</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr', // Tres columnas
            gap: '10px',
            color: '#555',
            lineHeight: '1.6',
          }}
        >
          <div>• Componentes funcionales y de clase</div>
          <div>• Uso de React hooks como useState y useEffect</div>
          <div>• Creación de custom hooks como useForm</div>
          <div>• Gestión de variables de estado con useState</div>
          <div>• Gestión de estado global con Redux</div>
          <div>• Integración de Redux con React</div>
          <div>• Manejo de Formularios en React</div>
          <div>• Publicando nuestra Página con GitHub Pages</div>
        </div>
      </section>

      {/* Recursos Adicionales */}
      <section style={{ padding: '20px' }}>
        <h2 style={{ color: '#333', marginBottom: '10px' }}>Recursos Adicionales</h2>
        <p style={{ color: '#555', lineHeight: '1.6' }}>
          Para profundizar en los temas cubiertos, consulta los siguientes recursos:
        </p>
        <p style={{ textAlign: 'center', marginTop: '20px', fontStyle: 'italic', color: '#777' }}>
          © 2024 Módulo 7. USIP.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
