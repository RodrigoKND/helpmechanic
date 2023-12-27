import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

import Misionvision from './mision-vision/ms.js';
import Propositoempresa from './proposito/proposito.js';

import './nosotros.css'
export default function Nosotros() {
    const [register, setRegister] = useState(false);
    useEffect(() => {
        const urlGET = 'https://hm-server-provider.onrender.com/nosotros'
        fetch(urlGET, {
            method: 'GET',
            cache: 'no-store',
            credentials: 'include'
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.errorToken) setRegister(true)
            })
            .catch(err => console.error('Error'))
    }, []);
    const moveImage = event => event.preventDefault();
    return (
        <section>
            <div className="imgTaller">
                <img onDragStart={moveImage} src='/taller.jpeg' alt='taller mecánico'></img>
            </div>
            <div className='description text-white'>
                <h1 className='fs-1'>Conoce más de nosotros</h1>
                <p className='text-center fs-5 bg-primary'>
                    Desde el taller hasta tu ubicación
                </p>
                {register ?
                    <div className='d-flex justify-content-center'>
                        <button className='btn p-3' style={{ background: '#F7CE3B' }}>
                            <Link to={'/login'} className='fs-5' style={{ color: 'brown' }}>
                                Registrarse
                            </Link>
                        </button>
                    </div>
                    : null
                }
            </div>
            <Propositoempresa />
            <hr className='text-white bg-light' style={{ height: '5px' }}></hr>
            <Misionvision />
            <hr className='text-white bg-light' style={{ height: '40px' }}></hr>
            <footer className='text-center text-white'>
                <label className='mb-4'>© HELPMECHANIC 2024</label>
            </footer>
        </section>
    );
}