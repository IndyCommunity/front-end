let arr = []
let markers = []
let shapes = []
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
  data: heatmapData,
  opacity: 0.6,
  maxIntensity: 10,
});
heatmap.setMap(map);


function makeMarker(a1){
  var marker = new google.maps.Marker({
    position: {lat: parseFloat(a1.lat), lng: parseFloat(a1.long)},
    map: map,
    icon: image,
    title: 'Point'
  });
  return marker
}

  function updateMarkers(arr1){
    deleteMarkers(markers)
    for(let i=0;i<arr1.length;i++){
      const m = makeMarker(arr1[i])
      markers.push(m)
    }
  }

  function updateDropDown(text) {
    const dropDown = document.querySelector('#menu1');
    dropDown.textContent = text;
  }

  function liCLick(e){
    updateDropDown(e.target.textContent);

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
    updateMarkers(arrLI)
  }

  function hiCLick(e){
    updateDropDown(e.target.textContent);

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
    updateMarkers(arrHI)
  }

  function ccCLick(e){
    updateDropDown(e.target.textContent);

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
    updateMarkers(arrCC)
  }

  function hcCLick(e){
    updateDropDown(e.target.textContent);

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
    updateMarkers(arrHC)
  }

  function powCLick(e){
    updateDropDown(e.target.textContent);

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
    updateMarkers(arrPoW)
  }

  function oCLick(e){
    updateDropDown(e.target.textContent);

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
    updateMarkers(arrOffices)
  }
  function setMapOnAll(map,arr1) {
    
  }
  function deleteMarkers(arr1) {
    for (var i = 0; i < arr1.length; i++) {
      arr1[i].setMap(null);
    }
    arr1 = []
  }

function maximize(){
  //shapes[0].setMap(null);
  //shapes = []
  $.ajax({
        type: "GET",
        dataType: "json",
        async: false,
        url: 'http://www.indy.science/api/geoJson',
        success: function (data) {
          const s = map.data.loadGeoJson('data');
          //shapes.push(s)
        }
      })
}

const liButton = document.querySelector('#liClick')
liButton.addEventListener('click',liCLick)
const hiButton = document.querySelector('#hiClick')
hiButton.addEventListener('click',hiCLick)
const ccButton = document.querySelector('#ccClick')
ccButton.addEventListener('click',ccCLick)
const hcButton = document.querySelector('#hcClick')
hcButton.addEventListener('click',hcCLick)
const powButton = document.querySelector('#powClick')
powButton.addEventListener('click',powCLick)
const oButton = document.querySelector('#oClick')
oButton.addEventListener('click',oCLick)

const max = document.querySelector('#max')
max.addEventListener('click',maximize)
