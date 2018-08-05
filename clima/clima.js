const axios = require('axios');

const getClima = async(lat, lng) => {

    let apiKey = '5a5ee9ec90c9fa562d789269b470048d';
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`);

    if (resp.message === 'null is not a float') {
        throw new Error('No se encontro la Ubicacion');
    }
    return resp.data.main.temp
}

module.exports = {
    getClima
}