import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Loguserold from './userOld/logUserOld';
import Usuarioregistro from './usernew/loginUsuario';
import './login.css'
import '../../fonts.css'

export default function Login() {
    const [link, setLink] = useState(true)
    const linkRef = useRef()
    const handleFocus = () => {
        setLink(false)
    }
    useEffect(() => {
        if (link === false) linkRef.current.style.display = 'none'
    }, [link])

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
                    </div>
                    {link ? <Loguserold /> : <Usuarioregistro />}
                    <Link to={'/usuario'} onFocus={handleFocus} ref={linkRef}>
                        Crear cuenta como usuario
                    </Link>
                </div>
            </div>
        </>
    );
}