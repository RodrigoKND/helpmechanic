import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

import SvgIcon from '../svglogin/svg';
import { AuthUser } from '../../context/context-registerUser/accessUser';

export default function Loguser() {
    /*
        -- Poner un boton con la imagen del usuario para cerrar session
    */
    const [check, setCheck] = useState();
    const [message, setMessage] = useState();
    const verifiedCheck = e => {
        return e.target.checked ? setCheck('Iagree') : setCheck('isEmpty');
    }
    const decodeResponse = (data) => {
        let tokens = data.split('.');
        return JSON.parse(atob(tokens[1]));
    }

    // const modeProd = 'https://hm-server-provider.onrender.com/newUser'
    const modeDev = 'http://localhost:3001/newUser'
    const {setisAuth, setgetImage} = useContext(AuthUser);

    return (
        <>
            <div className='mt-4'>
                <div className='text-center'>
                    <h2>Bienvenido a</h2>
                    <h4 className='text-primary'>Helpmechanic</h4>
                    {message ?
                        <div className='bg-danger p-2 mt-2 text-white'>{message}</div>
                        : null
                    }
                </div>
                <SvgIcon></SvgIcon>
            </div>
            <div className='mt-2 text-center'>
                <input type='checkbox' className='me-2' onChange={verifiedCheck}
                    style={{ width: '20px', height: '20px' }} />
                <Link to='/privacidad'>Aceptar los terminos y condiciones</Link>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <GoogleOAuthProvider
                    clientId='14303105359-73c365kj22pak6nvsnrnfmldq8tv7pkc.apps.googleusercontent.com'>
                    <GoogleLogin
                        onSuccess={response => {
                            const responseDecoded = decodeResponse(response.credential);
                            if (responseDecoded.email_verified === true) {
                                fetch(modeDev, {
                                    method: 'POST',
                                    cache: 'no-store',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        name: responseDecoded.name,
                                        email: responseDecoded.email,
                                        agree: check
                                    })
                                })
                                    .then(resp => resp.json())
                                    .then(data => {
                                        if (data.ok) {
                                            window.location.href = '/#/Listamecanicos';
                                            localStorage.setItem('user', JSON.stringify(data.user));
                                            setisAuth(true);
                                            setgetImage(responseDecoded.picture);
                                        } else if (data.message) setMessage(data.message);
                                    })
                                    .catch(err => console.error(err))
                            } else {
                                <div className='mt-4 bg-danger text-white'>
                                    Cuenta no autenticada
                                </div>
                            }
                        }
                        }
                        onError={() => {
                            <div className='mt-4 bg-danger text-white'>
                                El registro tuvo una falla, vuelva a intentarlo
                            </div>
                        }}
                    ></GoogleLogin>
                </GoogleOAuthProvider>
            </div>
        </>
    );
}