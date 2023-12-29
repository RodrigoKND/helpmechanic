import { useState } from 'react';
import { Link } from 'react-router-dom';

import LoginGoogle from './loginGoogle/loginGoogle';

import SvgIcon from '../svglogin/svg';
import '../login.css'

export default function LoginUser() {
    // const [message, setMessage] = useState();
    const [check, setCheck] = useState();
    const verifiedCheck = e => {
        return e.target.checked ? setCheck('Iagree') : setCheck('isEmpty');
    }
    return (
        <>
            <SvgIcon></SvgIcon>
            <div className='mt-2 text-center'>
                <input type='checkbox' className='me-2' onChange={verifiedCheck}
                    value={check} style={{ width: '20px', height: '20px' }} />
                <Link to='/privacidad'>Aceptar los terminos y condiciones</Link>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <LoginGoogle checkValue={check}></LoginGoogle>
            </div>
        </>
    );
}