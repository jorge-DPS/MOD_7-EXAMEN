import { Link } from 'react-router';
import UserDrow from './UserDrow/UserDrow';

const Navigator = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm rounded">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-primary fw-bold">MyApp</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/counter" className="nav-link">Counter</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/think" className="nav-link">Think</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                        <UserDrow />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigator;