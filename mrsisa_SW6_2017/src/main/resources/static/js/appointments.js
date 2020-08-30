function scheduleApptReg(doctorId, apptName, date, time){

	var dateMs = dateToMs(date);
	var times = time.split("-");
	var startTime = times[0].trim();
	var endTime = times[1].trim();
	
	var startMinutes = timeToMins(startTime);
	var endMinutes = timeToMins(endTime);
	
	var apptDetails = {"doctorId": doctorId, "appointmentName": apptName, "start": startMinutes, "ends": endMinutes, "date": dateMs}

	
	var apptDetailsJson = JSON.stringify(apptDetails);

	$.ajax({
		url: "/usr/appointments/scheduleRegular",
		type: "POST",
		data: apptDetailsJson,
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
			$.when( $("#modalAppt2").modal("hide")).done(function() {
				$("#modalMissedAppointment").modal("show");
			});
			
		},
		success : function (data) {
			$.when( $("#modalAppt2").modal("hide")).done(function() {
				$("#modalFeedback").modal("show")
			});
		
		}
		
	}); 
}