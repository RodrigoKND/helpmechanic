import { Link } from "react-router-dom";
import Inputformusuario from "./input/input";

export default function Mecanicoregistro() {
    return (
        <div className="d-flex justify-content-center" style={{marginTop:'100px'}}>
            <div className="card bor" style={{ width: 'max-content' }}>
                <div className="text-center" style={{fontWeight:'500'}}>
                    Formulario de mecánico
                </div>
                <div className='p-1 d-flex justify-content-center'>
                    <Link className='nav-link border border-primary p-2'
                        to={'/login'} 
                        style={{ width: 'max-content', borderRadius: '15px' }}>
                        Ir a formulario de usuario
                    </Link>
                </div>
                <div>
                    <Inputformusuario/>
                </div>
            </div>
        </div>
    );
}