import { Link } from 'react-router-dom';

import WhyChooseUs from './whyChooseUs/whyChooseUs';
import BusinessCharacteristics from './businessCharacteristics/businessCharacteristics';
import RenderImages from '../renderImages/renderImages';

import './home.css';
import '../../fonts.css';

export default function Maincontain() {
    const latitudeUser = sessionStorage.getItem('latU');
    const longitudeUser = sessionStorage.getItem('longU');
    const latitudeBusiness = localStorage.getItem('lat');
    const longitudeBusiness = localStorage.getItem('long');

    if (latitudeUser && longitudeUser) {
        sessionStorage.removeItem(latitudeUser);
        sessionStorage.removeItem(longitudeUser);
    } else if (latitudeBusiness && longitudeBusiness) {
        localStorage.removeItem(latitudeBusiness);
        localStorage.removeItem(longitudeBusiness);
    }
    return (
        <>
            <div className='mt-5 registration'>
                <div onContextMenu={evt => evt.preventDefault()}>
                    <h1 className='text-white registration__slogan text-center'>
                        Desde el taller hasta tu ubicación
                    </h1>
                    <p className='registration__description text-center'>
                        Ofrecemos soluciones para sus problemas mecánicos
                    </p>
                    <Link to='/login'
                        className='nav-link registration__link textContain text-white p-2 text-center fs-4 bg-primary'>
                        ¡Solicita un servicio!
                    </Link>
                </div>
            </div>
            <div className='contain' onContextMenu={evt => evt.preventDefault()}>
                <RenderImages classImg='contain__image' pathImage='/homeimage.jpg'
                    altImage='modelo pagina principal mecanico' />
                <BusinessCharacteristics />
                <WhyChooseUs />
                <footer className='text-center mb-4'
                    style={{ background: '#222', padding: '20px', color: '#fff' }}>
                    © HELPMECHANIC 2024
                </footer>
            </div>
        </>
    );
}