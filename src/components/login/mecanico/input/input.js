import { Link } from 'react-router-dom';
import { SelectAnOption, useCheckBox, FieldsInto } from './funcionality.js';
import { useRef, useState, useEffect } from 'react';

export default function Inputformusuario() {
    const [fields, handleChange] = FieldsInto();
    const [value, checkBox] = useCheckBox();
    const [errorMessage, checkValue] = SelectAnOption();
    const [valid, setValid] = useState('');
    const sendBtn = useRef();
    useEffect(() => {
        const urlGET = 'https://hm-server-provider.onrender.com/mecanico';
        fetch(urlGET, { method: 'GET', cache: 'no-store', })
            .then(resp => resp.json())
            .then(data => setValid(data.token))
            .catch(err => console.error('Error'))
    }, []);

    const imgRef = useRef();
    const [message, setMessage] = useState('');

    const submitForm = (evt) => {
        evt.preventDefault();
        sendBtn.current.textContent = 'Enviando...';
        const formData = new FormData();
        formData.append('name', fields.name);
        formData.append('phone', fields.phone);
        formData.append('address', fields.address);
        formData.append('car', fields.check);
        formData.append('experience', fields.selectOption);
        formData.append('workshop', imgRef.current.files[0]);
        formData.append('token', valid);
        formData.append('terms', fields.terms);

        fetch('https://hm-server-provider.onrender.com/registerMechanic', {
            method: 'POST',
            body: formData,
            credentials: 'include'
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.hex) {
                    localStorage.setItem('rvpru', data.hex);
                    window.location.href = '/#/direccionTaller';
                }
                else {
                    setMessage(data.message)
                }
            })
            .catch(err => {
                // console.log(err)
                setMessage('Existió un error al procesar sus datos...intente otra vez')
            })
    }
    return (
        <form onSubmit={submitForm}>
            <h6 className='text-danger text-center mt-2'>{message}</h6>
            <label>Nombre</label>
            <input type='text' className='form-control mt-1 mb-2' name='name'
                onChange={handleChange} value={fields.name} autoComplete='off'></input>
            <label>Celular</label>
            <input type='tel' className='form-control mt-1 mb-2' name='phone'
                placeholder='Número de contacto unico' onChange={handleChange}
                value={fields.phone}></input>
            <label htmlFor='address'>Dirección</label>
            <input type='text' className='form-control mb-2' id='address' onChange={handleChange}
                placeholder='Dirección de su taller' name='address'></input>
            <label>¿Cuenta con su propia movilidad?</label>
            <div className='text-center fs-5 mt-1 mb-3'>
                <input type='radio' name='check' onChange={handleChange} value='yes'></input>
                <label className='me-4'>Si</label>
                <input type='radio' className='ms-4' name='check' onChange={handleChange} value='no'></input>
                <label>No</label>
            </div>
            <div className='mb-4'>
                <label className='me-4'>¿Cuántos años de experiencia tiene?</label>
                <select onBlur={checkValue} onChange={handleChange} name='selectOption'>
                    <option value={'0'}>Opciones...</option>
                    <option value={'1'}>1 - 3</option>
                    <option value={'2'}>4 - 6</option>
                    <option value={'3'}>7 - más</option>
                </select>
                <p className='text-danger'>{errorMessage}</p>
            </div>
            <h6>
                Imagen de su taller
                <input type='file' className='mt-3 ms-2' name='workshop'
                    accept='image/jpg,image/jpeg,image/png' ref={imgRef}></input>
            </h6>
            <div>
                <input type='hidden' value={valid}></input>
                <input type="checkbox" onChange={checkBox} onBlur={handleChange} name="terms" value={value}></input>
                <label className='text-primary mt-3 ms-2'>
                    <Link to='/privacidad'>
                        Acepto los términos y condiciones
                    </Link>
                </label>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary mb-4 mt-4' ref={sendBtn}>
                    Siguiente
                </button>
            </div>
        </form>
    );
}