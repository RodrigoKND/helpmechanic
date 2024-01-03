import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthUser } from '../../../context/context-registerUser/accessUser';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

import { fetchPost } from '../../../fetch/fetchPost/fetchPost';
import { ToastContainer, toast } from 'react-toastify';

export default function LoginGoogle({ checkValue }) {
    const { setisAuth } = useContext(AuthUser);
    const [errorMessageComponent, setErrorMessageComponent] = useState(null);
    const decodeResponse = (data) => {
        let tokens = data.split('.');
        return JSON.parse(atob(tokens[1]));
    }
    return (
        <>
            {errorMessageComponent}
            <GoogleOAuthProvider
                clientId='14303105359-73c365kj22pak6nvsnrnfmldq8tv7pkc.apps.googleusercontent.com'>
                <GoogleLogin
                    onSuccess={(response) => {
                        const responseDecoded = decodeResponse(response.credential);
                        if (responseDecoded.email_verified) {
                            const propertiesToSend = {
                                name: responseDecoded.name,
                                email: responseDecoded.email,
                                agree: checkValue
                            }
                            const getData = fetchPost('newUser', propertiesToSend);
                            getData.then(data => {
                                if (data.ok) {
                                    localStorage.setItem('user', getData.user);
                                    setisAuth(true);
                                    <Navigate to='/Listamecanicos'></Navigate>
                                } else if (data.message) {
                                    toast(data.message, { type: 'error' });
                                    setErrorMessageComponent(
                                        <ToastContainer theme='colored'></ToastContainer>
                                    );
                                }
                            })
                        } else {
                            toast('Cuenta no autenticada', { type: 'error' });
                            setErrorMessageComponent(
                                <div className='mt-4'>
                                    <ToastContainer theme='colored'></ToastContainer>
                                </div>
                            );
                        }
                    }
                    }
                    onError={() => {
                        toast('El registro tuvo una falla, vuelva a intentarlo', { type: 'error' });
                        setErrorMessageComponent(
                            <div className='mt-4'>
                                <ToastContainer theme='colored'></ToastContainer>
                            </div>
                        );
                    }}
                ></GoogleLogin >
            </GoogleOAuthProvider >
        </>
    );
}