import { Link } from 'react-router-dom';
import '../../App.css';
import '../../fonts.css';
import './header.css';
import { useContext } from 'react';
import { AuthUser } from '../context/context-registerUser/accessUser';

export default function Menunav() {
    const { getImage } = useContext(AuthUser);
    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
                <div>
                    <div className='container-fluid bg-primary'
                        style={{ position: 'fixed', zIndex: '1000', top: '0' }}>
                        <button className='navbar-toggler mt-4 mb-4' type='button' data-bs-toggle='collapse'
                            data-bs-target='#navbarNav' aria-controls='navbarNav'
                            aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarNav'>
                            <ul className='navbar-nav menu container title'>
                                <li className='nav-item me-3 mb-4 mt-2'>
                                    <Link className='nav-link active border p-2 border border-0 text-white' to='/'>
                                        Home
                                    </Link>
                                </li>
                                <li className='nav-item me-3 mt-2'>
                                    <Link className='nav-link active text-white p-2' aria-current='page'
                                        to='/bloghelpmechanic'>
                                        Blog
                                    </Link>
                                </li>
                                <li className='nav-item me-3 mt-2'>
                                    <Link className='nav-link active text-white p-2' aria-current='page'
                                        to='/nosotros'>
                                        Nosotros
                                    </Link>
                                </li>
                                <li className='nav-item  mt-2 me-3 mb-3'>
                                    <Link className='nav-link active border p-2 border border-0 text-white' to='/calidad'>
                                        Calidad
                                    </Link>
                                </li>
                                {
                                    getImage ?
                                        <div className='d-flex justify-content-end mt-2'>
                                            <img className='border border-white'
                                                src={getImage} alt='Welcome'
                                                style={{ height: '50px', borderRadius: '40px' }} />
                                        </div> : null
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    );
}
