function test() {
    console.log("65465465465465465465465465465");
    console.log("THIS TOOOOOOOO");
}

test();

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.505, -0.09]).addTo(map);

var myIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize: [46, 56], 
    iconAnchor: [23, 56], 
});

marker.setIcon(myIcon);