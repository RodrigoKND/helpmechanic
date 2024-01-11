import Misionvision from './mision-vision/ms.js';
import Propositoempresa from './proposito/proposito.js';

import './nosotros.css';
export default function Nosotros() {
    const moveImage = e => e.preventDefault();
    return (
        <section>
            <div className="imgTaller">
                <img onDragStart={moveImage} src='/taller.jpeg' alt='taller mecánico'></img>
            </div>
            <div className='description text-white'>
                <h3>Conoce más de nosotros</h3>
                <p className='text-center fs-5 bg-primary p-2 mt-3'>
                    Del taller hasta su ubicación
                </p>
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