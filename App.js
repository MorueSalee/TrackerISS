import {Iss} from "./Iss.js";

const iss = new Iss()

let map = L.map('map').setView([51.505, -0.09], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let greenIcon = L.icon({
    iconUrl: 'images/iss.png',

    iconSize:     [100, 100], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

function displayCoor() {
    iss.setCoordonnees().then(() => {
        document.getElementById('mainDiv').innerHTML = ''

        const latDiv = document.createElement('div')
        latDiv.innerText = 'Latitude = ' + iss.latitude

        const longDiv = document.createElement('div')
        longDiv.innerText = 'Longitude = ' + iss.longitude

        document.getElementById('mainDiv').append(latDiv)
        document.getElementById('mainDiv').append(longDiv)

        map.setView([iss.latitude, iss.longitude])
        L.marker([iss.latitude, iss.longitude], {icon: greenIcon}).addTo(map);
    })
}

setInterval(displayCoor, 5000)

