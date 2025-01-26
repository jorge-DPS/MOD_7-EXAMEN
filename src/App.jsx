import React, { useRef } from 'react';
import Navigator from "./Components/Navigation/Navigator.jsx";
import Router from "./Components/Navigation/Router.jsx";
import './App.css';


function App() {
  const formRef = useRef();

  const handleLogout = () => {
    if (formRef.current) {
      formRef.current.resetForm(); // Llama al método resetForm del formulario
    }
  };

  return (
    <>
      <Navigator resetForm={handleLogout} />
      <Router formRef={formRef} />
    </>
  );
}

export default App;
