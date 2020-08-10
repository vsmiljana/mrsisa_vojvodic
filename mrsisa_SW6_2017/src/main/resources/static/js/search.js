function searchAppointments(){
	console.log("search appointments");

	var apptType = $('#selectAppointments').find(":selected").text();
	//console.log("Appointment Type: "  + apptType);
	if (apptType === "Choose..."){
		apptType = null;
	}
	console.log(apptType);
	var date = new Date($('#dateAppointment').val());
	
	console.log(date);
	var dateToSend = date.getTime();
	
	var searchAppts = {"appointmentName": apptType, "date": dateToSend};

	var searchJson = JSON.stringify(searchAppts);
	
	$.ajax({
		url: "/usr/searchAppts",
		type: "PUT",
		data: searchJson,
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
            console.log("greska");
		},
		success : function (data) {
			console.log(data);
			displayClinics(data);
		}
		
	}); 
	
}