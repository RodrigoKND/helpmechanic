import { Link, Navigate } from 'react-router-dom';
import Loguser from './userOld/logUserOld';
import { useContext } from 'react';
import { AuthUser } from '../context/context-registerUser/accessUser';

import './login.css';
import '../../fonts.css';

export default function Login() {
    const {isAuth} = useContext(AuthUser);
    if(isAuth){
        return <Navigate to='/Listamecanicos'/>
    }
    return (
        <>
            <div className='title fs-3 mb-4 text-center' style={{marginTop:'15vh'}}>
                FormHelpmechanic
            </div>
            <div className='d-flex justify-content-center '>
                <div className="bor" style={{ width: '30rem' }}>
                    <div className='mt-2'>
                        <Link className='nav-link border border-primary p-2'
                            to={"/mecanico"}
                            style={{ width: 'max-content', borderRadius: '15px' }}>
                            <b>Ir a formulario de mecánico</b>
                        </Link>
                        <Loguser/>
                    </div>
                </div>
            </div>
        </>
    );
}