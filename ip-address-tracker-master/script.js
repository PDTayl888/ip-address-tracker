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

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
    const IP = searchInput.value;

    console.log("SEARCH BUTTON CLICKED - " + IP);
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_KP6w8IL9oQP8yZacXg4P6tHyVCD4y&ipAddress=${IP}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("FETCH TEST", data);
    })
})