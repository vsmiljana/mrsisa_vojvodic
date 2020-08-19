function getRecord(){
	
	
	$.ajax({
		url: "/usr/record",
		type: "GET",
		contentType: "application/json",
		
		error: function (response) {
            console.log("greska");
		},
		success : function (data) {
			if (data == null || data === "") {
				showEmptyRecord();
			}
			else {
				showRecord(data);
			}
		}
		
	}); 
	
}

function showRecord(record){
	$('#searchDiv').hide();		// vidjeti jel ovo dobro...
	$('#panel').children().not('#navbarId, #searchDiv').remove(); 		// i ovo isto...
	console.log(record);
	$("#panel").append(`<div><h1>Medical record</h1></div>`);
	var i = 0;
	$("#panel").append(`<div><h2>General info</h2><p>Blood type: ${record.bloodType}</p>
	<p>Height: ${record.height}</p><p>Weight: ${record.weight}</p><p>Dioptre: ${record.dioptre}</p>
	<p>Allergies: ${record.allergies}</p></div>`);
	if (record.pastAppointments.length > 0) {
		$("#panel").append(`<div><h2>Past Appointments</h2></div>`);
	}
	else {
		$("#panel").append(`<div><h2>You have no past appointments</h2></div>`);
	}
	for (appointment of record.pastAppointments) {
		i = i + 1;
		var idd = "divAppt" + i;
		console.log("ocjen klinike" + appointment.clinicDto.rating + "ocjena doktor " + appointment.doctorDto.rating); 
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
		console.log(appointment.hisClinicRating);
		var doctorRate;
		var clinicRate
		if (appointment.hisClinicRating == 0) {
			console.log("moze da ocijeni kliniku " + appointment.clinicDto.name);
			  clinicRate="<a class='open-ModalRating' data-rate=clinic " +
				  " data-clinic-id= " + appointment.clinicDto.id + " data-name = '" + appointment.clinicDto.name + "'" +
              " data-toggle='modal' data-target='#modalRating'  href='#modalRating'>Rate clinic</a>";
		}
		else {
			console.log(" ne moze da ocijeni  kliniku "+ appointment.clinicDto.name)
			clinicRate = "<p>You rated this clinic with " + appointment.hisClinicRating + "<i class='fas fa-star'></i></p>";
		}
		
		if (appointment.hisDoctorRating == 0) {
			console.log("moze da ocijeni doktora " + appointment.doctorDto.firstName);
			  doctorRate="<a class='open-ModalRating' data-rate=doctor " +
			 " data-doctor-id=" + appointment.doctorDto.id + " data-name = '" + appointment.doctorDto.firstName +" "+ appointment.doctorDto.lastName + "'" +
        " data-toggle='modal' data-target='#modalRating'  href='#modalRating'>Rate doctor</a>";
		}
		else {
			console.log("ne moze da ocijeni doktora "+ appointment.doctorDto.firstName)
			doctorRate = "<p>You rated this doctor with " + appointment.hisDoctorRating + "<i class='fas fa-star'></i></p>";
			
		}
		//$("#panel").append(`<div id=divAppt${i}><h3>${appointment.appointmentName} ${date}</h3>
		//<button onclick="getReportOnAppointment('${idd}', ${appointment.id})">Show details</button></div>`);
		$("#panel").append(`<div class="card card-appointment" id=divAppt${i}>
		          <div class="row cardy">
		                <div class="apt-img-div">
		                   <img class="apt-img" src="https://cdn3.iconfinder.com/data/icons/cute-icon-weather/512/Untitled-4-16-512.png"; alt="" width="115px;"> 
		                </div> 
		                <div>
		                  <div class="card-block">
		                    <h5 class="card-title clinic-name">${appointment.appointmentName}: ${date}: Dr. ${appointment.doctorDto.firstName} ${appointment.doctorDto.lastName}</h5> 
		                    <div style="display: inline-block; max-width: 200px;">
		                   <p>AppointmentType: ${appointment.appointmentName}</p>
		                   <p>Date: ${date}</p>
		                   <p>Time: ${appointment.start}</p>
		                   <p>Doctor: ${appointment.doctorDto.firstName} + ${appointment.doctorDto.lastName}</p>
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
}

function showEmptyRecord(){
	$('#searchDiv').hide();		
	$('#panel').children().not('#navbarId, #searchDiv').remove(); 		
	$("#panel").append(`<div><h1>Your medical record has not been set up yet!</h1><h2> Because i have no clinic administrator (he does this)
	and you probably just registered so understand me :( </h2></div>`);
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
		else {	// staviti gore neku liniju nesto
			var diagnoses = "Diagnoses: ";
			console.log(examinationReport.diagnoses.length + 'dijagnozeeeeeee');
			for (d of examinationReport.diagnoses){
				diagnoses += d.name +  ", "
				console.log(d);
			}	
		   diagnoses1 = diagnoses.substring(0, diagnoses.length-2);
			console.log(diagnoses + "dijatnogee");
			var medications = "Medications: ";
			for (m of examinationReport.medications){
				medications += m.name +  ", "
			}	
			console.log(diagnoses + medications);
			medications1 = medications.substring(0, medications.length-2);
			//console.log( medications1 + diagnoses1);
			myDiv.append(`<div class="details"><h2>Examination report</h2>
			<p>${examinationReport.description}</p><p>lolsie</p><p>${diagnoses1}</p><p>${medications1}</p></div>`);		
		}
	}
	//console.log(examinationReport);
	
	
	$("#" + divId).find("button.examDetails").css("background-color", "red" );
	$("#" + divId).find("button.examDetails").attr("onclick", "hideExaminationReport(" + "'" + nesto + "'" + ")");
	$("#" + divId).find("button.examDetails").text("Hide details");
}

function hideExaminationReport(divId){
	console.log("sta sam ovde dobila " + divId);
	var myDiv = $("#" + divId);
	$("#" + divId).find(".details").hide();
	//$("#" + divId).closest("button").attr("onclick", "showExaminationReport(" + divId + ",'')");
	$("#" + divId).find("button.examDetails").css("background-color", "blue" );
	$("#" + divId).find("button.examDetails").attr("onclick", "showExaminationReport('" + divId + "','')");
	$("#" + divId).find("button.examDetails").text("Show details");
}


