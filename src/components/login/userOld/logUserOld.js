import { useEffect, useState } from 'react';
import { FieldsInto } from '../mecanico/input/funcionality';

export default function Loguserold() {
    const [fields, handleChange] = FieldsInto();
    const [message, setMessage] = useState('');
    const [valid, setValid] = useState('');
    
    useEffect(()=>{
        fetch('http://localhost:3001/login', {method:'GET'})
        .then(resp=>resp.json())
        .then(data=>setValid(data.token))
        .catch(err=>console.error('Error'))
    },[])

    const formData = new FormData();
    formData.append('uEmail', fields.email);
    formData.append('uPasswd', fields.passwd);
    formData.append('token', valid);

    const sendAuth = (evt) => {
        evt.preventDefault();
        const url = 'http://localhost:3001/authuser';
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.ok) {
                    window.location.href = '/Listamecanicos'
                } else {
                    setMessage(data.message)
                }
            }).catch(() => {
                setMessage('Hubo un error al enviar su solicitud...Intentelo nuevamente.')
            })
    }


    return (
        <>
            <form onSubmit={sendAuth}>
                <div className="mt-4">
                    <h6 className="mt-1 text-center text-danger">{message}</h6>
                    <label>Correo</label>
                    <input type='email' className='form-control mt-3 mb-2' 
                        name="email" value={fields.email} onChange={handleChange} autoComplete="off"></input>
                    <label>Contraseña</label>
                    <input type='password' className='form-control mt-3 mb-2' 
                        name="passwd" value={fields.passwd} onChange={handleChange} autoComplete="off"
                    ></input>
                    <input type='hidden' name='prot' value={valid}></input>
                </div>
                <div className='d-flex justify-content-center'>
                    <button type="submit" className='btn btn-primary mb-4 mt-4'>
                        Enviar
                    </button>
                </div>
            </form>
        </>
    );
}