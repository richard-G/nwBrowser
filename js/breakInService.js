var initialize = function() {
    document.addEventListener("deviceready", onDeviceReady, false);
};
//taken out for web 

onDeviceReady = function() {
    setupModal();
    dynamicF();
    //StatusBar.styleLightContent(); taken out for web
}


var setupModal = function() {
    var modalWR = document.getElementById('modalWR');
    var modalWO = document.getElementById('modalWO');
    var modalWG = document.getElementById('modalWG');
    var modalER = document.getElementById('modalER');
    //var modalEO = document.getElementById('modalEO');
    var modalEG = document.getElementById('modalEG');

    var signalWR = document.getElementById('signalWR');
    var signalWO = document.getElementById('signalWO');
    var signalWG = document.getElementById('signalWG');
    var signalER = document.getElementById('signalER');
    //var signalEO = document.getElementById('signalEO');
    var signalEG = document.getElementById('signalEG');

    var closeWR = document.getElementById("closeWR");
    var closeWO = document.getElementById("closeWO");
    var closeWG = document.getElementById("closeWG");
    var closeER = document.getElementById("closeER");
    //var closeEO = document.getElementById("closeEO");
    var closeEG = document.getElementById("closeEG");

    var WRForm = document.getElementById("WRForm");
    var WOForm = document.getElementById("WOForm");
    var WGForm = document.getElementById("WGForm");
    var ERForm = document.getElementById("ERForm");
    //var EOForm = document.getElementById("EOForm");
    var EGForm = document.getElementById("EGForm");

    var behind = document.getElementById("behind");


    signalWR.onclick = function() {
        modalWR.style.display = "block";
        modalWO.style.display = "none";
        modalWG.style.display = "none";
        modalER.style.display = "none";
        //modalEO.style.display = "none";
        modalEG.style.display = "none";
        behind.style.opacity = "0.5";

    }
    signalWO.onclick = function() {
        modalWO.style.display = "block";
        modalWR.style.display = "none";
        modalWG.style.display = "none";
        modalER.style.display = "none";
        //modalEO.style.display = "none";
        modalEG.style.display = "none";
        behind.style.opacity = "0.5";
    }
    signalWG.onclick = function() {
        modalWG.style.display = "block";
        modalWR.style.display = "none";
        modalWO.style.display = "none";
        modalER.style.display = "none";
        //modalEO.style.display = "none";
        modalEG.style.display = "none";
        behind.style.opacity = "0.5";
    }
    signalER.onclick = function() {
        modalER.style.display = "block";
        modalWR.style.display = "none";
        modalWO.style.display = "none";
        modalWG.style.display = "none";
        //modalEO.style.display = "none";
        modalEG.style.display = "none";
        behind.style.opacity = "0.5";
    }
    /*signalEO.onclick = function() {
        modalEO.style.display = "block";
        modalWR.style.display = "none";
        modalWO.style.display = "none";
        modalWG.style.display = "none";
        modalER.style.display = "none";
        modalEG.style.display = "none";
        behind.style.opacity = "0.5";
    }*/
    signalEG.onclick = function() {
        modalEG.style.display = "block";
        modalWR.style.display = "none";
        modalWO.style.display = "none";
        modalWG.style.display = "none";
        modalER.style.display = "none";
        //modalEO.style.display = "none";
        behind.style.opacity = "0.5";
    }

    closeWR.onclick = function() {
        modalWR.style.display = "none";
        behind.style.opacity = "1";
        WRForm.reset();
    }
    closeWO.onclick = function() {
        modalWO.style.display = "none";
        behind.style.opacity = "1";
        WOForm.reset();
    }
    closeWG.onclick = function() {
        modalWG.style.display = "none";
        behind.style.opacity = "1";
        WGForm.reset();
    }
    closeER.onclick = function() {
        modalER.style.display = "none";
        behind.style.opacity = "1";
        ERForm.reset();
    }
    /*closeEO.onclick = function() {
        modalEO.style.display = "none";
        behind.style.opacity = "1";
        EOForm.reset();
    }*/
    closeEG.onclick = function() {
        modalEG.style.display = "none";
        behind.style.opacity = "1";
        EGForm.reset();
    }

}


// dynamic fields for water, orange
// also for N/A to empty strings
var dynamicF = function() {
    var lowQual = document.getElementById("lowQual"),
        lowPressure = document.getElementById("lowPressure"),
        redP = document.getElementById("redP"),
        redQ = document.getElementById("redQ"),
        PandQ = document.getElementById("PandQ"),

        endtimeWO = document.getElementById("endtimeWO"),
        endtimeWR = document.getElementById("endtimeWR"),
        endtimeEO = document.getElementById("endtimeEO"),
        endtimeER = document.getElementById("endtimeER"),

        backyetWO = document.getElementById("backyetWO"),
        backyetWR = document.getElementById("backyetWR"),
        backyetEO = document.getElementById("backyetEO"),
        backyetER = document.getElementById("backyetER"),
        backyetWOn = document.getElementById("backyetWOn")

        backNowWO = document.getElementById("backNowWO"),
        backNowWR = document.getElementById("backNowWR"),
        backNowEO = document.getElementById("backNowEO"),
        backNowER = document.getElementById("backNowER"),

        municipalWG = document.getElementById("municipalWG"),
        municipalWO = document.getElementById("municipalWO"),
        municipalWR = document.getElementById("municipalWR"),
        /*municipalEG = document.getElementById("municipalEG"),
        municipalEO = document.getElementById("municipalEO"),
        municipalER = document.getElementById("municipalER"),*/
        notMunWG = document.getElementById("notMunWG"),
        notMunWO = document.getElementById("notMunWO"),
        notMunWR = document.getElementById("notMunWR");
        /*notMunEG = document.getElementById("notMunEG"),
        notMunEO = document.getElementById("notMunEO"),
        notMunER = document.getElementById("notMunER");*/
}

