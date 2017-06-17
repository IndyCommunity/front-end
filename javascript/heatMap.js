const tableData = {
  lat:39.7684,
  long:-86.1581
}
const busiData = {
  type: 1,
  pic: 'http://www.googlemapsmarkers.com/v1/275DCA/',
  lat:39.7684,
  long:-86.1581
}

var heatmapData = [];

for(let i=0;i<3000;i++){
  tableData.long+=0.0001
  tableData.lat+=0.0001
  heatmapData.push(new google.maps.LatLng(tableData.lat, tableData.long))
}


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
for(let i=0;i<3000;i++){
  var marker = new google.maps.Marker({
    position: {lat: busiData.lat, lng: busiData.long},
    map: map,
    icon: busiData.pic,
    title: 'Point '+i
  });
}

