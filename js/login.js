function loginSubmit() {
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
}}