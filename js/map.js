
// ********************* INITIALIZE MAP *************************************
var map = L.map('map').setView([7.099, -1.000], 7);



// ********************* OSM BASEMAP *************************************

osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// ********************* googleHybrid BASEMAP *************************************
googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
})

// ********************* googleStreets BASEMAP *************************************
googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
})


// ********************* googleSat BASEMAP *************************************
googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

// ********************* googleTerrain BASEMAP *************************************
googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

// ********************* OpenTopoMap BASEMAP *************************************
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// ********************* ADD MAKER TO MAP *************************************
var marker = L.marker([6, -1.000]).addTo(map);




// ********************* LIST OF BASEMAPS   *************************************
var baseMaps = {
        "OpenStreetMap": osm,
        "googleHybrid": googleHybrid,
        "googleStreets": googleStreets,
        "googleSat": googleSat,
        "googleTerrain": googleTerrain,
        "OpenTopoMap":OpenTopoMap

};


// *********************  OVERLAY LAYERS *************************************
var overlayMaps = {
    "Cities": marker
};

// ********************* INITIALIZE MAP CONTROL LAYERS *************************************
var layerControl = L.control.layers(baseMaps,overlayMaps).addTo(map);



