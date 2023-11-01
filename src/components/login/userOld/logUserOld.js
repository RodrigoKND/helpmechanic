import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import SvgIcon from '../svglogin/svg';

export default function Loguser() {
    /*
        Guardar el correo, nombre de usuario, name y el picture
        -- Verificar si lo que esta en el localStorage, coincide con el server
        -- Agregar eso en un context
        -- Poner un boton con la imagen del usuario para cerrar session
    */
    const [check, setCheck] = useState();
    const [message, setMessage] = useState();
    const [fields, setFields] = useState({
        name: '',
        email: '',
        agree: ''
    })
    const verifiedCheck = e => {
        return e.target.checked ? setCheck('Iagree') : setCheck('isEmpty');
    }
    const decodeResponse = (data) => {
        let tokens = data.split('.');
        return JSON.parse(atob(tokens[1]));
    }

    const sendData = () => {
        fetch('https://hm-server-provider.onrender.com/newUser', {
            method: 'POST',
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.parse({fields})
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.ok) {
                    window.location.href = '/#/Listamecanicos';
                    localStorage.setItem('user', data.user);
                } else if (data.message) setMessage(data.message)
            })
            .catch(err => console.error(err))
    }
    return (
        <>
            <div className='mt-4'>
                <div className='text-center'>
                    <h2>Bienvenido a</h2>
                    <h4 className='text-primary'>Helpmechanic</h4>
                    {message ?
                        <div className='bg-danger p-2 mt-2'>{message}</div>
                        : null
                    }
                </div>
                <SvgIcon></SvgIcon>
            </div>
            <div className='d-flex justify-content-center'>
                <GoogleOAuthProvider
                    clientId='14303105359-73c365kj22pak6nvsnrnfmldq8tv7pkc.apps.googleusercontent.com'>
                    <GoogleLogin
                        onSuccess={response => {
                            const responseDecoded = decodeResponse(response.credential);
                            responseDecoded.email_verified === true
                                ?
                                <form onSubmit={sendData}>
                                    <input type='text' name='name' value={setFields({name: response.name})} />
                                    <input type='text' name='email' value={setFields({email:responseDecoded.email})} />
                                    <input type='text' name='agree' value={setFields({agree:check})} />

                                    {window.localStorage.setItem('picture', response.picture)}
                                </form>

                                :
                                <div className='mt-4 bg-danger'>No se pudo vericar su cuenta de Google</div>

                        }}
                        onError={() => {
                            <div className='mt-4 bg-danger'>El registro tuvo una falla, vuelva a intentarlo</div>
                        }}
                    ></GoogleLogin>
                </GoogleOAuthProvider>
            </div>
            <div className='mt-4 text-center'>
                <input type='checkbox' className='me-2' onChange={verifiedCheck}
                    style={{ width: '20px', height: '20px' }} />
                <Link to='/privacidad'>Aceptar los terminos y condiciones</Link>
            </div>
        </>
    );
}