function handleChange() {
    if (redP.checked) {
        lowPressure.style.display = "block";
        lowQual.style.display = "none";
    }
    else if (redQ.checked) {
        lowQual.style.display = "block";
        lowPressure.style.display = "none";
    }
    else if (PandQ.checked) { //why is this blue?
        lowQual.style.display = "block";
        lowPressure.style.display = "block";
    }

    if (backyetWO.checked) {
        backNowWO.style.display = "block";
        lowPressure.style.display = "none";
    }
    else if (backyetWOn.checked) {
        backNowWO.style.display = "none";
        //lowPressure.style.display = "block"; //not necessary here
    }

    if (backyetER.checked) {
        backNowER.style.display = "block";
    }
    else {
        backNowER.style.display = "none";
    }

    if (backyetWR.checked) {
        backNowWR.style.display = "block";
    }
    else {
        backNowWR.style.display = "none";
    }

    if (backyetEO.checked) {
        backNowEO.style.display = "block";
    }
    else {
        backNowEO.style.display = "none";
    }

//sorting municipal questions
    if (municipalWG.checked) {
        notMunWG.style.display = "none";
        sourceWG.value = "n/a";
    }
    else {
        notMunWG.style.display = "block";
        sourceWG.value = "";
    }
    if (municipalWO.checked) {
        notMunWO.style.display = "none";
        sourceWO.value = "n/a";
    }
    else {
        notMunWO.style.display = "block";
        sourceWO.value = "";
    }
    if (municipalWR.checked) {
        notMunWR.style.display = "none";
        sourceWR.value = "n/a";
    }
    else {
        notMunWR.style.display = "block";
        sourceWR.value = "";
    }

}

function formSubmit(event, formID, modalID, sucCB) {
    event.preventDefault();

    
    var form = $('#'+formID);
    var id = document.getElementById(formID).ID;
    id.value = Math.floor((Math.random() * 100000000) + 1);
    var timestamp = document.getElementById(formID).timestamp;
    timestamp.value = Date();
    /*var firstName = document.getElementById(formID).firstName;
    var lastName = document.getElementById(formID).lastName;
    var address = document.getElementById(formID).address;
    var postcode = document.getElementById(formID).postcode;
    var country = document.getElementById(formID).country; */    //removed for web app

    if ((redP.checked) && (timeTaken.value=="") && (backyetWOn.checked)) {
        timeTaken.value = "not given";
    }
    if ((PandQ.checked) && (timeTaken.value=="") && (backyetWOn.checked)) {
        timeTaken.value = "not given";
    }
    if ( ((redQ.checked) || (PandQ.checked)) && (descRedQ.value=="") ) { //this should work, need to properly test
        descRedQ.value = "not given";
    }

    /* not possible for web version
    if (file.entry) {
        file.entry.file(function (detailsFile) {
            var reader = new FileReader();
            reader.onloadend = function (evt) {
                var textArray = evt.target.result.split("\n");
                firstName.value = textArray[0];
                lastName.value = textArray[1];
                address.value = textArray[2];
                postcode.value = textArray[3];
                country.value = textArray[4];
                formSend(form);
                return true;
            }
            reader.readAsText(detailsFile);

        }, failCB("FileReader"));
    }
    //return false;
    */

    /*firstName.value = "firsttest";
    lastName.value = "lasttest";
    address.value = 'addtest';
    postcode.value = "posttest";
    country.value = "countrytest";*/



    //changing all zero string values to "N/A"
    //for WR
    if (modalWR.style.display == "block") {
        if (backNowWR.style.display == "none") {
            endtimeWR.value = "N/A";
        }
    }

    //for WO
    if (modalWO.style.display == "block") {

        if (lowPressure.style.display == "none") {
            timeTaken.value = "N/A";
        }
        if (lowQual.style.display == "none") { //won't work?
            tasteB.value = "N/A";
            appearanceB.value = "N/A";
            smellB.value = "N/A";
            descRedQ.value = "N/A";
        }
        if (backNowWO.style.display == "none") {
            endtimeWO.value = "N/A";
        }
    }

    //for ER
    if (modalER.style.display == "block") {

        if (backNowER.style.display == "none") {
            endtimeER.value = "N/A";
        }
    }

    //for EO
    if (modalEO.style.display == "block") {

        if (backNowEO.style.display == "none") {
            endtimeEO.value = "N/A";
        }
    }

    //for municipal
    if (modalWG.style.display == "block") {
        if (notMunWG.style.display == "none") {
            sourceWG.value = "municipal";
        }
    }
    if (modalWO.style.display == "block") {
        if (notMunWO.style.display == "none") {
            sourceWO.value = "municipal";
        }
    }
    if (modalWR.style.display == "block") {
        if (notMunWR.style.display == "none") {
            sourceWR.value = "municipal";
        }
    }

    formSend(form); //added for web

    /*var modal = document.getElementById(modalID);
    modal.style.display = "none";*/

    var sucCB = document.getElementById(sucCB);

    sucCB.innerHTML = "Thank you!";
    sucCB.style.color = "green";




}

function formSend(form) {
    $.ajax({
       type: "POST",
       url: "https://xdfz4o3cjk.execute-api.eu-west-2.amazonaws.com/live/networkingwater",
       data: form.serialize(),
       dataType: 'x-www-form-urlencoded',
       contentType: 'application/x-www-form-urlencoded',
       success: function(data)
       {
           alert("Data Submitted!");
           console.log('submit successful')
       }
    });
}
