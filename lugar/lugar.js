const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encode = encodeURI(direccion)


    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encode}`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let latitud = resp.data.results[0].geometry.location.lat;
    let longitud = resp.data.results[0].geometry.location.lng;

    return {
        location: location.formatted_address,
        latitud: latitud,
        longitud: longitud
    }
}

module.exports = {
    getLugarLatLng,
}