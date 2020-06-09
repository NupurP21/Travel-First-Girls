// Initialize and add the map
function initMap() {
    // The location of different places
    var South_Korea = {lat: 36.5581914, lng: 127.9408564};
    var New_Zealand = {lat: -41.5000831, lng: 172.8344077};
    var South_Africa = {lat: -28.8166236, lng: 24.991639};
    var Chile = {lat: -31.7613365, lng: -71.3187697};
    
    // The map, centered at World
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 1, center:new google.maps.LatLng(-9.9999999,69.9999999)});
    // The marker, positioned on the places
    var marker = new google.maps.Marker({position: South_Korea, map: map});
    var marker = new google.maps.Marker({position: New_Zealand, map: map});
    var marker = new google.maps.Marker({position: South_Africa, map: map});
    var marker = new google.maps.Marker({position: Chile, map: map});
  }