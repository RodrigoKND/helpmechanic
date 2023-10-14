import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { FieldsInto, useCheckBox } from '../mecanico/input/funcionality';
import '../../login/login.css'

export default function Usuarioregistro() {
    const [fields, handleChange] = FieldsInto();
    const [value, checkBox] = useCheckBox();
    const [message, setMessage] = useState('');
    const [valid, setValid] = useState('');
    useEffect(() => {
        fetch('https://hm-server-provider.onrender.com/login', { method: 'GET', cache: 'no-store', })
            .then(resp => resp.json())
            .then(data => setValid(data.token))
    }, [])

    const formData = new FormData();
    formData.append('uName', fields.name);
    formData.append('uPhone', fields.phone);
    formData.append('uEmail', fields.email);
    formData.append('token', valid);
    formData.append('uPasswd', fields.passwd);
    formData.append('uTerms', fields.terms);

    const sendUser = (evt) => {
        evt.preventDefault();
        const url = 'https://hm-server-provider.onrender.com/newUser'
        fetch(url, {
            method: 'POST',
            body: formData,
            credentials: 'include'
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                if (data.ok === 'correct') {
                    window.location.href = '/#/Listamecanicos'
                } else setMessage(data.message)
            })
            .catch(() => console.error('Error'))
    }

    return (
        <form onSubmit={sendUser}>
            <div>
                <h4 className='text-center text-danger'>{message}</h4>
                <label className='mt-2'>Nombre</label>
                <input type='text' className='form-control mt-3 mb-2' onChange={handleChange}
                    name='name' value={fields.name}></input>
                <label>Teléfono</label>
                <input type='tel' className='form-control mt-3 mb-2' onChange={handleChange}
                    name='phone' value={fields.phone} required></input>
                <label>Correo</label>
                <input type='email' className='form-control mt-3 mb-2' onChange={handleChange}
                    name='email' required value={fields.email}></input>
                <input type='hidden' name='prot' value={valid}></input>
                <label>Contraseña</label>
                <input type='password' className='form-control mt-3 mb-2' onChange={handleChange}
                    name='passwd' value={fields.passwd} required autoComplete='off'></input>
                <input type='checkbox' name='terms' onChange={checkBox} onBlur={handleChange}
                    value={value}></input>

                <label className='text-primary mt-3 ms-2'>
                    <Link to={'/privacidad'}>
                        Acepto los términos y condiciones
                    </Link>
                </label>
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary mb-4 mt-4'>
                    Enviar
                </button>
            </div>
        </form>
    );
}