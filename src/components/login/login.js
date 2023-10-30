import { Link } from 'react-router-dom'
import './login.css'
import '../../fonts.css'
import Loguser from './userOld/logUserOld';

export default function Login() {
    return (
        <>
            <div className='title fs-3 mb-4 text-center' style={{marginTop:'15vh'}}>FormHelpmechanic</div>
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