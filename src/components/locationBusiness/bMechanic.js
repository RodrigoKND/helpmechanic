import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Mechanictaller() {
    const [register, setRegister] = useState(false);
    useEffect(() => {
        fetch('https://hm-server-provider.onrender.com/direccionTaller', {
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
        passwd: '',
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
        const urlLocation = 'http://localhost:3001/moreInfoMechanic';
        const formData = new FormData();
        formData.append('phone', coord.phone);
        formData.append('email', coord.email);
        formData.append('passwd', coord.passwd);
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
                    window.location.href = '/Listamecanicos'
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
                <h4 className='text-center text-danger'>
                    Debe registrarse antes de continuar en el formulario de mecánico
                </h4>
                :
                <form onSubmit={submitLocation}>
                    <div className='d-flex justify-content-center'>
                        <div className='border p-3 card' style={{ width: '30rem' }}>
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
                                required value={coord.phone}></input>

                            <label className='mt-3 ms-4' htmlFor='email'><h6>Correo</h6></label>
                            <input className='form-control' type='email' id='email' onChange={handleChange}
                                autoComplete='username' name='email' value={coord.email} required></input>

                            <label className='mt-3 ms-4' htmlFor='password'><h6>Contraseña</h6></label>
                            <input className='form-control mb-3' type='password' id='password' onChange={handleChange}
                                autoComplete='current-password' name='passwd' value={coord.passwd} required></input>

                            <input className='form-control' type='number' name='latitude'
                                placeholder='latitud' onChange={handleChange} value={coord.latitude} required></input>

                            <input className='form-control mt-4' type='number' name='longitude'
                                placeholder='longitud' onChange={handleChange} value={coord.longitude} required></input>
                            <div className='text-center mt-3'>
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