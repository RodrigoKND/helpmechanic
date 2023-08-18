import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Cardlist from "./card";

import './listamecanicos.css'

export default function Listamecanicos() {
    const [info, setInfo] = useState([]);
    const [coord, setCoord] = useState([]);
    const [message, setMessage] = useState('');
    const [locationUser, setCoordUser] = useState('');
    const [register, setregister] = useState(false);
    useEffect(() => {
        fetch('https://hm-server-provider.onrender.com/Listamecanicos', {
            method: 'GET',
            cache: 'no-store',
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.errorToken) {
                    setregister(true);
                    setMessage('Debe registrarse antes de continuar...')
                } else {
                    setInfo(data.selListmechanic);
                    setCoord(data.selSecondListmechanic);
                    localStorage.removeItem('lat');
                    localStorage.removeItem('long');
                }
            })
            .catch(err => {
                setMessage('No se pudo obtener la lista de los mecánicos...Intentelo nuevamente.')
            })
    }, []);

    const combinedData = info.map((register) => {
        const secondTable = coord.find((idSecond) => idSecond.idInfo === register.idMechanic)
        return { ...register, ...secondTable }
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
                }, () => {
                    rej('Existió un error al obtener su ubicación');
                })
            } else setMessage('Su navegador no es compatible');
        })
    };

    const fetchAdress = async () => {
        try {
            const allowLocation = await getLocation();
            const urlLOCATION = `https://nominatim.openstreetmap.org/reverse?
            format=json&lat=${allowLocation.lat}&lon=${allowLocation.long}`;
            const getAddress = await fetch(urlLOCATION, { method: 'GET' });
            const jsonData = await getAddress.json();
            return {
                state: jsonData.address.state
            }
        } catch (err) {
            setMessage(err);
        }
    };

    const coordUser = () => {
        fetchAdress()
            .then(data => {
                setCoordUser(data.state);
            })
            .catch(() => {
                setMessage('Existió un error al obtener su ubicación.');
            })
    };

    const localLocation = (lat, long) => {
        localStorage.removeItem('rvpru');
        localStorage.setItem('lat', lat);
        localStorage.setItem('long', long);
    }

    return (
        <main>
            {register ?
                <h4 className='text-center text-danger'>{message}</h4>
                :
                <div className='row p-4'>
                    <div className='col-3 container'
                        style={{ display: 'flex', flexDirection: 'column', width: 'max-content' }}>
                        <button type='button' className="btn btn-success" onClick={coordUser} >
                            Ver lista de mecánicos
                        </button>
                    </div>
                    <div className='col-9 row'>
                        {message ? <h4 className='text-center text-danger'>{message}</h4> : null}
                        {
                            combinedData.length === 0
                                ?
                                <>
                                    <div className='d-flex justify-content-center mt-3 ms-4'>
                                        <img className='imgNotFound' src='/llave.png' alt='No se encontraron mecánicos cerca'></img>
                                    </div>
                                    <h4 className='text-center ms-4 text-secondary'>
                                        No se encontraron mecánicos, cerca de su ubicación...
                                        <p className='mt-4 text-primary'>Estamos trabajando en ello.</p>
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