function getRecord(){
	
	
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
	
	
	$('#panel').children().not('#navbarId, #searchDiv, #searchClinics, #searchClinicsAdvanced, #searchDoctors, #searchDoctorsAdvanced').remove();
	$('#panel').children().not('#navbarId, #searchDiv, #searchClinics, #searchClinicsAdvanced, #searchDoctors, #searchDoctorsAdvanced').hide();
		$("#searchClinics").hide();
		$("#searchClinicsAdvanced").hide();
		$("#searchDoctors").hide();
		$("#searchDoctorsAdvanced").hide();
		$("#searchDiv").hide();
	
	
	if (record == null || record === "") {
			showEmptyRecord();
			return;
		}
	
	
	var i = 0;
	
	
	$("#panel").append(`<div class="card card-appointment" id="medical-record">
	         <div class="row cardy" >
	             <div class="apt-img-div">
	                <img class="apt-img" src="/images/icons/medical_record_icon.png"; alt="" width="115px;"> 
	              </div> 
	              <div>
	                <div class="card-block">
	                  <h4 class="card-title">General Information</h4> 
	                  <div style="display: inline-block; max-width: 200px;">
	                    <p>Blood type: ${record.bloodType}</p>
	                    <p>Height: ${record.height}</p>
	                  	<p>Weight: ${record.weight} </p>
	                  </div>
	                  <div style="display: inline-block; margin-left: 50px; margin-right: 30px;max-width: 200px;">
	                  <p> Dioptre: ${record.dioptre} </p>
	                  <p> Allergies: ${record.allergies} </p>
	
	               <br>
	     </div> 
	    </div></div></div></div>`);
	
	
	if (record.pastAppointments.length > 0) {
	
		$("#panel").append(`<div class="" style="margin-top: 50px; margin-left: 150px;">
		         <div class="" 
		              <div>
		                <div class="card-block">
		                  <h4 class="card-title" style="color: gray">Past appointments:</h4> 
		     </div> 
		    </div></div></div></div>`);
		
	}
	else {
		$("#panel").append(`<div><h2>You have no past appointments</h2></div>`);
		addSomeSpace();
		return;
	}
	for (appointment of record.pastAppointments) {
		i = i + 1;
		var idd = "divAppt" + i;
		
		var date = setupDate(appointment.date);
		var clinicRating = appointment.clinicDto.rating;
		var clinicRatingText = appointment.clinicDto.rating;
		if (isNaN(appointment.clinicDto.rating)){
			clinicRatingText = "-";
			clinicRating = 0;
		}
		var doctorRating = appointment.doctorDto.rating;
		var doctorRatingText = appointment.doctorDto.rating;
		if (isNaN(appointment.doctorDto.rating)){
			doctorRatingText = "-";
			doctorRating = 0;
		}
		
		var doctorRate;
		var clinicRate
		if (appointment.hisClinicRating == 0) {
			
			  clinicRate="<a class='open-ModalRating' data-rate=clinic " +
				  " data-clinic-id= " + appointment.clinicDto.id + " data-name = '" + appointment.clinicDto.name + "'" +
              " data-toggle='modal' data-target='#modalRating'  href='#modalRating'>Rate clinic</a>";
		}
		else {
			
			clinicRate = "<p>You rated this clinic with " + appointment.hisClinicRating + "<i class='fas fa-star'></i></p>";
		}
		
		if (appointment.hisDoctorRating == 0) {
			
			  doctorRate="<a class='open-ModalRating' data-rate=doctor " +
			 " data-doctor-id=" + appointment.doctorDto.id + " data-name = '" + appointment.doctorDto.firstName +" "+ appointment.doctorDto.lastName + "'" +
        " data-toggle='modal' data-target='#modalRating'  href='#modalRating'>Rate doctor</a>";
		}
		else {
			
			doctorRate = "<p>You rated this doctor with " + appointment.hisDoctorRating + "<i class='fas fa-star'></i></p>";
			
		}
		var timeStr = setupTime(appointment.start);
		
		$("#panel").append(`<div class="card card-appointment" id=divAppt${i}>
		          <div class="row cardy">
		                <div class="apt-img-div">
		                   <img class="apt-img" src="images/icons/happy_cloud_past_appt.png"; alt="" width="115px;"> 
		                </div> 
		                <div>
		                  <div class="card-block">
		                    <h5 class="card-title clinic-name">${appointment.appointmentName}: ${date}: Dr. ${appointment.doctorDto.firstName} ${appointment.doctorDto.lastName}</h5> 
		                    <div style="display: inline-block; max-width: 200px;">
		                   <p>AppointmentType: ${appointment.appointmentName}</p>
		                   <p>Date: ${date}</p>
		                   <p>Time: ${timeStr}</p>
		                   <p>Doctor: ${appointment.doctorDto.firstName} ${appointment.doctorDto.lastName}</p>
		                  <p>Doctor Rating: ${doctorRatingText} <i class="fas fa-star"></i> (${appointment.doctorDto.votes} votes)</p>    
		                 
		            <!--        <a class="open-ModalRating" data-rate=doctor 
		                    data-doctor-id=${appointment.doctorDto.id} data-name = '${appointment.doctorDto.firstName} ${appointment.doctorDto.lastName}'
		                    data-toggle="modal" data-target="#modalRating"  href="#modalRating">Rate doctor</a> -->
		                   ${doctorRate}
		                    </div>
		                    <div style="display: inline-block; margin-left: 50px; margin-right: 30px; max-width: 200px;">
		                     
		                     <p>Clinic: ${appointment.clinicDto.name}</p>
		                    <p>Address: ${appointment.clinicDto.address} </p>
		                    <p>City: ${appointment.clinicDto.city}</p>
		                    <p>Country: ${appointment.clinicDto.country}</p>
		                   <p>Clinic Rating: ${clinicRatingText} <i class="fas fa-star"></i> (${appointment.clinicDto.votes} votes)</p>   
		                
		             <!--     <a class="open-ModalRating" data-rate=clinic 
		                    data-clinic-id=${appointment.clinicDto.id} data-name = '${appointment.clinicDto.name}'
		                    data-toggle="modal" data-target="#modalRating"  href="#modalRating">Rate clinic</a> -->
		                ${clinicRate}     
		                    <br>
		                   
				<button class="examDetails btn btn-primary btn-sm" onclick="getReportOnAppointment('${idd}', ${appointment.id})">Show details</button>
		    </div> 
		    </div></div></div></div>`);
	}
	addSomeSpace();
}

