function scheduleApptReg(doctorId, apptName, date, time){
	console.log(doctorId + apptName + date + time);
	//alert(doctorId + apptName + date + time);
	// showtime
	var dateMs = dateToMs(date);
	var times = time.split("-");
	var startTime = times[0].trim();
	var endTime = times[1].trim();
	
	var startMinutes = timeToMins(startTime);
	var endMinutes = timeToMins(endTime);
	
	var apptDetails = {"doctorId": doctorId, "appointmentName": apptName, "start": startMinutes, "ends": endMinutes, "date": dateMs}

	console.log(apptDetails);
	
	var apptDetailsJson = JSON.stringify(apptDetails);
	//console.log(personjson);
	
	$.ajax({
		url: "/usr/appointments/scheduleRegular",
		type: "POST",
		data: apptDetailsJson,
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
            console.log("greska");
		},
		success : function (data) {
			console.log("prosloooooooo");
			$.when( $("#modalAppt2").modal("hide")).done(function() {
				$("#modalFeedback").modal("show")
			});
			//window.location.replace("/homepage.html");
		}
		
	}); 
}