const d =  document,
n = navigator;

export default function getGeolocation (id) {
    const $id = d.getElementById(id),
    options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    const success = (position) => {
        let coords = position.coords;
        console.log(position);

        $id.innerHTML = `
        <p>Tu posicion actual es:</p>
        <ul>
         <li>latitud: <b>${coords.latitude}</b></li>
         <li>longitud: <b>${coords.longitude}</b></li>
         <li>lPrecision: <b>${coords.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude}, 22z" target="_blank" rel="noopener">Ver Mapa</a>`;
    };
 
    const error = (err) => {
        console.log(err);
    };

    n.geolocation.getCurrentPosition(success, error, options);
}