var map;
var plane;

export function load_map() {
    map = L.map('map').setView([59.34973, 16.70488], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var planeIcon = L.icon({
        iconUrl: 'airplane.png',

        iconSize: [50, 50], // size of the icon
        iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
        popupAnchor: [0, 25] // point from which the popup should open relative to the iconAnchor
    });

    plane = L.marker([59.34973, 16.70488], { icon: planeIcon, rotationAngle: 45 }).addTo(map);

    var polygon = L.polygon([
        [59.33973, 16.65488],
        [59.32973, 16.80488],
        [59.36973, 16.80488],
        [59.37973, 16.65488],
    ], {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.01,
    }).addTo(map);

    return "";
}

export function update_position(lat, long) {
    var latLng = new L.LatLng(lat, long);
    plane.setLatLng(latLng);
}