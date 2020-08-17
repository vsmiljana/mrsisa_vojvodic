function getRecord(){
	alert("neprijatno");
	
	$.ajax({
		url: "/usr/record",
		type: "GET",
		contentType: "application/json",
		
		error: function (response) {
            console.log("greska");
		},
		success : function (data) {
			showRecord(data);
		}
		
	}); 
	
}

function showRecord(record){
	$('#searchDiv').hide();		// vidjeti jel ovo dobro...
	$('#panel').children().not('#navbarId, #searchDiv').remove(); 		// i ovo isto...
	console.log(record);
	$("#panel").append(`<div><h1>Medical record</h1></div>`);
	var i = 0;
	for (appointment of record.pastAppointments) {
		i = i + 1;
		var idd = "divAppt" + i;
		var date = setupDate(appointment.date);
		$("#panel").append(`<div id=divAppt${i}><h1>${appointment.appointmentName} ${date}</h1>
		<button onclick="getReportOnAppointment('${idd}', ${appointment.id})">Show details</button></div>`);
	}
}


function getReportOnAppointment(divId, apptId){
	console.log(divId + " lmaooo " + apptId);
	
	$.ajax({
		url: "/usr/pastAppointmentReport/" + apptId,
		type: "GET",
		contentType: "application/json",
		
		error: function (response) {
            console.log("greska");
		},
		success : function (data) {
			showExaminationReport(divId,data);
		}
		
	}); 
}


function showExaminationReport(divId, examinationReport){
	var nesto = String(divId);
	console.log("div Id: "+ divId);
	var myDiv = $("#" + divId);
	//if($("#" + divId + ".details").length)
	if($('#' + divId).find('div.details').length !== 0)
	{
		$('#' + divId).find('div.details').show();   
	}
	else {
		if (examinationReport == null || examinationReport === ""){
			myDiv.append(`<div class="details"><h2>Nema ovde niceg lmaoooo</h2></div>`);	
		}
		else {
			myDiv.append(`<div class="details"><h2>${examinationReport.description}</h2></div>`);		
		}
	}
	//console.log(examinationReport);
	
	
	$("#" + divId).find("button").css("background-color", "red" );
	$("#" + divId).find("button").attr("onclick", "hideExaminationReport(" + "'" + nesto + "'" + ")");
	$("#" + divId).find("button").text("Hide details");
}

function hideExaminationReport(divId){
	console.log("sta sam ovde dobila " + divId);
	var myDiv = $("#" + divId);
	$("#" + divId).find(".details").hide();
	//$("#" + divId).closest("button").attr("onclick", "showExaminationReport(" + divId + ",'')");
	$("#" + divId).find("button").css("background-color", "blue" );
	$("#" + divId).find("button").attr("onclick", "showExaminationReport('" + divId + "','')");
	$("#" + divId).find("button").text("Show details");
}