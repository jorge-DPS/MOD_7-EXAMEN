import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../../store/form/formSlice';
import ModalInfo from '../../Modals/ModalInfo';

const resetForm = {
    module: '',
    username: '',
    email: '',
    password: ''
};

const UserDrow = () => {
    const [isConfirme, setIsConfirme] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const store = useSelector((state) => state.formLogin);
    const dispatch = useDispatch();

    const confirmed = () => setIsConfirme(!isConfirme);
    const handleModal = () => setShowModal(!showModal);

    useEffect(() => {
        if (isConfirme) {
            dispatch(addUser(resetForm));
            handleModal();
            confirmed();
        }
    }, [isConfirme]);

    return (
        <div className="d-flex flex-column align-items-end">
            {store.username && (
                <div className="bg-white shadow-lg p-4 rounded d-flex align-items-center justify-content-between">
                    <h5 className="mb-0 text-primary">Bienvenido, {store.username} | {store.email}</h5>
                    <button
                        className="btn btn-danger btn-sm ms-3"
                        onClick={handleModal}
                    >
                        Logout
                    </button>
                </div>
            )}
            <ModalInfo
                visible={showModal}
                message="¿Estás seguro que quieres cerrar sesión?"
                onClose={handleModal}
                status='warning'
                confirmed={confirmed}
            />
        </div>
    );
};

export default UserDrow;
