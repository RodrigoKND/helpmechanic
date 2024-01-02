import RenderImages from '../renderImages/renderImages';
import './mechanicList.css';

export default function Cardlist(props) {
    const { name, urlWorkshop, address, hasCar,
        phone, country, state, startday,
        endday, starttime, endtime, yearExperience, children } = props;
    return (
        <article className='card border border-0' data-experience={yearExperience}
            style={{ height: '20%', width: '20rem', maxWidth: '30rem', maxHeight: '20%', marginTop: '50px' }}>
            <RenderImages
                classImg={'card-img-top card__img-size'}
                pathImage={urlWorkshop}
                altImage={'imagen del taller'}
            ></RenderImages>
            <div className='card-body border'>
                <b title='propietario'>Jefe: </b><label>{name}</label>
                <div><b>Dirección: </b> {address} </div>
                <hr />
                <div className='text-center text-success' style={{ fontWeight: '500' }}>
                    <i className="bi bi-phone me-2"></i> {phone}
                </div>
                <hr />
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
                        <div><b>Horas laborales: </b> {starttime.substring(0,5)} a {endtime.substring(0,5)} </div>
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
                <div className='d-flex justify-content-center mt-3'>{children}</div>
            </div>
        </article>
    );
}