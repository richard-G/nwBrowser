var initialize = function() {
    document.addEventListener("deviceready", onDeviceReady, false);
};
//taken out for web 

onDeviceReady = function() {
    setupModal();
    dynamicF();
    declarevars();
    //StatusBar.styleLightContent(); taken out for web
}


var setupModal = function() {
    var modalWR = document.getElementById('modalWR');
    //var modalWO = document.getElementById('modalWO');
    var modalWG = document.getElementById('modalWG');
    var modalER = document.getElementById('modalER');
    //var modalEO = document.getElementById('modalEO');
    var modalEG = document.getElementById('modalEG');

    var signalWR = document.getElementById('signalWR');
    //var signalWO = document.getElementById('signalWO');
    var signalWG = document.getElementById('signalWG');
    var signalER = document.getElementById('signalER');
    //var signalEO = document.getElementById('signalEO');
    var signalEG = document.getElementById('signalEG');

    var closeWR = document.getElementById("closeWR");
    //var closeWO = document.getElementById("closeWO");
    var closeWG = document.getElementById("closeWG");
    var closeER = document.getElementById("closeER");
    //var closeEO = document.getElementById("closeEO");
    var closeEG = document.getElementById("closeEG");

    var WRForm = document.getElementById("WRForm");
    //var WOForm = document.getElementById("WOForm");
    var WGForm = document.getElementById("WGForm");
    var ERForm = document.getElementById("ERForm");
    //var EOForm = document.getElementById("EOForm");
    var EGForm = document.getElementById("EGForm");

    var behind = document.getElementById("behind");


    signalWR.onclick = function() {
        modalWR.style.display = "block";
        //modalWO.style.display = "none";
        modalWG.style.display = "none";
        modalER.style.display = "none";
        //modalEO.style.display = "none";
        modalEG.style.display = "none";
        behind.style.opacity = "0.5";

    }
    /*signalWO.onclick = function() {
        modalWO.style.display = "block";
        modalWR.style.display = "none";
        modalWG.style.display = "none";
        modalER.style.display = "none";
        //modalEO.style.display = "none";
        modalEG.style.display = "none";
        behind.style.opacity = "0.5";
    }*/
    signalWG.onclick = function() {
        modalWG.style.display = "block";
        modalWR.style.display = "none";
        //modalWO.style.display = "none";
        modalER.style.display = "none";
        //modalEO.style.display = "none";
        modalEG.style.display = "none";
        behind.style.opacity = "0.5";
    }
    signalER.onclick = function() {
        modalER.style.display = "block";
        modalWR.style.display = "none";
        //modalWO.style.display = "none";
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
        //modalWO.style.display = "none";
        modalWG.style.display = "none";
        modalER.style.display = "none";
        //modalEO.style.display = "none";
        behind.style.opacity = "0.5";
    }

    closeWR.onclick = function() {
        modalWR.style.display = "none";
        behind.style.opacity = "1";
        WRForm.reset();
        resetModal();
    }
    /*closeWO.onclick = function() {
        modalWO.style.display = "none";
        behind.style.opacity = "1";
        WOForm.reset();
    }*/
    closeWG.onclick = function() {
        modalWG.style.display = "none";
        behind.style.opacity = "1";
        WGForm.reset();
    }
    closeER.onclick = function() {
        modalER.style.display = "none";
        behind.style.opacity = "1";
        ERForm.reset();
        resetModalER();
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

var dynamicF = function() {

    var endtimeER = document.getElementById("endtimeER"),
        backyetER = document.getElementById("backyetER"),
        backNowER = document.getElementById("backNowER");

}

function handleChange() {
    if (backyetER.checked) {
        backNowER.style.display = "block";
    }
    else {
        backNowER.style.display = "none";
    }

    if (backyetEO.checked) {
        backNowEO.style.display = "block";
    }
    else {
        backNowEO.style.display = "none";
    }
}

//declare all vars relating to water, red
var declarevars = function() {

    var userInfo = document.getElementById('userInfo');
    var intro = document.getElementById('intro');
    var next = document.getElementById('next');
    var typeO = document.getElementById('typeO');
    var condO = document.getElementById('condO');
    var sendWR = document.getElementById('sendWR');
    var loadNext = document.getElementById('loadNext');
    var waterCutY = document.getElementById('waterCutY');
    var waterCutN = document.getElementById('waterCutN');
    var reductionPressure = document.getElementById('reductionPressure');
    var reductionQuality = document.getElementById('reductionQuality');
    var taste = document.getElementById('taste');
    var smell = document.getElementById('smell');
    var appearance = document.getElementById('appearance');

    var backyetY = document.getElementById('backyetY');
    var backyetN = document.getElementById('backyetN');

    var timeBack = document.getElementById('timeBack');

    //minor addition for power, red
    var timebackQER = document.getElementById('timebackQER');
    var timebackER = document.getElementById('timebackER');
    var backyetERY = document.getElementById('backyetERY');
    var backyetERN = document.getElementById('backyetERN');
    var starttimeER = document.getElementById('starttimeER');

    //determines what questions will be asked on page 2
    loadNext.onclick = function () {
        userInfo.style.display = "none";
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

function resetModalER() {
    timebackQER.style.display = "none";
    sendER.style.display = "none";
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


    //minor addition for power, red
    if (backyetERY.checked) {
        timebackQER.style.display = "block";
    }
    else if (backyetERN.checked) {
        timebackQER.style.display = "none";
        timebackER.valueAsDate = null;
    }

    if (starttimeER.valueAsDate != null) {
        if ((backyetERN.checked) || (backyetERY.checked && timebackER.valueAsDate != null)) {
            sendER.style.display = "block";
        }
        else sendER.style.display = "none";
    }
    else sendER.style.display = "none";
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

    /*var modal = document.getElementById(modalID);
    modal.style.display = "none"; 
    var sucCB = document.getElementById(sucCB);
    sucCB.innerHTML = "Thank you!";
    sucCB.style.color = "green";
    */
    var sucCB = document.getElementById(sucCB);
    var sendB = document.getElementById(sendB);
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
