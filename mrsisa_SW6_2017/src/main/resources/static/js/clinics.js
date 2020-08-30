function getClinics(){
	
	$.ajax({
		url: "/usr/clinics",
		type: "GET",
		contentType: "application/json",
	
		
		error: function (response) {
			window.location.replace("/");
		},
		success : function (data) {

			setUpClinics(data);
			
		}
		
	}); 
}

function setUpClinicsPage(){
	$.ajax({
		url: "/usr/clinicsPage",
		type: "GET",
		contentType: "application/json",

		
		error: function (response) {
			window.location.replace("/login.html");
		},
		success : function (data) {

			setUpClinics(data.clinics);
			setUpSearch(data.appointmentTypes, "");

			
		}
		
	}); 
	
}


function setUpSearch(appointmentTypes, clinicId){
	
	$('#selectAppointments').children().not(':first').remove();
	
	$("#searchButton").val(clinicId);
	
	for (type of appointmentTypes){
		$('#selectAppointments').append($('<option>', {
		    value: 1,
		    text: type
		}));
	}
	
	
}

function setUpClinics(clinics){
		
	$('#panel').children().not('#navbarId, #searchDiv, #searchClinics, #searchClinicsAdvanced, #searchDoctors, #searchDoctorsAdvanced').remove();
	$("#searchDiv").show();
	$("#searchClinics").show();
	$("#searchDoctors").hide();
	$("#searchDoctorsAdvanced").hide();
	

	
	var panel = $("#panel");
	for (clinic of clinics){
		var rating = clinic.rating;
		var ratingText = clinic.rating;
		if (isNaN(clinic.rating)){
			ratingText = "-";
			rating = 0;
		}
		var appointmentsStrings = "We provide the following appointments: ";
		for (as of clinic.appointmentNames){
			appointmentsStrings += as + ", ";
		}
		appointmentsStrings = appointmentsStrings.substring(0, appointmentsStrings.length-2)
		
		panel.append(`<div class="card card-appointment clinic" data-name='${clinic.name}' data-address='${clinic.address}'
          data-city='${clinic.city}' data-country='${clinic.country}' data-rating=${rating}>
          <div class="row cardy clinicRegular">
                <div class="apt-img-div">
                   <img class="apt-img" src="/images/icons/clinic_icon.png"; alt="" width="115px;"> 
                </div> 
                <div>
                  <div class="card-block" style="width: 550px" >
                    <h5 class="card-title clinic-name">${clinic.name}</h5> 
                    <p class="clinic-description">${clinic.description} </p>
                    <p class="clinic-appointments"> ${appointmentsStrings}</p>                   
                    <p>Address: ${clinic.address}, ${clinic.city}, ${clinic.country}</p>
                    <p>Rating: ${ratingText} <i class="fas fa-star"></i> (${clinic.votes} votes)</p>   
                    <br>
                    <a class="btn btn-primary btn-sm"  href="javascript:getClinicsAppts(${clinic.id})">Predefined appointments<a/>
                   <a class="btn btn-primary btn-sm "  href="javascript:getDoctors(${clinic.id})">Doctors<a/>
                   
           
    </div></div></div></div>`);
	}
	addSomeSpace();
}


function getDoctors(clinicId){
	
	$("#searchButton").val(clinicId);
	
	
	console.log(clinicId + " klinika ");
	
	
	
	$.ajax({
		url: "/usr/doctors/" + clinicId,
		type: "GET",
		contentType: "application/json",
		
		
		error: function (response) {
			console.log("Desila se neka greska pri dobavljanju lekara na osnovu id-ja klinike");
		},
		success : function (data) {

			setUpClinicInfo(data.clinic);
			setUpSearch(data.clinic.appointmentNames, data.clinic.id);
			setUpDoctorsRegular(data.doctors);
			
		}
		
	}); 
	
}

function setUpClinicInfo(clinic){
	$("#searchButton").val(clinic.id);
	
	$('#panel').children().not('#navbarId, #searchDiv, #apptInfo, #searchClinics, #searchClinicsAdvanced, #searchDoctors, #searchDoctorsAdvanced').remove();	// ovde sam dodala apptinfo
	var panel = $("#panel");
	var price = clinic.price;
	if (price != null && price != 0){
		panel.append(`<div id="clinicInfoDiv" data-price=${price} style="margin-left: 150px; margin-top: 20px;"><h5>${clinic.name} (${clinic.address}), appointment price: ${price} </h5>
		<p id="appointmentPrice" style="display: none">${price}</p></div>`);
	}
	else {
		panel.append(`<div id="clinicInfoDiv" style="margin-left: 150px; margin-top: 20px;"><h5>Displaying doctors of ${clinic.name} (${clinic.address})</h5></div>`);

	}

}

