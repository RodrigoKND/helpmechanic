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
                    <h4 className='text-white bg-info p-3 registration__slogan' style={{ borderRadius: '10px' }}>
                        Desde el taller hasta tu ubicación
                    </h4>
                    <Link className='nav-link registration__link textContain text-white p-2 text-center fs-4 bg-primary'
                        to='/login'>
                        Registrarse
                    </Link>
                </div>
            </div>
            <div className='contain' onContextMenu={evt => evt.preventDefault()}>
                <RenderImages classImg='contain__image' pathImage='/homeimage.jpg'
                    altImage='modelo pagina principal mecanico'></RenderImages>
                <div className='row cols-md-4 g-1 mt-4'>
                    <BusinessCharacteristics></BusinessCharacteristics>
                </div>
                <WhyChooseUs></WhyChooseUs>
                <hr style={{ color: 'white' }}></hr>
                <div className='text-center text-white mb-4'>
                    © HELPMECHANIC 2024
                </div>
            </div>
        </>
    );
}