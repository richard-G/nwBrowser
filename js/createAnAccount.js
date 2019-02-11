var init = function() {
    document.addEventListener("deviceready", onReady, false);
};

onReady = function() {
    setupMap();
}


var setupMap = function() {
    var modalMap = document.getElementById("modalMap");
    var signalModal = document.getElementById("signalModal");
    var closeMap = document.getElementById("closeMap");

    signalModal.onclick = function() {
        modalMap.style.display = "block";
    }
    closeMap.onclick = function() {
        modalMap.style.display = "none";
    }

}
//everything added under here is for beta

function formSubmitInfo(event, formID, modalID) {
    event.preventDefault();
    
    var form = $('#'+formID);
    var id = document.getElementById(formID).ID;
    id.value = Math.floor((Math.random() * 100000000) + 1);
    var timestamp = document.getElementById(formID).timestamp;
    timestamp.value = Date();
    var latID = document.getElementById("latID");
    var lngID = document.getElementById("lngID");
    

    var postcode = document.getElementById(formID).postcode;


    formSendInfo(form); //added for web


    if (latitudeVal.value && longitudeVal.value != ""){
        document.getElementById('successCB').innerHTML = "Successfully sent, thanks!";
        document.getElementById('successCB').style.color = "green";
    }
    else {
        document.getElementById('successCB').innerHTML = "Please ensure you've located yourself";
        document.getElementById('successCB').style.color = "red";
    }

}



function formSendInfo(form) {
    $.ajax({
        type: "POST",
        url: "https://xdfz4o3cjk.execute-api.eu-west-2.amazonaws.com/live/networkingwater",
        data: form.serialize(),
        dataType: 'x-www-form-urlencoded',
        contentType: 'application/x-www-form-urlencoded',
        success: function(data)
        {
            alert("data submitted");
            console.log('submit successful');
        }
    });
}

// below one works

function showMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter=new google.maps.LatLng(27.7,85.3);
    var mapOptions = {center: myCenter, zoom: 12};
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
    var latID = document.getElementById("latID");
    var lngID = document.getElementById("lngID");
    latID.innerHTML = "Latitude: " + location.lat();
    latID.style.color = "green";
    lngID.innerHTML = "Longitude: " + location.lng();
    lngID.style.color = "green";
}

