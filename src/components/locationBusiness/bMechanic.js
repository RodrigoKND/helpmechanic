import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function Mechanictaller() {
    const [register, setRegister] = useState(false);
    useEffect(() => {
        // const locationGet = 'https://hm-server-provider.onrender.com/direccionTaller'
        const locationGet = 'http://localhost:3001/direccionTaller'
        fetch(locationGet, {
            method: 'GET',
            cache: 'no-store',
            credentials: 'include'
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.errorToken) {
                    setRegister(true);
                }
            }).catch(() => console.error('Error'))

    }, []);
    const [message, setMessage] = useState('')
    const getLocal = localStorage.getItem('rvpru');
    const [coord, setCoord] = useState({
        phone: '',
        email: '',
        startday: '',
        endday: '',
        starttime: '',
        endtime: '',
        latitude: '',
        longitude: '',
    })

    const handleChange = (evt) => {
        if (navigator.geolocation) {
            setCoord({ ...coord, [evt.target.name]: evt.target.value })
            navigator.geolocation.getCurrentPosition(() => {
                return;
            }, () => console.error('Error'))
        }
    }
    const submitLocation = (evt) => {
        evt.preventDefault();
        // const urlLocation = 'https://hm-server-provider.onrender.com/moreInfoMechanic';
        const urlLocation = 'http://localhost:3001/moreInfoMechanic';
        const formData = new FormData();
        formData.append('phone', coord.phone);
        formData.append('email', coord.email);
        formData.append('startday', coord.startday);
        formData.append('endday', coord.endday);
        formData.append('starttime', coord.starttime);
        formData.append('endtime', coord.endtime);
        formData.append('latitude', coord.latitude);
        formData.append('longitude', coord.longitude);
        formData.append('hexa', getLocal);
        fetch(urlLocation, {
            method: 'POST',
            body: formData,
            credentials: 'include'
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                if (data.ok) {
                    window.location.href = '/#/Listamecanicos';
                }
                setMessage(data.message)
            }).catch(err => {
                // console.log(err)
                setMessage('Debe coincidir el campo de contacto');
                setCoord({ ...coord, phone: coord.phone });
            })
    }

    return (
        <>
            {register
                ?
                <h4 className='text-center text-danger' style={{ marginTop: '15vh' }}>
                    Debe registrarse antes de continuar en el formulario de mecánico
                </h4>
                :
                <form onSubmit={submitLocation}>
                    <div className='d-flex justify-content-center'>
                        <div className='border p-3 card' style={{ width: '30rem', marginTop: '15vh' }}>
                            <h5 className='text-center' style={{ textDecoration: 'underline blue' }}>
                                Detalles especificos
                            </h5>
                            <span className='text-primary text-center'>{message}</span>
                            <Link to='/calidad'>
                                <b className='text-danger text-center mt-2'>
                                    ¿Por qué necesitamos su ubicación?
                                </b>
                            </Link>
                            <label className='mt-3 ms-4' htmlFor='phoneM'>
                                <h6>Móvil/Teléfono</h6>
                            </label>
                            <input className='form-control' type='tel' onChange={handleChange}
                                placeholder='Verificar contacto' id='phoneM' name='phone'
                                required value={coord.phone} autoComplete='off'></input>

                            <label className='mt-3 ms-4' htmlFor='email'><h6>Correo</h6></label>
                            <input className='form-control' type='email' id='email' onChange={handleChange}
                                autoComplete='off' name='email' value={coord.email} required></input>

                            <label className='mt-3 ms-4'><h6>Dias que dispone trabajar</h6></label>
                            <div className='input-group'>
                                <input className='form-control' type='text' name='startday' required
                                    placeholder='ejemplo: Lunes' onChange={handleChange} value={coord.startday}></input>
                                <span className='p-2'> <b>a</b> </span>
                                <input className='form-control' type='text' name='endday' onChange={handleChange} required
                                    placeholder='ejemplo: Sábado' value={coord.endday}></input>
                            </div>
                            <label className='mt-3 ms-4'><h6>Hora de trabajo</h6></label>
                            <div className='input-group'>
                                <input className='form-control' name='starttime' type='time' onChange={handleChange}
                                    value={coord.starttime} required></input>
                                <span className='p-2'> <b>a</b> </span>
                                <input className='form-control' name='endtime' type='time' onChange={handleChange}
                                    value={coord.endtime} required></input>
                            </div>

                            <input className='form-control' type='text' name='latitude' autoComplete='off'
                                placeholder='latitud' onChange={handleChange} value={coord.latitude} 
                                required pattern="^-?\d+(\.\d+)?$"></input>

                            <input className='form-control mt-4' type='text' name='longitude' autoComplete='off'
                                placeholder='longitud' onChange={handleChange} value={coord.longitude} required></input>
                            <div className='text-center mt-3' pattern="^-?\d+(\.\d+)?$">
                                <span>
                                    Si no conoce las coordenadas de su taller,
                                    puede buscar en_
                                </span>
                                <Link to='https://maps.google.com' target='_blank'>
                                    google maps.
                                </Link>
                            </div>
                            <div className='d-flex justify-content-center mt-4'>
                                <button className='btn btn-primary' type='submit'>Guardar</button>
                            </div>
                        </div>
                    </div>
                </form>
            }
        </>
    );
}