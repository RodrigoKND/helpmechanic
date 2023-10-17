import { Link } from 'react-router-dom';
import Logo from '../../assets/logoBusiness';
import '../../App.css';
import '../../fonts.css';
import './header.css';

function Menunav() {
    return (
        <header>
            <nav className='navbar'>
                <div>
                    <div className='container-fluid' 
                    style={{ position: 'fixed', zIndex: '1000', top: '0', background:'yellow' }}>
                        <button className='navbar-toggler mt-4 mb-4' type='button' data-bs-toggle='collapse'
                            data-bs-target='#navbarNav' aria-controls='navbarNav'
                            aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarNav'>
                            <Logo width={100} height={60} />
                            <ul className='navbar-nav menu container title'>
                                <li className='nav-item  mt-4 me-3'>
                                    <Link className='nav-link active text-white p-2 bg-primary border border-0' aria-current='page'
                                        to='/nosotros'>
                                        Nosotros
                                    </Link>
                                </li>
                                <li className='nav-item  mt-4 me-3 mb-4'>
                                    <Link className='nav-link active border p-2 border border-0' to='/calidad'>
                                        Calidad
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </nav>
        </header>

    );
}

export default Menunav