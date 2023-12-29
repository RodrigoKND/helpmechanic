import React, { useEffect, useState } from 'react';

import L from 'leaflet';
import 'leaflet/dist/leaflet.js';

import { initializeMap, getAddress, markerBusiness } from './mapIMG/mapIMG.js';
import {fetchGet} from '../fetch/fetchGet/fetchGet';

import './location.css';
import 'leaflet/dist/leaflet.css';

export default function Mylocation() {
    const [register, setRegister] = useState(false);

    useEffect(() => {
        fetchGet('map')
            .then(data => {
                if (data.errorToken) setRegister(true);
            })
    }, []);

    const [messageLoaded, setMessage] = useState(false);
    const [errorMessage, setErrormessage] = useState('');
    const getItem = () => {
        const lati = localStorage.getItem('lat');
        const longi = localStorage.getItem('long');
        if (!(lati && longi)) {
            return;
        } else {
            return { lati, longi };
        }
    }
    useEffect(() => {
        getAddress()
            .then(data => {
                const { lat, long } = data;
                let { map, tileLayer } = initializeMap(L, lat, long);
                tileLayer.on('load', () => setMessage(true))

                const { lati, longi } = getItem();
                markerBusiness(L, lati, longi).addTo(map);
                L.polyline([[lat, long], [lati, longi]], { color: 'purple' }).addTo(map);
                tileLayer.addTo(map);
            })
            .catch((err) => {
                if (err === undefined) {
                    setErrormessage('No se pudo renderizar el mapa, intentelo nuevamente.');
                } else setErrormessage(err.message);
            })
    }, [messageLoaded]);

    return (
        <>
            {
                errorMessage === 'Map container is already initialized'
                    ? (
                        <h4 className='text-center text-danger'>
                            No se pudo renderizar el mapa, inténtelo nuevamente.
                        </h4>

                    ) :
                    <h4 className='text-center'>Bienvenido</h4>
            }

            {
                errorMessage === 'No se pudo renderizar el mapa, intentelo nuevamente.'
                    ?
                    <h4 className='text-danger text-center'>{errorMessage}</h4>
                    : ''
            }
            {
                register
                    ?
                    <h4 className='text-center text-danger'>
                        Debe registrarse antes de continuar...
                    </h4>
                    :
                    <div id='map'></div>
            }
        </>
    );

}
