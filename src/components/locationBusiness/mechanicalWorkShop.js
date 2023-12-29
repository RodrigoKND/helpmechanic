import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchGet } from '../fetch/fetchGet/fetchGet';
import { fetchPost } from '../fetch/fetchPost/fetchPost';

export default function MechanicWorkshop() {
    const [register, setRegister] = useState(false);
    const [specificDetails, setSpecificDetails] = useState({
        phone: '',
        email: '',
        startday: '',
        endday: '',
        starttime: '',
        endtime: '',
        latitude: '',
        longitude: '',
        hexa: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const getLocal = localStorage.getItem('rvpru');
    useEffect(() => {
        fetchGet('direccionTaller')
            .then(data => { if (data.errorToken) setRegister(true) })
    }, []);

    const handleChange = (evt) => {
        if (navigator.geolocation) {
            setSpecificDetails({ ...specificDetails, [evt.target.name]: evt.target.value });
            specificDetails.hexa = getLocal;
            navigator.geolocation.getCurrentPosition(() => {
                return;
            }, () => console.error('Error'))
        }
    }
    const submitLocation = async (evt) => {
        evt.preventDefault();
        const data = await fetchPost('moreInfoMechanic', specificDetails)
        if (data.ok) navigate('/Listamecanicos');
        else setMessage(data.message)
            .catch(() => {
                setMessage('Debe coincidir el campo de contacto');
                setSpecificDetails({ ...specificDetails, phone: specificDetails.phone });
            })
    }

    return (
        <>
            {register
                ?
                <h4 className='text-center text-danger' style={{ marginTop: '15vh' }}>
                    Debe registrarse antes de continuar con el formulario de mecánico
                </h4>
                :
                <form onSubmit={submitLocation}>
                    <div className='d-flex justify-content-center'>
                        <div className='border p-3 card' style={{ width: '30rem', marginTop: '15vh' }}>
                            <h4 className='text-center'> Detalles especificos </h4>
                            <span className='text-primary text-center'>{message}</span>
                            <Link to='/calidad' className='text-center'>
                                <b className='text-danger mt-2'>
                                    ¿Por qué necesitamos su ubicación?
                                </b>
                            </Link>
                            <label className='mt-3 ms-4'>
                                <strong>Móvil/Teléfono</strong>
                                <input className='form-control' type='tel' onChange={handleChange}
                                    placeholder='Verificar contacto' name='phone'
                                    required value={specificDetails.phone} autoComplete='off' />
                            </label>

                            <label className='mt-3 ms-4'>
                                <strong>Correo</strong>
                                <input className='form-control' type='email' onChange={handleChange}
                                    autoComplete='off' name='email' value={specificDetails.email} required />
                            </label>
                            <label className='mt-3 ms-4'>
                                <strong> Dias que dispone trabajar </strong>
                                <div className='input-group'>
                                    <input className='form-control' type='text' name='startday' required
                                        placeholder='ej: Lunes' onChange={handleChange} value={specificDetails.startday} />
                                    <span className='p-2'> <b>a</b> </span>
                                    <input className='form-control' type='text' name='endday' onChange={handleChange} required
                                        placeholder='ej: Sábado' value={specificDetails.endday} />
                                </div>
                            </label>
                            <label className='mt-3 ms-4 mb-3'>
                                <b>Hora de trabajo</b>
                                <time className='input-group'>
                                    <input className='form-control' name='starttime' type='time' onChange={handleChange}
                                        value={specificDetails.starttime} required />
                                    <span className='p-2'> <b>a</b> </span>
                                    <input className='form-control' name='endtime' type='time' onChange={handleChange}
                                        value={specificDetails.endtime} required />
                                </time>
                            </label>

                            <input className='form-control' type='text' name='latitude' autoComplete='off'
                                placeholder='latitud' onChange={handleChange} value={specificDetails.latitude}
                                required pattern="^-?\d+(\.\d+)?$"></input>

                            <input className='form-control mt-4' type='text' name='longitude' autoComplete='off'
                                placeholder='longitud' onChange={handleChange} value={specificDetails.longitude} required></input>
                            <div className='text-center mt-3' pattern="^-?\d+(\.\d+)?$">
                                <span>
                                    Si no conoce las coordenadas de su taller,
                                    puede buscar en_
                                </span>
                                <Link to='https://maps.google.com' target='_blank'>
                                    google maps.
                                </Link>
                            </div>
                            <div className='d-flex justify-content-center mt-3'>
                                <button className='btn btn-primary' type='submit'>Guardar</button>
                            </div>
                        </div>
                    </div>
                </form>
            }
        </>
    );
}