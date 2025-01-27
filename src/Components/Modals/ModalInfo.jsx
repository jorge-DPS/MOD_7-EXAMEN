import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
const ModalInfo = ({ visible, message, onClose, status, confirmed }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="modal fade show d-flex justify-content-center align-items-center" style={{
            display: "block",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}>
            <motion.div
                className={`modal-dialog modal-dialog-centered ${status === 'warning' ? 'border border-warning' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="modal-content">
                <div className="modal-header">
    <h5 className={`modal-title text-${status === 'warning' ? 'warning' : 'dark'}`}>Información</h5>
    <button
        type="button"
        className="btn-close"
        onClick={onClose}
        aria-label="Close"
    ></button>
</div>
                    <div className="modal-body">
                        <p className="text-secondary">{message}</p>
                    </div>
                    <div className="modal-footer">
                        {confirmed && (
                            <button
                                className="btn btn-primary"
                                onClick={confirmed}
                            >
                                Confirmar
                            </button>
                        )}
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ModalInfo;
