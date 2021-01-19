// Creating a map object
var map = L.map('map').setView([25.79419, -80.28603], 13);

// Creating OSM Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Creating a Layer object

var layertry = L.tileLayer.wms("http://192.168.41.14:8080/geo/Mobolutions/wms", {
    layers: 'ZFUNLOC_GEOMETRY',
    format: 'image/png',
    transparent: true,
    attribution: "Moboloutions Test"
}).addTo(map);


//wms for visualization
//wfs for vector editing
//console.log("the page loaded successfully");