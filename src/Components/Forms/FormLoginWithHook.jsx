import useForm from "../Hooks/useForm.js";

// eslint-disable-next-line react/prop-types
const FormLoginWithHook = ({ titleForm }) => {
    const { formData, handleChange, resetForm } = useForm({
        username: '',
        email: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('datos del formulario', formData);
    };

    const handleReset = () => {
        resetForm(); // Llamar al método para reiniciar el formulario
        console.log('Formulario limpiado');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>{titleForm}</h3>
                <div>
                    <label>
                        Username:
                        <input
                            type='text'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                    <button type="submit">Enviar</button>
                    <button type="button" onClick={handleReset}>
                        Limpiar
                    </button>
                </div>
            </form>
        </>
    );
};

export default FormLoginWithHook;
