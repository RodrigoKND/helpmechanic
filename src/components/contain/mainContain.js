import Bordercontain from './borderContain';
import '../../App.css'
import { useEffect } from 'react';

export default function Maincontain() {
    useEffect(() => {
        const ifStorage = () => {
            const latu = sessionStorage.getItem('latU');
            const longu = sessionStorage.getItem('longU');
            const lat = localStorage.getItem('lat');
            const long = localStorage.getItem('long');

            if (latu && longu) {
                sessionStorage.removeItem(latu);
                sessionStorage.removeItem(longu);
            } else if (lat && long) {
                localStorage.removeItem(lat);
                localStorage.removeItem(long);
            }
        }
        ifStorage()
    })

    return (
        <>

            <Bordercontain />
            <div className='contain' style={{ marginTop: '11vh' }} onContextMenu={evt=>evt.preventDefault()}>
                <img className='imgMechanic' src='/tallerHome.webp' onDragStart={e=>e.preventDefault()} 
                    alt='modelo pagina principal mecanico'/>
                <div className='row cols-md-4 g-1 mt-4'>
                    <div className='col-4'>
                        <div className='card border border-light' style={{ background: '#161616' }}>
                            <div className='card-body text-center text-info'>
                                <span className="material-symbols-outlined mt-3" style={{ fontSize: '50px' }}>
                                    minor_crash
                                </span>
                                <pre className='preoverview'>INSPECCIÓN</pre>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card border border-light' style={{ background: '#161616' }}>
                            <div className='card-body text-center text-info'>
                                <span className="material-symbols-outlined mt-3" style={{ fontSize: '50px' }}>
                                    two_wheeler
                                </span>
                                <pre className='preoverview'>DIAGNÓSTICO</pre>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='card border border-light' style={{ background: '#161616' }}>
                            <div className='card-body text-center text-info'>
                                <span className="material-symbols-outlined mt-3" style={{ fontSize: '50px' }}>
                                    home_repair_service
                                </span>
                                <pre className='preoverview'>INFORMACIÓN</pre>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-light container' style={{ marginTop: '65px' }}>
                    <h4 className='title' style={{ fontSize: '40px' }}>¿Por qué escogernos?</h4>
                    <div className='row cols-md-4 g-5'>
                        <div className='col'>
                            <p className='textContain mt-2' style={{ lineHeight: '30px' }}>
                                Proporcionamos información acerca de mecánicos especializados
                                con una amplia experiencia en su área.
                                Toda esa información con tan solo registrarse de manera gratuita y poder
                                olvidarse de los problemas con su vehiculo/motocicleta, etc.
                            </p>
                        </div>
                    </div>
                </div>
                <hr style={{color:'white'}}></hr>
                <div className='text-center text-white mb-4'>
                    © HELPMECHANIC 2023
                </div>
            </div>

        </>
    );
}