import axios from 'axios';

const geolocationApi = axios.create({
  baseURL: `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyD6rKc6URJVJv5GNgNydJxd19jitau6pg0`,
});

const weatherApi = axios.create({
  baseURL:
    'https://api.openweathermap.org/data/2.5/onecall?lat=40.714224&lon=-73.961452&exclude=minutely,daily&appid=52219e46da1db33cf0ad6c6b4cb4d908',
});
export { geolocationApi, weatherApi };
