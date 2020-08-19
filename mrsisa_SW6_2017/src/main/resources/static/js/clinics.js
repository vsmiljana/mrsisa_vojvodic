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

function setUpClinicsPage(){
	$.ajax({
		url: "/usr/clinicsPage",
		type: "GET",
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
			window.location.replace("/login.html");
		},
		success : function (data) {
			//d = JSON.parse(data.responseText);
//			$("body").show();
			setUpClinics(data.clinics);
			setUpSearch(data.appointmentTypes, "");
			//window.location = "/usr/clinics"
			
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
	//$("#searchDiv").show();
	
}

function setUpClinics(clinics){
	console.log("setup clinics");
	//$('#panel').not(':first').remove();
	//$('#panel div').empty();
	
	//$('#panel').children().not(':first').remove();
	
	
	$('#panel').children().not('#navbarId, #searchDiv, #searchClinics, #searchClinicsAdvanced, #searchDoctors, #searchDoctorsAdvanced').remove();
	$("#searchDiv").show();
	$("#searchClinics").show();
	$("#searchDoctors").hide();
	$("#searchDoctorsAdvanced").hide();
	
	//$( ".upcomingAppointment" ).remove();
	
	//$("not:#panel").not( document.getElementById( "#navbarId" ) ).remove();
	//$("not:#panel").remove();
	
	var panel = $("#panel");
	for (clinic of clinics){
		var rating = clinic.rating;
		var ratingText = clinic.rating;
		if (isNaN(clinic.rating)){
			ratingText = "-";
			rating = 0;
		}
		
		panel.append(`<div class="card card-appointment clinic" data-name='${clinic.name}' data-address='${clinic.address}'
          data-city='${clinic.city}' data-country='${clinic.country}' data-rating=${rating}>
          <div class="row cardy clinicRegular">
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
                    <p>Rating: ${ratingText} <i class="fas fa-star"></i> (${clinic.votes} votes)</p>   
                    <br>
                    <a class="btn btn-primary btn-sm"  href="javascript:getClinicsAppts(${clinic.id})">Apojntmenti<a/>
                   <a class="btn btn-primary btn-sm "  href="javascript:getDoctors(${clinic.id})">Doctors<a/>
                   
                    
                    
    </div> 
    </div></div></div></div>`);
	}
}


function getDoctors(clinicId){
	
	$("#searchButton").val(clinicId);
	
	
	console.log(clinicId + " klinika ");
	
	
	
	$.ajax({
		url: "/usr/doctors/" + clinicId,
		type: "GET",
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
			console.log("Desila se neka greska pri dobavljanju lekara na osnovu id-ja klinike");
		},
		success : function (data) {
			//d = JSON.parse(data.responseText);
//			$("body").show();
			alert("sad sam azurirala i search!!")
			setUpClinicInfo(data.clinic);
			setUpSearch(data.clinic.appointmentNames, data.clinic.id);
			setUpDoctorsRegular(data.doctors);
			//window.location = "/usr/clinics"
			
		}
		
	}); 
	
}

function setUpClinicInfo(clinic){
	$("#searchButton").val(clinic.id);
	console.log("da vidim jesam li namjestilaaaaaaaaaaaaaaaaaaaaaaaa" + $("#searchButton").val());
	$('#panel').children().not('#navbarId, #searchDiv, #apptInfo, #searchClinics, #searchClinicsAdvanced, #searchDoctors, #searchDoctorsAdvanced').remove();	// ovde sam dodala apptinfo
	var panel = $("#panel");
	var price = clinic.price;
	if (price != null && price != 0){
		panel.append(`<div id="clinicInfoDiv" data-price=${price} style="margin: 0 auto; width: 500px;">${clinic.name}, address: ${clinic.address}, price: ${price}
		<p id="appointmentPrice" style="display: none">${price}</p></div>`);
	}
	else {
		panel.append(`<div id="clinicInfoDiv" style="margin: 0 auto; width: 500px;">${clinic.name}, address: ${clinic.address}</div>`);

	}

}

function setUpDoctorsRegular(doctors){
	$('#panel').children().not('#navbarId, #searchDiv, #clinicInfoDiv, #searchClinics, #searchClinicsAdvanced, #searchDoctors, #searchDoctorsAdvanced').remove();
	
	$("#searchClinics").hide();
	$("#searchClinicsAdvanced").hide();
	$("#searchDoctors").show();
	$("#searchDoctorsAdvanced").show();
	
	var panel = $("#panel");
	
	// dodati rating
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
                   <img class="apt-img" src="https://www.freeiconspng.com/uploads/physician-icon-png-28.png"; alt="" width="115px;"> 
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


function setUpClinicsAppointments(appts){			// predefined
	console.log(appts);
	$('#searchDiv').hide();
	$('#panel').children().not('#navbarId, #searchDiv').remove();
	//$('#panel').children().not(':first').remove();
	
	var panel = $("#panel");
	// treba prikazati mozda na vrhu detalje klinike, kako da ih dobijem/prikazen
	if (appts.length == 0) {
		panel.append(`<div>Nema ovde nicega :( </div>`)
	}
	for (appointment of appts){
		var date = setupDate(appointment.dateLong);
		var timeStart = setupTime(appointment.start)
		panel.append(`<div class="card card-appointment">
        <div class="row cardy" >
              <div class="apt-img-div">
                 <img class="apt-img" src="https://vectorified.com/images/appointment-icon-34.png" alt="" width="115px;"> 
              </div> 
              <div>
                <div class="card-block">
                  <h5 class="card-title">${appointment.appointmentName}: ${date} </h5> 
                  <div style="display: inline-block">
                  <p>Appointment type: appt</p>
                  <p>Date: ${date}</p>
                  <div style="border-bottom: 1px;">
                    <p>Time: ${timeStart}</p> </div>
                    <p> Info: Lorem Ipsum </p>
                    <p> More Info: Lorem Ipsum </p>
                </div>
                  <div style="display: inline-block; margin-left: 50px; margin-right: 30px;">
                  <p>Doctor: ${appointment.doctor} </p>
                  <p>Clinic: ${appointment.clinicName}</p>
                  <p>Clinic Address: ${appointment.clinicAddress}</p>
                  <p>Appointment price: ${appointment.price}</p>
                   <a class="btn btn-primary btn-sm float-right open-ModalAppt" data-toggle="modal" data-target="#modalAppt" 
                   data-id=${appointment.id} data-name="smiljana"
                   data-sth = 'javascript:makeAppointment(${appointment.clinicName})'
                    data-whatever = ${appointment.appointmentName}
                   data-date = ${date} data-appointmentType = '${appointment.appointmentName}' data-price = ${appointment.price}
                   data-time = ${timeStart} data-doctor = '${appointment.doctor}'
                   href="#modalAppt">Schedulee<a/>
                
              <!--  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>
					-->
                
                  <br>
                  
  </div> 
  </div></div></div></div>`);
	}
	
}

function activateModal1(nesto){
	console.log(nesto);
}

function activateModal(appointment){
	console.log("what");
	
	$("body").append(`<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="modalAppt" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onlick="javascript:scheduleAppt(${appointment.id})">Save changes</button>
      </div>
    </div>
  </div>
</div>`); 
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
			//alert("zakazo si lol");
			
			// the below code works fine!!
			$.when( $("#modalAppt").modal("hide")).done(function() {
				$("#modalFeedback").modal("show")
			});
			
			//$("#modalAppt").modal("hide").then($("#modalFeedback").modal("show"));
			//window.location.replace("/homepage.html")
		}
		
	}); 
}

function goToClinics(){
	setUpClinicsPage();
	$("#homeNavBarItem").removeClass("active");
	$("#clinicsNavBarItem").addClass("active");
}