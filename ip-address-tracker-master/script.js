function test() {
    console.log("65465465465465465465465465465");
    console.log("THIS TOOOOOOOO");
}

test();

var map = L.map('map', {zoomControl: false}).setView([51.505, -0.09], 13);

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

function updateUI(searchInput = '') {
    const IP = searchInput;
    console.log("ip Ip " + IP);

    console.log("SEARCH BUTTON CLICKED - " + IP);
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_KP6w8IL9oQP8yZacXg4P6tHyVCD4y&ipAddress=${IP}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log("FETCH TEST", data.location);
        document.getElementById('ip-display').innerText = data.ip;
        document.getElementById('location-display').innerText = `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`;
        document.getElementById('timezone-display').innerText = `UTC ${data.location.timezone}`;
        document.getElementById('isp-display').innerText = data.isp;

        map.setView([data.location.lat, data.location.lng], 13);
        marker.setLatLng([data.location.lat, data.location.lng]);


    })
    .catch(error => console.error("ENTER IP ADDRESS"));
};

// FORM VALIDATION //

const ipForm = document.getElementById('ip-form');
const errorOverlay = document.getElementById('error-overlay');


searchInput.addEventListener('input', () => {
  errorOverlay.classList.add('hidden');
});

function isValidIP(ip) {
  const pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return pattern.test(ip);
}

ipForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTTTTTTTEEEEDDDDDDD");

    const data = new FormData(e.target);
    const ipInput = data.get('ip-input').trim();
    if (isValidIP(ipInput)) {
        updateUI(ipInput);
    } else {
        errorOverlay.classList.remove('hidden');
    }
});

updateUI();