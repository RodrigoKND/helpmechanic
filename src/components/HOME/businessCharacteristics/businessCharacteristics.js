import './businessCharacteristics.css';

export default function BusinessCharacteristics() {
    return (
        <>
            <div className='col-md-4 card border border-light' style={{ background: '#161616' }}>
                <div className='card-body text-center text-info'>
                    <span className="material-symbols-outlined mt-3" style={{ fontSize: '50px' }}>
                        minor_crash
                    </span>
                    <pre className='card__title'>INSPECCIÓN</pre>
                </div>
            </div>
            <div className='col-md-4 card border border-light' style={{ background: '#161616' }}>
                <div className='card-body text-center text-info'>
                    <span className="material-symbols-outlined mt-3" style={{ fontSize: '50px' }}>
                        two_wheeler
                    </span>
                    <pre className='card__title'>DIAGNÓSTICO</pre>
                </div>
            </div>
            <div className='col-md-4 card border border-light' style={{ background: '#161616' }}>
                <div className='card-body text-center text-info'>
                    <span className="material-symbols-outlined mt-3" style={{ fontSize: '50px' }}>
                        home_repair_service
                    </span>
                    <pre className='card__title'>INFORMACIÓN</pre>
                </div>
            </div>
        </>
    );
}