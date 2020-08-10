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
		url: "/usr/searchApptsClinic",
		type: "PUT",
		data: searchJson,
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
            console.log("greska");
		},
		success : function (data) {
			console.log(data);
			// ovde treba displayClinics, samo da vidim da radi
			displayDoctors(data);
		}
		
	}); 
	
}


function displayDoctors(doctors) {
	
	$('#panel').children().not('#navbarId, #searchDiv').remove();
	var panel = $("#panel");
	
	for (doctor of doctors){
	
		var times = ""
		for (apptTime of doctor.availableAppointments){
			times += setupTime(apptTime.start) + " - " + setupTime(apptTime.end) + "&#13;";
		}
	
		panel.append(`<div class="card card-appointment">
          <div class="row cardy" >
                <div class="apt-img-div">
                   <img class="apt-img" src="https://image.flaticon.com/icons/png/512/511/511079.png"; alt="" width="115px;"> 
                </div> 
                <div>
                  <div class="card-block">
                    <h5 class="card-title clinic-name">Dr. ${doctor.firstName} ${doctor.lastName}</h5> 
                    <div style="display: inline-block; max-width: 200px;">
                      <p>Name: ${doctor.firstName} ${doctor.lastName}</p>
                    </div>
                    <div style="display: inline-block; margin-left: 50px; margin-right: 30px;">
                   	<p> ${times}</p>
                    
                    <br>
                    <a class="btn btn-primary btn-sm float-right"  href="javascript:getClinicsAppts(${clinic.id})">Apojntmenti<a/>
                   
                    
                    
    </div> 
    </div></div></div></div>`);
	}
	
}