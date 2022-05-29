export default function coordinatesUtils () {
    let coordinates;
    navigator.geolocation.getCurrentPosition((position) => coordinates = position.coords);
    console.log(coordinates.latitude)
    return coordinates;
}