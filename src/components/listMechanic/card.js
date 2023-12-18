import './listamecanicos.css'

export default function Cardlist({ 
    name, urlWorkshop, address, 
    hasCar, phone, country, 
    state, startday,
    endday,starttime,endtime,
    yearExperience, children }) {
    return (
        <div className='card border border-0' data-experience={yearExperience}
            style={{ height: '20%', width: '20rem', maxWidth: '30rem', maxHeight: '20%', marginTop: '90px' }}>
            <img src={urlWorkshop} alt='taller' className='card-img-top sizeIMG' />
            <div className='card-body border'>
                <b title='propietario'>Jefe: </b><label>{name}</label>
                <div>
                    <b>Dirección: </b>
                    {address}
                </div>
                <hr></hr>
                <div className='text-center text-success' style={{ fontWeight: '500' }}>
                    <i className="bi bi-phone me-2"></i>
                    {phone}
                </div>
                <hr></hr>
                <div className='mt-2'>
                    <div className='pais'>
                        <b>Pais: </b>
                        <label>{country}</label>
                    </div>
                    <div>
                        <b>Ciudad: </b>
                        <label>{state}</label>
                    </div>
                    <div>
                        <b>Cuenta con movilidad: </b>
                        {
                            hasCar === 'yes' ? <span className='text-primary'>Si</span> :
                                hasCar === 'no' ? <span className='text-danger'>No</span> : null
                        }
                    </div>
                    <div>
                        <b>Dias laborales: </b>
                        <label>{startday} a {endday}</label>
                        <div>
                            <b>Horas laborales: {starttime} a {endtime}</b>
                        </div>
                    </div>
                    <div className='text-success text-center'>
                        <b>Experiencia: </b>
                        {
                            yearExperience === '1' ? <span>1-3 años</span> :
                                yearExperience === '2' ? <span>4-6 años</span> :
                                    yearExperience === '3' ? <span>7-más años</span> : null
                        }
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    {children}
                </div>
            </div>
        </div>
    );
}