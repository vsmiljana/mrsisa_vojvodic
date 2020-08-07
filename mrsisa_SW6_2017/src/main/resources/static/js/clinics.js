function getClinics(){
	
	$.ajax({
		url: "/usr/clinics",
		type: "GET",
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
			window.location.replace("/login.html");
		},
		success : function (data) {
			//d = JSON.parse(data.responseText);
//			$("body").show();
			setUpClinics(data);
			//window.location = "/usr/clinics"
			
		}
		
	}); 
}


function setUpClinics(clinics){
	console.log("setup clinics");
	//$('#panel').not(':first').remove();
	//$('#panel div').empty();
	$('#panel').children().not(':first').remove();
	var panel = $("#panel");
	for (clinic of clinics){
		panel.append(`<div class="card card-appointment">
          <div class="row cardy" >
                <div class="apt-img-div">
                   <img class="apt-img" src="https://image.flaticon.com/icons/png/512/511/511079.png"; alt="" width="115px;"> 
                </div> 
                <div>
                  <div class="card-block">
                    <h5 class="card-title clinic-name">${clinic.name}</h5> 
                    <div style="display: inline-block; max-width: 200px;">
                    <p>${clinic.description} alskjdaslkdjalkdjalsdjkalksjdl asdlkj asldk alskdj alskjd askldj </p>
                    
                    </div>
                    <div style="display: inline-block; margin-left: 50px; margin-right: 30px;">
                    <p>Address: ${clinic.address} </p>
                    <p>City: ${clinic.city}</p>
                    <p>Country: ${clinic.country}</p>
                    <br>
                    <a class="btn btn-primary btn-sm float-right" href="javascript:getClinicsAppts(${clinic.id})">Apojntmenti<a/>
                   
                    
                    
    </div> 
    </div></div></div></div>`);
	}
}

function getClinicsAppts(clinicId){
	
	$.ajax({
		url: "/usr/appointmentsById/" + clinicId,
		type: "GET",
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
			window.location.replace("/login.html");
			//console.log("desila se neka greska");
		},
		success : function (data) {
		//d = JSON.parse(data.responseText);
//			$("body").show();
			setUpClinicsAppointments(data);
			
		}
		
	}); 
}


function setUpClinicsAppointments(appts){
	console.log(appts);
	$('#panel').children().not(':first').remove();
	var panel = $("#panel");
	// treba prikazati mozda na vrhu detalje klinike, kako da ih dobijem/prikazen
	if (appts.length == 0) {
		panel.append(`<div>Nema ovde nicega :( </div>`)
	}
	for (appointment of appts){
		panel.append(`<div class="card card-appointment">
        <div class="row cardy" >
              <div class="apt-img-div">
                 <img class="apt-img" src="https://vectorified.com/images/appointment-icon-34.png" alt="" width="115px;"> 
              </div> 
              <div>
                <div class="card-block">
                  <h5 class="card-title">${appointment.appointmentName}: formatirati datum :( </h5> 
                  <div style="display: inline-block">
                  <p>Appointment type: appt</p>
                  <p>Date: ${appointment.appointmentName}</p>
                  <div style="border-bottom: 1px;">
                    <p>Time: ${appointment.start}</p> </div>
                    <p> Info: Lorem Ipsum </p>
                    <p> More Info: Lorem Ipsum </p>
                </div>
                  <div style="display: inline-block; margin-left: 50px; margin-right: 30px;">
                  <p>Doctor: ${appointment.doctor} </p>
                  <p>Clinic: ${appointment.clinicName}</p>
                  <p>Clinic Address: ${appointment.clinicAddress}</p>
                  <p>Appointment price: ${appointment.price}</p>
                   <a class="btn btn-primary btn-sm float-right" href="javascript:scheduleAppt(${appointment.id})">Schedule<a/>
                   
                  <br>
                  
  </div> 
  </div></div></div></div>`);
	}
	
}


function scheduleAppt(apptId){
	
	var appointmentDto = {"appointmentId": apptId};  
	var appointment = JSON.stringify(appointmentDto);
	
	$.ajax({
		url: "/usr/appointments/bookAnAppt",
		type: "PUT", 
		contentType: "application/json",
		data: appointment,
		error: function (response) {
			//window.location.replace("/login.html");
		console.log("desila se neka greska");
			
		},
		success : function (data) {
		//d = JSON.parse(data.responseText);
//			$("body").show();
			alert("zakazo si lol");
		}
		
	}); 
}