import { Link } from "react-router-dom";
import '../../fonts.css'
import './contain.css'
export default function Bordercontain() {
    return (
        <div className='mt-5 itemsHome'>
            <div className="d-flex justify-content-center">
                <h4 className='title text-center p-3 titleApp text-primary bg-white' style={{ borderRadius: '20px' }}
                    onContextMenu={evt => evt.preventDefault()}>
                    HELPMECHANIC
                </h4>
            </div>
            <div className='d-flex justify-content-center' onContextMenu={evt => evt.preventDefault()}>
                <Link className='nav-link buttonLogin textContain fs-4 bg-primary' to='/login'>
                    Registrarse
                </Link>
            </div>
        </div >
    );
}