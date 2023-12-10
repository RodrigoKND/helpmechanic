import '../../fonts.css';
import '../../App.css'
import { Link } from 'react-router-dom';
export default function Notfound() {
    return (
        <div className='text-center' style={{ marginTop: '23%' }}>
            <h4 className='fs-4 title'>Not Found</h4>
            <span>Ruta desconocida <label className='fs-3'>👨🏻‍🔧​​</label></span>
            <div><Link to='/'>Ir a inicio</Link></div>
        </div>
    );
}