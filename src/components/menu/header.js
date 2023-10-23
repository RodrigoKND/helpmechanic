import { Link } from 'react-router-dom';
import '../../App.css';
import '../../fonts.css';
import './header.css';
import { useEffect, useState } from 'react';

export default function Menunav() {
    const [register, setRegister] = useState(false);
    useEffect(() => {
        fetch('https://hm-server-provider.onrender.com/direccionTaller', {
            method: 'GET',
            cache: 'no-store',
            credentials: 'include'
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                if (data.errorToken) {
                    setRegister(false);
                }else setRegister(true);
            }).catch(() => console.error('Error'))

    }, []);
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
                                    <Link className='nav-link active text-white p-2 border border-white' aria-current='page'
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
                                    register ?
                                        <div className='mt-3' style={{ marginLeft: '65%' }}>
                                            <button className='btn text-white bg-danger' type='submit' >
                                                Cerrar session
                                            </button>
                                        </div> :
                                        " "
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    );
}
