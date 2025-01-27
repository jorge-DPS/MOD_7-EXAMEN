import { useEffect, useState } from "react";
import { motion } from "motion/react";
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/form/formSlice.js";

const FormWithMotionAndHook = ({ titleForm }) => {
    const store = useSelector((state) => state.formLogin);
    const dispatch = useDispatch();

    const { formData, handleChange, setForm } = useForm({
        module: '',
        username: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        setForm(store);
    }, [store]);

    const [showModal, setShowModal] = useState(false);
    const [statusModel, setStatusModal] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password === store.password) {
            setStatusModal('success');
            dispatch(addUser(formData));
            setMessage(`Bienvenido: ${formData.username}`);
        } else {
            setStatusModal('error');
            setMessage(`Username/Password incorrectos!!!`);
        }
        setShowModal(true);
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
    };

    const handleStatusPassword = () => setShowPassword(!showPassword);

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="card shadow-lg rounded-4 p-4 w-100" style={{ maxWidth: "400px" }}
            >
                <ModalInfo
                    visible={showModal}
                    status={statusModel}
                    message={message}
                    onClose={onCloseModalInfo}
                />
                <motion.h3
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-primary mb-4"
                >
                    {titleForm}
                </motion.h3>

                <form onSubmit={handleSubmit}>
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-3"
                    >
                        <label className="form-label text-secondary">Module</label>
                        <input
                            className="form-control"
                            disabled
                            type="text"
                            name="module"
                            value={formData.module}
                            onChange={handleChange}
                            required
                        />
                    </motion.div>

                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-3"
                    >
                        <label className="form-label text-secondary">Username</label>
                        <input
                            className="form-control"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </motion.div>

                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-3"
                    >
                        <label className="form-label text-secondary">Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </motion.div>

                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-3"
                    >
                        <label className="form-label text-secondary">Password</label>
                        <div className="input-group">
                            <input
                                className="form-control"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={handleStatusPassword}
                                className="btn btn-outline-secondary"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                        >
                            Login
                        </button>
                    </motion.div>
                </form>
            </motion.div>
        </div>
    );
};

export default FormWithMotionAndHook;
