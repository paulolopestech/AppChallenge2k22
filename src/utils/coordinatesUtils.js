export default function coordinatesUtils () {
    let coordinates;
    navigator.geolocation.getCurrentPosition((position) => coordinates = position.coords);
    return coordinates;
}