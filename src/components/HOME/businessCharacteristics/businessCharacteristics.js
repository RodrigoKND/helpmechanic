import { Link } from 'react-router-dom';
import RenderImages from '../../renderImages/renderImages';

import './businessCharacteristics.css';
export default function BusinessCharacteristics() {
    return (
        <section className='d-flex justify-content-center align-items-center'
            style={{ flexWrap: 'wrap', padding: '50px 20px', background: 'none'}}>
            <Link className='nav-link card' style={{ width: '18rem' }} to='/calidad'>
                <RenderImages
                    pathImage='/service.jpg'
                    classImg='card__image'

                />
                <h3 className='card__title p-2'>
                    Servicio Profesional
                </h3>
                <p className='card__paragraph'>
                    Los diversos talleres mecánicos estan listos
                    para atender sus necesidades
                </p>
            </Link>
            <Link className='nav-link card' style={{ width: '18rem' }} to='/nosotros'>
                <RenderImages
                    pathImage='/customerSupport.jpg'
                    classImg='card__image'
                />
                <h3 className='card__title p-2'>
                    Funcionamiento
                </h3>
                <p className='card__paragraph'>
                    Decida al mejor mecánico que usted 
                    seleccione según su ubicación
                </p>
            </Link>
            <Link className='nav-link card' style={{ width: '18rem' }} to='/blogHelpMechanic'>
                <RenderImages
                    pathImage='/information.jpg'
                    classImg='card__image'

                />
                <h3 className='card__title p-2'>
                    Información
                </h3>
                <p className='card__paragraph'>
                    Aprenda sobre los componentes básicos de la mecánica
                </p>
            </Link>
        </section>
    );
}