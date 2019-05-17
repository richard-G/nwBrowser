var initialize = function() {
    document.addEventListener("deviceready", onDeviceReady, false);
};

onDeviceReady = function() {
    setupModal();
    declarevars();
}


var setupModal = function() {
    var modalWR = document.getElementById('modalWR');
        modalWG = document.getElementById('modalWG');

        signalWR = document.getElementById('signalWR');
        signalWG = document.getElementById('signalWG');

        closeWR = document.getElementById("closeWR");
        closeWG = document.getElementById("closeWG");

        WRForm = document.getElementById("WRForm");
        WGForm = document.getElementById("WGForm");

        behind = document.getElementById("behind");


    signalWR.onclick = function() {
        modalWR.style.display = "block";
        modalWG.style.display = "none";
        behind.style.opacity = "0.5";
    }
    signalWG.onclick = function() {
        modalWG.style.display = "block";
        modalWR.style.display = "none";
        behind.style.opacity = "0.5";
    }

    closeWR.onclick = function() {
        modalWR.style.display = "none";
        behind.style.opacity = "1";
        WRForm.reset();
        resetModal();
    }
    closeWG.onclick = function() {
        modalWG.style.display = "none";
        behind.style.opacity = "1";
        WGForm.reset();
    }
}

//declare all vars relating to water, red
var declarevars = function() {

    //var userInfo = document.getElementById('userInfo');
    var intro = document.getElementById('intro');
        next = document.getElementById('next');
        typeO = document.getElementById('typeO');
        condO = document.getElementById('condO');
        sendWR = document.getElementById('sendWR');
        loadNext = document.getElementById('loadNext');
        waterCutY = document.getElementById('waterCutY');
        waterCutN = document.getElementById('waterCutN');
        reductionPressure = document.getElementById('reductionPressure');
        reductionQuality = document.getElementById('reductionQuality');
        taste = document.getElementById('taste');
        smell = document.getElementById('smell');
        appearance = document.getElementById('appearance');

        backyetY = document.getElementById('backyetY');
        backyetN = document.getElementById('backyetN');

        timeBack = document.getElementById('timeBack');

    //determines what questions will be asked on page 2
    loadNext.onclick = function () {
        //userInfo.style.display = "none";
        intro.style.display = "none";
        next.style.display = "block";
        if (reductionQuality.checked) {
            condO.style.display = "block";
        }
        else {
            condO.style.display = "none";
        }
    }
}

//ensures smartfields reset on close
function resetModal() {
    loadNext.style.display = "none";
    condO.style.display = "none";
    typeO.style.display = "none";
    next.style.display = "none";
    sendWR.style.display = "none";
    userInfo.style.display = "block";
    intro.style.display = "block";
}

//smart fields for page 1
function smartFormIntro() {
    if (waterCutY.checked) {
        typeO.style.display = "none";
        reductionPressure.checked = false;
        reductionQuality.checked = false;
        loadNext.style.display = "block";
    }
    else if (waterCutN.checked) {
        typeO.style.display = "block";
        if ( (reductionPressure.checked) || (reductionQuality.checked) ) {
            loadNext.style.display = "block";
        }
        else {
            loadNext.style.display = "none";
        }
    }
}

//smart fields for page 2, including submit button
function smartForm() {
    if (backyetY.checked) {
        timeBackQ.style.display = "block";
    }
    else if (backyetN.checked) {
        timeBackQ.style.display = "none";
        timeBack.valueAsDate = null;
    }
    if ( (((condO.style.display) == "block") && (taste.checked || smell.checked || appearance.checked) ) || ((condO.style.display) == "none")) {
        if (startTime.valueAsDate != null) {
            if ((backyetY.checked) && (timeBack.valueAsDate != null)) {
                sendWR.style.display = "block";
            }
            else if (backyetN.checked) {
                sendWR.style.display = "block";
            }
            else {
                sendWR.style.display = "none";
            }
        }
        else {
            sendWR.style.display = "none";
        }
    }
    else {
        sendWR.style.display = "none";
    }
}


/*
//converts data collected from the form
function formSubmit(event, formID, modalID, sucCB, sendB) {
    event.preventDefault();
    
    var form = $('#'+formID);
    var id = document.getElementById(formID).ID;
    id.value = Math.floor((Math.random() * 100000000) + 1);
    var timestamp = document.getElementById(formID).timestamp;
    timestamp.value = Date();


    //remove all inputs with no values
    form.find(":input").filter(function(){ return !this.value; }).attr("disabled", "disabled");

    formSend(form); //added for web

    var sucCB = document.getElementById(sucCB);
        sendB = document.getElementById(sendB);
    sendB.style.display = "none";
    sucCB.style.display = "block";
}

//sends converted data to server through ajax
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
*/