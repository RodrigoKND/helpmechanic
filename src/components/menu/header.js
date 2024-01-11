import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import '../../fonts.css';

export default function Menunav() {
    const [activeLink, setActiveLink] = useState('');
    const [countClick, setCountClick] = useState(0);
    const menuNav = useRef();
    const animateMenu = useRef();
    const handleClick = (link) => {
        setActiveLink(link);
        menuNav.current.style.transition = 'all 2s ease-out'
        menuNav.current.style.display = 'none';
    }
    const showMenu = () => {
        if (countClick === 0) {
            menuNav.current.classList.add('animateMenu');
            animateMenu.current.classList.add('animateMenu');
            menuNav.current.style.display = 'block';
            setCountClick(countClick + 1);
        }else {
            menuNav.current.style.display = 'none';
            setCountClick(0);
        }
    }

    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
                <div className='container-fluid bg-primary' ref={animateMenu}
                    style={{ position: 'fixed', zIndex: '1000', top: '0' }}>
                    <button type='button' className='btn text-white hiddenMenu' onClick={showMenu}>
                        <i className='bi bi-list fs-1'></i>
                    </button>
                    <ul className='navbar-nav menu container title' ref={menuNav}>
                        <Link
                            className={`nav-link me-3 mb-4 mt-2 p-2 fs-4 text-white ${activeLink === 'Home' ? 'bg-success' : ''}`}
                            to='/' onClick={() => handleClick('Home')}>
                            Inicio
                        </Link>
                        <Link
                            onClick={() => handleClick('Blog')}
                            className={`nav-link me-3 mb-4 mt-2 p-2 fs-4 text-white ${activeLink === 'Blog' ? 'bg-success' : ''}`}
                            aria-current='page'
                            to='/blogHelpMechanic'>
                            Blog
                        </Link>
                        <Link
                            onClick={() => handleClick('Nosotros')}
                            className={`nav-link me-3 mb-4 mt-2 p-2 fs-4 text-white ${activeLink === 'Nosotros' ? 'bg-success' : ''}`}
                            aria-current='page'
                            to='/nosotros'>
                            Nosotros
                        </Link>
                        <Link
                            onClick={() => handleClick('Calidad')}
                            className={`nav-link me-3 mb-4 mt-2 p-2 fs-4 text-white ${activeLink === 'Calidad' ? 'bg-success' : ''}`}
                            to='/calidad'>
                            Calidad
                        </Link>
                    </ul>
                </div>
            </nav>
        </header >
    );
}
