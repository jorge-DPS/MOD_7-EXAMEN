import React, { useState } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearFormData } from "../../store/form/formSlice";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";

const initialValues = {
    MODULE: 'React Mod7',
    USERNAME: '',
    EMAIL: '',
    PASSWORD: '',
  };

const Navigator = ({ resetForm }) => {
  const dispatch = useDispatch();
  const { USERNAME, EMAIL } = useSelector((state) => state.form);

  const [showModal, setShowModal] = useState(false);

  const initialValues = {
      MODULE: 'React Mod7',
      USERNAME: '',
      EMAIL: '',
      PASSWORD: '',
    };
    
  // Manejar la confirmación de logout
  const handleLogoutConfirm = () => {
    // 1. Limpia el estado global del store
    dispatch(clearFormData());
    
    // 2. Limpia el formulario (si `resetForm` está configurado correctamente)
    if (resetForm) {
      resetForm(); // Asegúrate de que esta función limpia el estado local del formulario
    }
  
    // 3. Cierra el modal
    setShowModal(false);
  };

  // Manejar la cancelación del logout
  const handleLogoutCancel = () => {
    setShowModal(false);
  };

  return (
    <nav className="navbar" style={{ display: "flex", alignItems: "center", padding: "10px", backgroundColor: "#007BFF", color: "#FFF" }}>
      <div style={{ flex: 1 }}>
        <Link to="/" className="nav-link" style={{ margin: "0 10px", color: "#FFF", textDecoration: "none" }}>LadingPage</Link>
        <Link to="/login" className="nav-link" style={{ margin: "0 10px", color: "#FFF", textDecoration: "none" }}>Login</Link>
      </div>
      <div>
        {USERNAME && EMAIL ? (
          <>
            <p style={{ margin: 0 }}>
              <strong>Usuario:</strong> {USERNAME} | <strong>Email:</strong> {EMAIL}
            </p>
            <button
              style={{
                marginLeft: "10px",
                backgroundColor: "#FF6347",
                color: "#FFF",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => setShowModal(true)}
            >
              Logout
            </button>
          </>
        ) : (
          <p style={{ margin: 0 }}>Inicia sesión para ver tus datos</p>
        )}
      </div>

      {/* Modal de confirmación */}
      <ModalInfo
        visible={showModal}
        message="¿Estás seguro de que deseas cerrar sesión?"
        onClose={handleLogoutCancel}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button
            onClick={handleLogoutConfirm}
            style={{
              backgroundColor: "#007BFF",
              color: "#FFF",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Confirmar
          </button>
          <button
            onClick={handleLogoutCancel}
            style={{
              backgroundColor: "#FF6347",
              color: "#FFF",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cancelar
          </button>
        </div>
      </ModalInfo>
    </nav>
  );
};

export default Navigator;
