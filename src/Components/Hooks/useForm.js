import { useState } from 'react';

const useForm = (initialValues) => {
  // Estado local del formulario
  const [formData, setFormData] = useState(initialValues);

  // Método para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Método para reiniciar el formulario
  const resetForm = () => {
    setFormData({
        MODULE: '',
        USERNAME: '',
        EMAIL: '',
        PASSWORD: '',
      }); // Restaura los valores iniciales
    console.log('Formulario reiniciado:', { ...initialValues });
  };

  // Retornar métodos y datos
  return {
    formData,
    handleChange,
    resetForm,
  };
};

export default useForm;