function showEmptyRecord(){

	$("#panel").append(`<div class="card card-appointment">
		          <div class="row cardy">
		           <div class="apt-img-div"><img class="apt-img" 
		           src="images/icons/empty_record_icon.png"; 
		           alt="" width="150px;"></div> 
		            <h4 style="padding-top: 70px; padding-left: 30px; width: 550px;">We're sorry, but your medical record hasn't been set up yet!</h4> 
		   </div></div>`);
	addSomeSpace();
}


function getReportOnAppointment(divId, apptId){
	
	
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

	var myDiv = $("#" + divId);
	
	if($('#' + divId).find('div.details').length !== 0)
	{
		$('#' + divId).find('div.details').show();   
	}
	else {
		if (examinationReport == null || examinationReport === ""){
			myDiv.append(`<div class="details"><h4>Examination report for this examination hasn't been set up yet!</h4></div>`);	
		}
		else {	// staviti gore neku liniju nesto
			var diagnoses = "Diagnoses: ";
			
			for (d of examinationReport.diagnoses){
				diagnoses += d.name +  ", "
				
			}	
		   diagnoses1 = diagnoses.substring(0, diagnoses.length-2);
			
			var medications = "Medications: ";
			for (m of examinationReport.medications){
				medications += m.name +  ", "
			}	
			
			medications1 = medications.substring(0, medications.length-2);
			
			myDiv.append(`<div class="details"><h2>Examination report</h2>
			<p>${examinationReport.description}</p><p>${diagnoses1}</p><p>${medications1}</p></div>`);		
		}
	}
	
	
	
	$("#" + divId).find("button.examDetails").css("background-color", "purple" );
	$("#" + divId).find("button.examDetails").attr("onclick", "hideExaminationReport(" + "'" + nesto + "'" + ")");
	$("#" + divId).find("button.examDetails").text("Hide details");
}

function hideExaminationReport(divId){
	
	var myDiv = $("#" + divId);
	$("#" + divId).find(".details").hide();
	
	$("#" + divId).find("button.examDetails").css("background-color", "blue" );
	$("#" + divId).find("button.examDetails").attr("onclick", "showExaminationReport('" + divId + "','')");
	$("#" + divId).find("button.examDetails").text("Show details");
}


