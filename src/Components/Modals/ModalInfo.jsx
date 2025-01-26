import { motion } from "framer-motion";
import PropTypes from "prop-types";

// Componente ModalInfo
const ModalInfo = ({ visible, message, onClose, children }) => {
  if (!visible) {
    return null; // No renderizar el modal si no es visible
  }

  return (
    <div
      className="modal-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <motion.div
        className="notification-success"
        style={{
          position: "relative", // Necesario para posicionar el botón dentro del modal
          backgroundColor: "#FFF",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          width: "300px",
          textAlign: "center",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {/* Botón "X" en la esquina superior derecha */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "transparent",
            color: "#FF6347",
            border: "none",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          X
        </button>

        {/* Contenido del modal */}
        <p style={{ fontSize: "16px", marginBottom: "20px" }}>{message}</p>
        {children} {/* Renderizar contenido adicional */}
      </motion.div>
    </div>
  );
};

// Validación de propiedades
ModalInfo.propTypes = {
  visible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node, // Permite contenido adicional
};

export default ModalInfo;
