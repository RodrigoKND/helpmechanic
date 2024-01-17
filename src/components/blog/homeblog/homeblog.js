import { Link } from 'react-router-dom';
import Cards from '../cards/cards';
import RenderImages from '../../renderImages/renderImages';
import './homeblog.css';
export default function Homeblog() {
    const generarSlug = (texto) => {
        return texto
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^a-z0-9-]/g, '');
    }

    return (
        <main style={{ background: '#1F2730', height: '100vh', marginTop: '5%' }}>
            <div className='text-white'>
                <div className='d-flex justify-content-center' style={{ padding: '10vh' }}>
                    <article className='card'
                        style={{ width: '500px', height: '100px', background: 'none' }}>
                        <Link
                            to={'/bloghelpmechanic/' + generarSlug('Anatomia de un motor: Partes esenciales y funciones basicas')}>
                            <RenderImages classImg={'img-newpost'}
                                pathImage='https://res.cloudinary.com/dh0llsovy/image/upload/v1702171248/postHelpMechanic/primerpostMotores/motor_yso6n0.jpg'
                                altImage={'Anatomia de un motor'}>
                            </RenderImages>
                        </Link>
                        <h4 className='text-center text-white' style={{ fontSize: 'large' }}>
                            Anatomia de un motor: Partes esenciales y funciones básicas
                        </h4>
                        <label className='bg-info text-white p-2 ms-3' style={{ position: 'absolute', top: '0' }}>
                            Nuevo post
                        </label>
                    </article>
                </div>
                <div className='input-group justify-content-center' style={{ marginTop: '60px' }}>
                    <section>
                        <Cards
                            urlImage='https://res.cloudinary.com/dh0llsovy/image/upload/v1702172284/postHelpMechanic/segundoPostEscape/escape_d3vijn.jpg'
                            title={'Sistema de escape y su importancia'}
                            datePost={'09/12/2023'}
                        ></Cards>
                    </section>
                    <section>
                        <Cards
                            urlImage='https://res.cloudinary.com/dh0llsovy/image/upload/v1702174909/postHelpMechanic/direccion%20y%20suspension/volante_rdrg5f.jpg'
                            title={'Componentes del sistema de direccion y suspension'}
                            datePost={'20/11/2023'}
                        ></Cards>
                    </section>
                </div>
            </div>
        </main>
    );
}