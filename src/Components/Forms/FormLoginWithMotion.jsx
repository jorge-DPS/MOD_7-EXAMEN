import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { setFormData } from '../../store/form/formSlice';
import useForm from '../Hooks/useForm';
import ModalInfo from '../../Components/Modals/ModalInfo.jsx';
import { motion } from 'framer-motion';

const FormLoginWithMotion = forwardRef((_, ref) => {
  const dispatch = useDispatch();

  // Usar useForm para manejar los datos del formulario
  const { formData, handleChange, resetForm } = useForm({
    MODULE: 'React Mod7',
    USERNAME: '',
    EMAIL: '',
    PASSWORD: 'mod7USIP-jorge',
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Exponer el método resetForm para que el componente padre pueda usarlo
  useImperativeHandle(ref, () => ({
    resetForm,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.PASSWORD === 'mod7USIP-jorge') {
      setModalMessage(`Bienvenido: ${formData.USERNAME}`);
      dispatch(setFormData(formData));
    } else {
      setModalMessage('Contraseña inválida. No se guardaron los datos.');
    }

    setShowModal(true);
  };

  const onCloseModalInfo = () => {
    setShowModal(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ModalInfo
        visible={showModal}
        message={modalMessage}
        onClose={onCloseModalInfo}
      />
      <form onSubmit={handleSubmit}>
        {/* Campo MODULE */}
        <div>
          <label>
            Módulo:
            <input type="text" name="MODULE" value={formData.MODULE} disabled />
          </label>
        </div>

        {/* Campo USERNAME */}
        <div>
          <label>
            Username:
            <input
              type="text"
              name="USERNAME"
              value={formData.USERNAME}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        {/* Campo EMAIL */}
        <div>
          <label>
            Email:
            <input
              type="email"
              name="EMAIL"
              value={formData.EMAIL}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        {/* Campo PASSWORD */}
        <div>
          <label>
            Contraseña:
            <input
              type="password"
              name="PASSWORD"
              value={formData.PASSWORD}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </motion.div>
  );
});

export default FormLoginWithMotion;
