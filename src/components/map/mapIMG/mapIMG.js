import L from 'leaflet';
import '../location.css';

const iconUser = L.divIcon({className: 'iconcss'});
const iconworkshop = L.divIcon({className: 'iconwork'});

const initializeMap = (L, lat, long) => {
    const map = L.map('map').setView([lat, long], 13);

    const tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([lat, long], { icon: iconUser }).addTo(map)
    .bindPopup('<b>Tu ubicación</b>').openPopup();
    return { map, tileLayer };
}

const markerBusiness = (L, lat, long) => {
    const marker = L.marker([lat, long], {icon: iconworkshop});

    return marker;
}

const optionsMap = {
    enableHighAccuracy: true,
    timeout: 100,
    maximumAge: 0,
}

const getAddress = () => {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition((pos) => {
            res({
                lat: pos.coords.latitude,
                long: pos.coords.longitude,
            });
        }, () => {
            rej('No se pudo obtener el mapa');
        }, optionsMap)
    })
}

export {
    initializeMap,
    getAddress,
    markerBusiness
}
