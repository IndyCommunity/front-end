let arr = []
$.ajax({
  type: "GET",
  dataType: "json",
  async: false,
  url: 'http://www.indy.science/api/coordsOfCrime',
  success: function (data) {
    arr=data
  }
})


var image='http://www.googlemapsmarkers.com/v1/275DCA/';
/*
let arrOffices = []
$.ajax({
  type: "POST",
  dataType: "json",
  async: false,
  data: {
        "zone": "Office"
    },
  url: 'http://www.indy.science/api/coordsByZone',
  success: function (data) {
    arrOffices=data
    image ='http://www.googlemapsmarkers.com/v1/275DCA/'
  }
})
let arrLI = []
$.ajax({
  type: "POST",
  dataType: "json",
  async: false,
  data: {
        "zone": "Light Industrial"
    },
  url: 'http://www.indy.science/api/coordsByZone',
  success: function (data) {
    arrLI=data
    image = 'http://www.googlemapsmarkers.com/v1/CA2776/'
  }
})

let arrHI = []
$.ajax({
  type: "POST",
  dataType: "json",
  async: false,
  data: {
        "zone": "Heavy Industrial"
    },
  url: 'http://www.indy.science/api/coordsByZone',
  success: function (data) {
    arrHI=data
    image = 'http://www.googlemapsmarkers.com/v1/FBF41C/'
  }
})
let arrCC = []
$.ajax({
  type: "POST",
  dataType: "json",
  async: false,
  data: {
        "zone": "Community Commercial"
    },
  url: 'http://www.indy.science/api/coordsByZone',
  success: function (data) {
    arrCC=data
    image = 'http://www.googlemapsmarkers.com/v1/FB9C1C/'
  }
})
let arrHC = []
$.ajax({
  type: "POST",
  dataType: "json",
  async: false,
  data: {
        "zone": "Heavy Commercial"
    },
  url: 'http://www.indy.science/api/coordsByZone',
  success: function (data) {
    arrHC=data
    image = 'http://www.googlemapsmarkers.com/v1/1CFBD2/'
  }
})

let arrPoW = []
$.ajax({
  type: "POST",
  dataType: "json",
  async: false,
  data: {
        "zone": "Place of Worship"
    },
  url: 'http://www.indy.science/api/coordsByZone',
  success: function (data) {
    arrPoW=data
    image = 'http://www.googlemapsmarkers.com/v1/1CFB66/'
  }
})
*/

var heatmapData = [];

for(let i=0;i<arr.length;i++){
  heatmapData.push(new google.maps.LatLng(arr[i].lat, arr[i].long))
}


var indianapolis = new google.maps.LatLng(39.7684, -86.1581);

map = new google.maps.Map(document.getElementById('map-container'), {
  center: indianapolis,
  zoom: 11,
  mapTypeId: 'satellite'
});

var heatmap = new google.maps.visualization.HeatmapLayer({
  data: heatmapData
});
heatmap.setMap(map);


for(let i=0;i<arrCC.length;i++){
  var marker = new google.maps.Marker({
    position: {lat: parseFloat(arrCC[i].lat), lng: parseFloat(arrCC[i].long)},
    map: map,
    icon: image,
    title: 'Point '+i
  });
  /*
  if(busiData.type<6){busiData.type+=1}
  else {busiData.type=1}
  
  if(busiData.type==1){ image ='http://www.googlemapsmarkers.com/v1/275DCA/'}
  else if(busiData.type==2){ image = 'http://www.googlemapsmarkers.com/v1/CA2776/'}
  else if(busiData.type==3){ image = 'http://www.googlemapsmarkers.com/v1/FBF41C/'}
  else if(busiData.type==4){ image = 'http://www.googlemapsmarkers.com/v1/FB9C1C/'}
  else if(busiData.type==5){ image = 'http://www.googlemapsmarkers.com/v1/1CFBD2/'}
  else if(busiData.type==6){ image = 'http://www.googlemapsmarkers.com/v1/1CFB66/'}
  */
}

