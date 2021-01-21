// Creating Basemap Layers
//Open Street Maps
var osm_layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
});
//Google Maps
var esri_layer = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution: 'Google Road '
});


// Creating a Layer object

var SAP_FUNLOC = L.tileLayer.wms("http://192.168.41.14:8080/geo/Mobolutions/wms", {
    layers: 'ZFUNLOC_GEOMETRY',
    format: 'image/png',
    transparent: true,
    //request=GetCapabilities,
    attribution: "Moboloutions Test"
});


// Creating a map object
var map = L.map('map', {
    center: [25.79419, -80.28603],
    zoom: 13,
    layers: [osm_layer, SAP_FUNLOC, esri_layer]

});

//Creating Objects and Base Layers
var baseMaps = {
    "Open Street Maps": osm_layer,
    "Google Road": esri_layer
};

var HANADB_Dataset = {
    "Functional Locations": SAP_FUNLOC
};

//adding into maps
L.control.layers(baseMaps, HANADB_Dataset).addTo(map);