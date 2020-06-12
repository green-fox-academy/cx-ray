# CX-Ray
CX-Ray training resources

## Weather App

Create an application that shows the weather in the surrounding 10 kms

- Use the geolocation browser API to determine the location: <https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API>
- Use this API to get the surrounding locations: <http://api.geonames.org/findNearbyPlaceNameJSON?lat=47.5004628&lng=19.082869&username=eggdice&radius=10>
  - documentation: <https://www.geonames.org/export/web-services.html>
- Use this API to get the weather by coordinates: <https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22>
  - documentation: <https://openweathermap.org/current>

The app should show the temperature and the description for each of the surrounding locations

### Search

The app should be able to search for locations and get back to the current location

