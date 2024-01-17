import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Cardlist from './card';
import RenderImages from '../renderImages/renderImages';
import { fetchGet } from '../fetch/fetchGet/fetchGet';

import './mechanicList.css';
export default function MechanicList() {
    const queryMechanics = useQuery({
        queryKey: ['mechanicsInTheArea'],
        queryFn: () => fetchGet('Listamecanicos'),
        retry: 5
    });
    localStorage.removeItem('lat');
    localStorage.removeItem('long');
    const combinedData = queryMechanics.data?.selListmechanic.map((register) => {
        const secondTable = queryMechanics.data?.selSecondListmechanic.find(idSecond => {
            return idSecond.idInfo === register.idMechanic
        })
        return { ...register, ...secondTable };
    });
    const getLocation = () => {
        return new Promise((res, rej) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    res({
                        lat: pos.coords.latitude,
                        long: pos.coords.longitude
                    })
                    sessionStorage.setItem('latU', pos.coords.latitude);
                    sessionStorage.setItem('longU', pos.coords.longitude);
                }, () => rej('Existió un error al obtener su ubicación'))
            }
        })
    };

    const fetchAdressUser = async () => {
        const allowLocation = await getLocation();
        const url = `https://nominatim.openstreetmap.org/reverse.php?lat=${allowLocation.lat}&lon=${allowLocation.long}&format=jsonv2`;
        const res = await fetch(url);
        return await res.json();
    }
    const queryLocationUser = useQuery(
        {
            queryKey: ['locationUser'],
            queryFn: () => fetchAdressUser()
        }
    );
    const localLocation = (lat, long) => {
        localStorage.removeItem('rvpru');
        localStorage.setItem('lat', lat);
        localStorage.setItem('long', long);
    }

    return (
        <main>
            <div className='row'>
                <div className='col-md-2'>
                    <div className='d-flex justify-content-center'>
                        <button type='button' className='btn btn-success' onClick={fetchAdressUser} style={{ marginTop: '10vh' }}>
                            Ver lista de mecánicos
                        </button>
                    </div>
                </div>
                <div className='col-md-10 row'>
                    {queryMechanics.isLoading &&
                        <h4 className='text-center text-success' style={{marginTop:'13vh'}}>
                            Cargando lista de mecánicos...
                        </h4>
                    }
                    {queryMechanics.error &&
                        <h4 className='text-center text-danger'>
                            No se pudo obtener la lista de mecánicos...
                            reintentelo de nuevo
                        </h4>
                    }
                    {queryLocationUser.error &&
                        <h4 className='text-center text-danger'>
                            Verifique si la ubicación del navegador este activada
                        </h4>
                    }
                    {
                        combinedData?.length === 0
                            ?
                            <>
                                <div className='d-flex justify-content-center mt-5 ms-4 notFound'>
                                    <RenderImages
                                        classImg={'notFound__img'}
                                        pathImage={'/llave.png'}
                                        altImage={'No se encontraron mecánicos cerca'}>
                                    </RenderImages>
                                </div>
                                <h4 className='text-center ms-4 text-secondary'>
                                    No se encontraron mecánicos, cerca de su ubicación...
                                    <p className='mt-4 text-primary'>Estamos trabajando en ello. 💪</p>
                                    <Link to='/' className='text-secondary'>Regresar</Link>
                                </h4>
                            </>
                            : null
                    }
                    {combinedData?.map((value) => {
                        if (value.state === queryLocationUser.data?.address?.state) {
                            return <Cardlist
                                key={value.idInfo}
                                name={value.name}
                                urlWorkshop={value.urlWorkshop}
                                address={value.address}
                                hasCar={value.hasCar}
                                phone={value.phone}
                                country={value.country}
                                state={value.state}
                                startday={value.startday}
                                endday={value.endday}
                                starttime={value.starttime}
                                endtime={value.endtime}
                                yearExperience={value.yearExperience}
                            >
                                <Link to='/map' className='btn btn-primary' onClick={localLocation(value.latitude, value.longitude)}>
                                    <i className="bi bi-geo-alt me-2"></i>
                                    Ubicación
                                </Link>
                            </Cardlist>
                        } else if (sessionStorage.getItem('latU') && sessionStorage.getItem('longU')) {
                            return <Cardlist
                                key={value.idMechanic}
                                name={value.name}
                                urlWorkshop={value.urlWorkshop}
                                address={value.address}
                                hasCar={value.hasCar}
                                phone={value.phone}
                                country={value.country}
                                state={value.state}
                                startday={value.startday}
                                endday={value.endday}
                                starttime={value.starttime}
                                endtime={value.endtime}
                                yearExperience={value.yearExperience}
                            >
                                <Link to='/map' className='btn btn-primary' onClick={localLocation(value.latitude, value.longitude)}>
                                    <i className="bi bi-geo-alt me-2"></i>
                                    Ubicación
                                </Link>
                            </Cardlist>
                        }
                    })}
                </div>
            </div>
        </main>
    );
}