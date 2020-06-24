const name = 'Casa';
const lat_center = 38.747949;
const lat  = lat_center; 
let lon = -9.5;

const outdoorsLayer = 'https://api.mapbox.com/styles/v1/fmacedo/ckav8wl1b49vp1insfxcaywrn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZm1hY2VkbyIsImEiOiJjanp0a3FlZzEwNXdyM2hteDRmOTNsZDI3In0.UMzEBHFVDraOT5AkHcbe7A'
const cleanLayer =  'https://api.mapbox.com/styles/v1/fmacedo/ckbqqus340zmx1iofik9n2cpr/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZm1hY2VkbyIsImEiOiJjanp0a3FlZzEwNXdyM2hteDRmOTNsZDI3In0.UMzEBHFVDraOT5AkHcbe7A'
const satelliteLayer = 'https://api.mapbox.com/styles/v1/fmacedo/ckbs7w3wv3uoj1it9olubmfig/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZm1hY2VkbyIsImEiOiJjanp0a3FlZzEwNXdyM2hteDRmOTNsZDI3In0.UMzEBHFVDraOT5AkHcbe7A'
function createIcon() {
  const icon = L.divIcon({
    className: `map-icon`,
    html: `<div class="label">${name}</div>`
  });
  return icon;
}


var map = L.map("mainMap", {
  zoomSnap: 0.1,
  minZoom: 6.6,
  zoomControl: false,
  attributionControl: false
}).setView([40.561123, -7.690259], 15);
L.tileLayer(
  satelliteLayer,
  {
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoiZm1hY2VkbyIsImEiOiJjanp0a3FlZzEwNXdyM2hteDRmOTNsZDI3In0.UMzEBHFVDraOT5AkHcbe7A",
  }
).addTo(map);

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);
// $.getJSON("shapes/first.geoJson",function(data){
// // L.geoJson function is used to parse geojson file and load on to map
// L.geoJson(data).addTo(map);
// });
// L.geoJson('shapes/first.geoJson').addTo(map);

L.geoJson(farm).addTo(map);

var marker = L.marker([40.560308, -7.691577], {icon: createIcon()}).addTo(map);
