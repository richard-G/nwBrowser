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
        sendWG = document.getElementById('sendWG'); //added 7/06
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
    }
}

//ensures smartfields reset on close
function resetModal() {
    loadNext.style.display = "none";
    next.style.display = "none";
    //
    sendWG.style.display = "none";
    intro.style.display = "block";
}

//smart fields for page 1
function smartFormIntro() {
    if ((timeBack.valueAsDate != null) && (startTime.valueAsDate != null)) {
        loadNext.style.display = "block";
    } else {
        loadNext.style.display = "none";
    }
}

//smart fields for page 2, including submit button
function smartForm() {
    if ( colourN.checked || colourY.checked ) {
        if ( odourN.checked || odourY.checked ) {
            if ( tasteN.checked || tasteY.checked ) {
                sendWG.style.display = "block";
            } else {
                sendWG.style.display = "none";
            }
        } else {
            sendWG.style.display = "none";
        }
    } else {
        sendWG.style.display = "none";
    }

}
