import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import '../../fonts.css';

export default function Menunav() {
    const [activeLink, setActiveLink] = useState('');

    const handleClick = (link) => {
        setActiveLink(link);
    };

    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
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
                                <NavLink
                                    className={`nav-link border p-2 border border-0 text-white ${activeLink === 'Home' ? 'bg-success' : ''}`}
                                    to='/' onFocus={() => handleClick('Home')}>
                                    Home
                                </NavLink>
                            </li>
                            <li className='nav-item me-3 mt-2'>
                                <NavLink
                                    onFocus={() => handleClick('Blog')}
                                    className={`nav-link text-white p-2 ${activeLink === 'Blog' ? 'bg-success' : ''}`}
                                    aria-current='page'
                                    to='/blogHelpMechanic'>
                                    Blog
                                </NavLink>
                            </li>

                            <li className='nav-item me-3 mt-2'>
                                <NavLink
                                    onFocus={() => handleClick('Nosotros')}
                                    className={`nav-link text-white p-2 ${activeLink === 'Nosotros' ? 'bg-success' : ''}`}
                                    aria-current='page'
                                    to='/nosotros'>
                                    Nosotros
                                </NavLink>

                            </li>
                            <li className='nav-item  mt-2 me-3 mb-3'>
                                <NavLink
                                    onFocus={() => handleClick('Calidad')}
                                    className={`nav-link border p-2 border border-0 text-white ${activeLink === 'Calidad' ? 'bg-success' : ''}`}
                                    to='/calidad'>
                                    Calidad
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    );
}
