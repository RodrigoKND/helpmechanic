import { useContext, useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { fetchPost } from '../fetch/fetchPost/fetchPost';
import { AuthUser } from '../context/context-registerUser/accessUser';

export default function MechanicWorkshop() {
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
    const {setisAuth} = useContext(AuthUser);
    const handleChange = (evt) => {
        if (navigator.geolocation) {
            specificDetails.hexa = getLocal;
            setSpecificDetails({ ...specificDetails, [evt.target.name]: evt.target.value });
            navigator.geolocation.getCurrentPosition(() => {
                return;
            }, () => console.error('Error'))
        }
    }
    const mutation = useMutation({
        mutationFn: () => fetchPost('moreInfoMechanic', specificDetails)
    })
    const submitLocation = async (evt) => {
        evt.preventDefault();
        mutation.mutate();
    }
    useEffect(() => {
        if (mutation.isSuccess) {
            if (mutation.data.ok) {
                navigate('/Listamecanicos')
                setisAuth(true);
            }
            else setMessage(mutation.data.message)
        }
    }, [mutation.isSuccess, mutation.data, navigate, setisAuth]);
    return (
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
                    {mutation.error &&
                        <h4 className='text-center text-danger'>
                            Existió un error, intentelo de nuevo más tarde
                        </h4>
                    }
                    <label className='mt-3 ms-4'>
                        <strong>Móvil/Teléfono</strong>
                        <input className='form-control' type='tel' onChange={handleChange}
                            placeholder='Verificar contacto' name='phone'
                             value={specificDetails.phone} autoComplete='off' />
                    </label>

                    <label className='mt-3 ms-4'>
                        <strong> Correo </strong>
                        <input className='form-control' type='email' onChange={handleChange}
                            autoComplete='off' name='email' value={specificDetails.email}  />
                    </label>
                    <label className='mt-3 ms-4'>
                        <strong> Dias que dispone trabajar </strong>
                        <div className='input-group'>
                            <input className='form-control' type='text' name='startday' 
                                placeholder='ej: Lunes' onChange={handleChange} value={specificDetails.startday} />
                            <span className='p-2'> <b>a</b> </span>
                            <input className='form-control' type='text' name='endday' onChange={handleChange} 
                                placeholder='ej: Sábado' value={specificDetails.endday} />
                        </div>
                    </label>
                    <label className='mt-3 ms-4 mb-3'>
                        <b>Hora de trabajo</b>
                        <time className='input-group'>
                            <input className='form-control' name='starttime' type='time' onChange={handleChange}
                                value={specificDetails.starttime}  />
                            <span className='p-2'> <b>a</b> </span>
                            <input className='form-control' name='endtime' type='time' onChange={handleChange}
                                value={specificDetails.endtime}  />
                        </time>
                    </label>

                    <input className='form-control' type='text' name='latitude' autoComplete='off'
                        placeholder='latitud' onChange={handleChange} value={specificDetails.latitude}
                         pattern="^-?\d+(\.\d+)?$"></input>

                    <input className='form-control mt-4' type='text' name='longitude' autoComplete='off'
                        placeholder='longitud' onChange={handleChange} value={specificDetails.longitude} ></input>
                    <div className='text-center mt-3' pattern="^-?\d+(\.\d+)?$">
                        <span>
                            Si no conoce las coordenadas de su taller,
                            puede buscar en_
                        </span>
                        <Link to='https://maps.google.com' target='_blank'>
                            google maps.
                        </Link>
                    </div>
                    {mutation.isPending
                        ?
                        <h4 className='text-center text-success'>
                            Enviando información...
                        </h4> :
                        <div className='d-flex justify-content-center mt-3'>
                            <button className='btn btn-primary' type='submit'>Guardar</button>
                        </div>
                    }
                </div>
            </div>
        </form>
    );
}