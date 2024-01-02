import {Link} from 'react-router-dom';

import './businessCharacteristics.css';

export default function BusinessCharacteristics() {
    return (
        <>
            <div className='col-md-4 card border border-light' style={{ background: '#161616' }}>
                <Link className='card-body text-center text-info' to='/calidad'>
                    <span className="material-symbols-outlined mt-3" style={{ fontSize: '50px' }}>
                        minor_crash
                    </span>
                    <pre className='card__title'>INSPECCIÓN</pre>
                </Link>
            </div>
            <div className='col-md-4 card border border-light' style={{ background: '#161616' }}>
                <Link className='card-body text-center text-info' to='/calidad'>
                    <span className="material-symbols-outlined mt-3" style={{ fontSize: '50px' }}>
                        two_wheeler
                    </span>
                    <pre className='card__title'>DIAGNÓSTICO</pre>
                </Link>
            </div>
            <div className='col-md-4 card border border-light' style={{ background: '#161616' }}>
                <Link className='card-body text-center text-info' to='/blogHelpMechanic'>
                    <span className="material-symbols-outlined mt-3" style={{ fontSize: '50px' }}>
                        home_repair_service
                    </span>
                    <pre className='card__title'>INFORMACIÓN</pre>
                </Link>
            </div>
        </>
    );
}