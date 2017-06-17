const tableData = {
  lat:39.7684,
  long:-86.1581
}
const busiData = {
  type: 1.0,
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
var image='http://www.googlemapsmarkers.com/v1/275DCA/';


for(let i=0;i<3000;i++){
  var marker = new google.maps.Marker({
    position: {lat: busiData.lat, lng: busiData.long},
    map: map,
    icon: image,
    title: 'Point '+i
  });
  if(busiData.type<6){busiData.type+=1}
  else {busiData.type=1}
  
  if(busiData.type==1){ image ='http://www.googlemapsmarkers.com/v1/275DCA/'}
  else if(busiData.type==2){ image = 'http://www.googlemapsmarkers.com/v1/CA2776/'}
  else if(busiData.type==3){ image = 'http://www.googlemapsmarkers.com/v1/FBF41C/'}
  else if(busiData.type==4){ image = 'http://www.googlemapsmarkers.com/v1/FB9C1C/'}
  else if(busiData.type==5){ image = 'http://www.googlemapsmarkers.com/v1/1CFBD2/'}
  else if(busiData.type==6){ image = 'http://www.googlemapsmarkers.com/v1/1CFB66/'}
  
  busiData.long+=0.01
  busiData.lat+=0.01
}

