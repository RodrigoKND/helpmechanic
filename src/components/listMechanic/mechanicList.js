import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import { fetchGet } from '../fetch/fetchGet/fetchGet';
import Cardlist from './card';

import './mechanicList.css';
import RenderImages from '../renderImages/renderImages';

export default function MechanicList() {
    const [info, setInfo] = useState([]);
    const [coord, setCoord] = useState([]);
    const [message, setMessage] = useState('');
    const [locationUser, setCoordUser] = useState('');
    const [register, setregister] = useState(false);
    const [toastContainerKey, setToastContainerKey] = useState(0);
    useEffect(() => {
        setToastContainerKey((prevKey) => prevKey + 1);
        fetchGet('Listamecanicos')
            .then(data => {
                if (data.errorToken) {
                    setregister(true);
                    setMessage('Debe registrarse antes de continuar...');
                } else {
                    setInfo(data.selListmechanic);
                    setCoord(data.selSecondListmechanic);
                    localStorage.removeItem('lat');
                    localStorage.removeItem('long');
                }
            })
    }, []);

    const combinedData = info.map((register) => {
        const secondTable = coord.find(idSecond => {
            return idSecond.idInfo === register.idMechanic
        })
        return { ...register, ...secondTable };
    });

    const getLocation = () => {
        return new Promise((res, rej) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    res({
                        lat: pos.coords.latitude,
                        long: pos.coords.longitude
                    })
                    sessionStorage.setItem('latU', pos.coords.latitude);
                    sessionStorage.setItem('longU', pos.coords.longitude);
                }, () => rej('Existió un error al obtener su ubicación'))
            }
        })
    };

    const fetchAdress = async () => {
        try {
            const allowLocation = await getLocation();
            const urlLOCATION = `https://nominatim.openstreetmap.org/reverse?
            format=json&lat=${allowLocation.lat}&lon=${allowLocation.long}`;
            fetchGet(urlLOCATION).then(addr => {
                if (addr.address.state) setCoordUser(addr.address.state)
            })
        } catch (err) { setMessage(err); }
    };

    const localLocation = (lat, long) => {
        localStorage.removeItem('rvpru');
        localStorage.setItem('lat', lat);
        localStorage.setItem('long', long);
    }
    useEffect(() => {
        if (message) {
            toast(message, { type: 'error', containerId: 'customContainer' });
            setMessage(null);
        }
    }, [message, toastContainerKey]);
    return (
        <main>
            {register ?
                <div>
                    <ToastContainer theme='colored' key={toastContainerKey} containerId="customContainer"></ToastContainer>
                </div>
                :
                <div className='row p-4'>
                    <div className='col-3 container'
                        style={{ display: 'flex', flexDirection: 'column', width: 'max-content' }}>
                        <button type='button' className="btn btn-success" onClick={fetchAdress} style={{ marginTop: '10vh' }}>
                            Ver lista de mecánicos
                        </button>
                    </div>
                    <div className='col-9 row'>
                        {message ? <h4 className='text-center text-danger' style={{ marginTop: '70px' }}>{message}</h4> : null}
                        {
                            combinedData.length === 0
                                ?
                                <>
                                    <div className='d-flex justify-content-center mt-5 ms-4 notFound'>
                                        <RenderImages 
                                        classImg={'notFound__img'}
                                        pathImage={'/llave.png'}
                                        altImage={'No se encontraron mecánicos cerca'}>
                                        </RenderImages>
                                    </div>
                                    <h4 className='text-center ms-4 text-secondary'>
                                        No se encontraron mecánicos, cerca de su ubicación...
                                        <p className='mt-4 text-primary'>Estamos trabajando en ello. 💪</p>
                                        <Link to='/' className='text-secondary'>Regresar</Link>
                                    </h4>
                                </>
                                : null
                        }
                        {combinedData.map((value) => {
                            if (value.state === locationUser) {
                                return <Cardlist
                                    key={value.idInfo}
                                    name={value.name}
                                    urlWorkshop={value.urlWorkshop}
                                    address={value.address}
                                    hasCar={value.hasCar}
                                    phone={value.phone}
                                    country={value.country}
                                    state={value.state}
                                    startday={value.startday}
                                    endday={value.endday}
                                    starttime={value.starttime}
                                    endtime={value.endtime}
                                    yearExperience={value.yearExperience}
                                >
                                    <Link to='/map' className='btn btn-primary' onClick={localLocation(value.latitude, value.longitude)}>
                                        <i className="bi bi-geo-alt me-2"></i>
                                        Ubicación
                                    </Link>
                                </Cardlist>
                            } else if (sessionStorage.getItem('latU') && sessionStorage.getItem('longU')) {
                                return <Cardlist
                                    key={value.idMechanic}
                                    name={value.name}
                                    urlWorkshop={value.urlWorkshop}
                                    address={value.address}
                                    hasCar={value.hasCar}
                                    phone={value.phone}
                                    country={value.country}
                                    state={value.state}
                                    yearExperience={value.yearExperience}
                                >
                                    <Link to='/map' className='btn btn-primary' onClick={localLocation(value.latitude, value.longitude)}>
                                        <i className="bi bi-geo-alt me-2"></i>
                                        Ubicación
                                    </Link>
                                </Cardlist>
                            }
                        })}
                    </div>
                </div>
            }
        </main>
    );
}