function setUpDoctorsRegular(doctors){
	$('#panel').children().not('#navbarId, #searchDiv, #clinicInfoDiv, #searchClinics, #searchClinicsAdvanced, #searchDoctors, #searchDoctorsAdvanced').remove();
	
	$("#searchClinics").hide();
	$("#searchClinicsAdvanced").hide();
	$("#searchDoctors").show();
	//$("#searchDoctorsAdvanced").hide();
	
	var panel = $("#panel");
	
	
	if (doctors.length == 0){
		makeSorryDiv("There are no doctors available for display for this clinic.");
		addSomeSpace();
		return;
	}
	
	
	for (doctor of doctors){
	
		var rating = doctor.rating;
		var ratingText = doctor.rating;
		if (isNaN(doctor.rating)){
			ratingText = "-";
			rating = 0;
		}
		
		panel.append(`<div class="card card-appointment doctor" data-id = ${doctor.id} data-first-name = '${doctor.firstName}'
		data-last-name = '${doctor.lastName}' data-rating = ${rating}>
          <div class="row cardy" >
                <div class="apt-img-div">
                   <img class="apt-img" src="/images/icons/doctor_icon.png"; alt="" width="115px;"> 
                </div> 
                <div>
                  <div class="card-block">
                    <h5 class="card-title clinic-name">Dr. ${doctor.firstName} ${doctor.lastName}</h5> 
                    <div style="display: inline-block; max-width: 200px;">
                      <p>Name: ${doctor.firstName} ${doctor.lastName}</p>
                      <p> Rating: ${ratingText} <i class='fas fa-star'></i> (${doctor.votes} votes)</p>
                    </div>
                    <div style="display: inline-block; margin-left: 50px; margin-right: 30px;max-width: 200px;">
                      <br>
     </div> 
    </div></div></div></div>`);
	}
	addSomeSpace();
}


function getClinicsAppts(clinicId){
	
	$.ajax({
		url: "/usr/appointmentsById/" + clinicId,
		type: "GET",
		contentType: "application/json",
		
		
		error: function (response) {
			window.location.replace("/homepage.html");
			//console.log("desila se neka greska");
		},
		success : function (data) {

			setUpClinicsAppointments(data);
			
		}
		
	}); 
}


function setUpClinicsAppointments(appts){			// predefined

	$('#searchDiv').hide();
	$('#panel').children().not('#navbarId, #searchDiv, #searchClinics, #searchClinicsAdvanced, #searchDoctors, #searchDoctorsAdvanced, .clinic').remove();
	$('#panel').children().not('#navbarId').hide();
	$(".clinic").hide();
	//$('#panel').children().not(':first').remove();
	
	var panel = $("#panel");
	
	if (appts.length == 0) {		
	
		panel.append(`<div class="title-div" style="margin: 0 auto; min-width: 500px; margin-top: 50px;">
	      <p class="card-title" style="text-align: center; font-size: 20px;">There are no available predefined appointments!</p></div>`);
		panel.append(`<div class="title-div" style="margin: 0 auto; min-width: 500px;">
	      <p class="card-title" style="text-align: center; font-size: 18px;"><a href="javascript:backFromPredefined();">Back</a></p></div>`);
		return;
	}
	panel.append(`<div class="title-div" style="margin: 0 auto; min-width: 500px; margin-top: 20px;">
    <p class="card-title" style="text-align: center; font-size: 18px;"><a href="javascript:backFromPredefined();">Back to clinics</a></p></div>`);
	
	for (appointment of appts){
		var date = setupDate(appointment.dateLong);
		var timeStart = setupTime(appointment.start);
		panel.append(`<div class="card card-appointment predefined">
        <div class="row cardy" >
              <div class="apt-img-div">
                 <img class="apt-img" src="/images/icons/appointment-icon-345.png" alt="" width="115px;"> 
              </div> 
              <div>
                <div class="card-block">
                  <h5 class="card-title">${appointment.appointmentName}: ${date} </h5> 
                  <div style="display: inline-block">
                  <p>Appointment type: ${appointment.appointmentName}</p>
                  <p>Date: ${date}</p>
                  
                    <p>Time: ${timeStart}</p> 
                    <p>Appointment price: ${appointment.price}</p>
                </div>
                
                  <div style="display: inline-block; margin-left: 50px; margin-right: 30px;">
                  <p>Doctor: ${appointment.doctor} </p>
                  <p>Clinic: ${appointment.clinicName}</p>
                  <p>Clinic Address: ${appointment.clinicAddress}</p>
                  
                   <a class="btn btn-primary btn-sm float-right open-ModalAppt" data-toggle="modal" data-target="#modalAppt" 
                   data-id=${appointment.id} data-name="smiljana"
                   data-sth = 'javascript:makeAppointment(${appointment.clinicName})'
                    data-whatever = ${appointment.appointmentName}
                   data-date = ${date} data-appointmentType = '${appointment.appointmentName}' data-price = ${appointment.price}
                   data-time = ${timeStart} data-doctor = '${appointment.doctor}'
                   href="#modalAppt">Schedule<a/>
                
              <!--  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>
					-->
                
                  <br>
                  
  </div> 
  </div></div></div></div>`);
	}
	addSomeSpace();
	
}

function backFromPredefined(){
	$('#panel').children().not('#navbarId, #searchDiv, #searchClinics').hide();
	$('#navbarId, #searchDiv, #searchClinics').show();
	$(".predefined").remove();
	$(".clinic").show();
	
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
			
			$.when( $("#modalAppt").modal("hide")).done(function() {
				$("#modalMissedAppointment").modal("show");
			});
			
		},
		success : function (data) {
	
			$.when( $("#modalAppt").modal("hide")).done(function() {
				$("#modalFeedback").modal("show")
			});
			
			
		}
		
	}); 
}

function goToClinics(){
	setUpClinicsPage();
	$("#homeNavBarItem").removeClass("active");
	$("#clinicsNavBarItem").addClass("active");
}