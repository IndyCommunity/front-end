var heatmapData = [
  new google.maps.LatLng(39.7684, -86.1581),
  new google.maps.LatLng(39.7434, -86.1920),
  new google.maps.LatLng(39.7534, -86.1774),
  new google.maps.LatLng(39.7846, -86.1283),
  new google.maps.LatLng(39.7823, -86.1278),
  new google.maps.LatLng(39.7430, -86.1349),
  new google.maps.LatLng(39.7489, -86.1278),
  new google.maps.LatLng(39.7555, -86.1839),
  new google.maps.LatLng(39.7539, -86.1276),
  new google.maps.LatLng(39.7893, -86.1362),
];

var indianapolis = new google.maps.LatLng(39.7684, -86.1581);

map = new google.maps.Map(document.getElementById('map-container'), {
  center: indianapolis,
  zoom: 12,
  mapTypeId: 'satellite'
});

var heatmap = new google.maps.visualization.HeatmapLayer({
  data: heatmapData
});
heatmap.setMap(map);
var image = 'http://www.googlemapsmarkers.com/v1/CA2776/'
/*
if(factory){var image ='http://www.googlemapsmarkers.com/v1/275DCA/'}
else if(){var image = 'http://www.googlemapsmarkers.com/v1/CA2776/'}
else if(){var image = 'http://www.googlemapsmarkers.com/v1/FBF41C/'}
else if(){var image = 'http://www.googlemapsmarkers.com/v1/FB9C1C/'}
else if(){var image = 'http://www.googlemapsmarkers.com/v1/1CFBD2/'}
else if(){var image = 'http://www.googlemapsmarkers.com/v1/1CFB66/'}
else if(){var image = 'http://www.googlemapsmarkers.com/v1/1C63FB/'}
else if(){var image = 'http://www.googlemapsmarkers.com/v1/811CFB/'}
*/
var marker = new google.maps.Marker({
    position: {lat: 39.7684, lng: -86.1581},
    map: map,
    icon: image,
    title: 'Point 1'
});

