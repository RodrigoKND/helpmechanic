import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../fonts.css'
import './contain.css'
export default function Bordercontain() {
    const [register, setRegister] = useState(false);
    useEffect(() => {
        const urlGET = 'https://hm-server-provider.onrender.com/'
        fetch(urlGET, {
            method: 'GET',
            cache: 'no-store',
            credentials: 'include'
        })
            .then(resp => resp.json())
            .then(data => data.errorToken ? setRegister(true) : null)
            .catch(err => console.error('Error'))
    }, []);

    const closeSession = (evt) => {
        evt.preventDefault();
        const postSession = 'https://hm-server-provider.onrender.com/sessionClose';
        fetch(postSession, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'close': 'closeclient' }),
            credentials: 'include'
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.eliminado) {
                    setRegister(true);
                }
            })
            .catch(err => console.error('Error'))
    }
    return (
        <div className='mt-5 itemsHome'>
            <div className="d-flex justify-content-center">
                <h4 className='title text-center p-3 titleApp text-primary bg-white' style={{borderRadius:'20px'}}
                    onContextMenu={evt => evt.preventDefault()}>
                    HELPMECHANIC
                </h4>
            </div>
            <div className='d-flex justify-content-center' onContextMenu={evt => evt.preventDefault()}>
                {register ?
                    <Link className='nav-link buttonLogin textContain fs-4 bg-danger' to='/login'>
                        Registrarse
                    </Link>
                    :
                    <form onSubmit={closeSession}>
                        <button className="btn btn-danger fs-3" type="submit">
                            Cerrar registro
                        </button>
                    </form>
                }
            </div>
        </div >
    );
}