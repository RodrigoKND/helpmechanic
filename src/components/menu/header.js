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
        } else {
            menuNav.current.style.display = 'none';
            setCountClick(0);
        }
    }

    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
                <div className='container-fluid bg-primary' ref={animateMenu}
                    style={{ position: 'fixed', zIndex: '1000', top: '0' }}>
                    <button type='button' className='btn text-white hiddenMenu' onClick={showMenu} id='icon-hamburguer' aria-label='icon-hamburguer-menu'>
                        <i className='bi bi-list fs-1'></i>
                    </button>
                    <ul className='navbar-nav menu container title' ref={menuNav}>
                        <li onClick={() => handleClick('Home')} className={`me-3 mb-4 mt-2 p-2 ${activeLink === 'Home' ? 'bg-success' : ''}`}>
                            <Link aria-current='page'
                                className='nav-link fs-4 text-white' to='/'>
                                Inicio
                            </Link>
                        </li>
                        <li onClick={() => handleClick('Blog')} className={`me-3 mb-4 mt-2 p-2 ${activeLink === 'Blog' ? 'bg-success' : ''}`}>
                            <Link target='_blank'
                                className='nav-link fs-4 text-white' aria-current='page'
                                to='https://helpblogmechanic.blogspot.com/'>
                                Blog
                            </Link>
                        </li>
                        <li onClick={() => handleClick('Nosotros')} className={`me-3 mb-4 mt-2 p-2 ${activeLink === 'Nosotros' ? 'bg-success' : ''}`}>
                            <Link
                                className='nav-link fs-4 text-white' aria-current='page'
                                to='/nosotros'>
                                Nosotros
                            </Link>
                        </li>
                        <li onClick={() => handleClick('Calidad')} className={`me-3 mb-4 mt-2 p-2 ${activeLink === 'Calidad' ? 'bg-success' : ''}`}>
                            <Link aria-current='page'
                                className='nav-link fs-4 text-white' to='/calidad'>
                                Calidad
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header >
    );
}
