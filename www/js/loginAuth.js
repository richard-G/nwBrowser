var init = function() {
    document.addEventListener("deviceready", onReady, false);
};

onReady = function() {
    setupMap();
}


var setupMap = function() {
    var modalMap = document.getElementById('modalMap');
        signalModal = document.getElementById("signalModal");
        closeMap = document.getElementById("closeMap");
        behindMap = document.getElementById('behindMap');
        behindMap2 = document.getElementById('behindMap2');
        signUpForm = document.getElementById('signUpForm');

    signalModal.onclick = function() {
        modalMap.style.display = "block";
        behindMap.style.opacity = 0.5;
        behindMap2.style.opacity = 0.5;
        signUpForm.style.opacity = 0.5;
    }

    closeMap.onclick = function() {
        modalMap.style.display = "none";
        behindMap.style.opacity = 1;
        behindMap2.style.opacity = 1;
        signUpForm.style.opacity = 1;
    }



}


function showMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter=new google.maps.LatLng(27.7,85.3);
    var mapOptions = {
        center: myCenter, 
        zoom: 12,
        disableDefaultUI: true
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(map, event.latLng);
    });
}

function showMapPE() {
    var mapCanvas = document.getElementById("map");
    var myCenter=new google.maps.LatLng(-12.1,-77.0);
    var mapOptions = {center: myCenter, zoom: 12};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(map, event.latLng);
    });
}

var marker;

function placeMarker(map, location) {
    
    if (marker == null) {
        marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }
    else {
        marker.setPosition(location);
    }
    var infowindow = new google.maps.InfoWindow({
        content: 'Coordinates logged!'
    });
    infowindow.open(map,marker);
    latitudeVal.value = location.lat();
    longitudeVal.value = location.lng();
    signalModal.innerHTML = "Coordinates logged!";
    signalModal.style.backgroundColor = "#22f00c";
    signalModal.style.color = "#161616";
}