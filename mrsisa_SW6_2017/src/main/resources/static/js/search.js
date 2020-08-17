function searchAppointments(){
	
	
	
	console.log("klikno na search");

	var apptType = $('#selectAppointments').find(":selected").text();
	//console.log("Appointment Type: "  + apptType);
	if (apptType === "Choose..."){
		apptType = null;
	}
	console.log(apptType);
	var date = new Date($('#dateAppointment').val());
	
	console.log(date);
	var dateToSend = date.getTime();
	
	var clinicIdVal = $("#searchButton").val();
	console.log("clinicIdVal: " + clinicIdVal);
	
	var clinicId = clinicIdVal;
	
	if (clinicIdVal === "") {
		clinicId = null;
	} 
	else {
		clinicId = parseInt(clinicId);
	}
	
	var searchAppts = {"appointmentName": apptType, "date": dateToSend, "clinicId": clinicId};

	
	if (clinicId == null) {
		searchClinics(searchAppts);
	}
	
	else {
		console.log("USOOOOOO SAM OVDEEEEEEEEEEEEEEEEEEEEE")
		console.log(searchAppts);
		searchDoctors(searchAppts);
	}
	
}

function searchClinics(searchParams){
	
	var searchJson = JSON.stringify(searchParams);
	
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
			setupHead(data.searchedAppointment);
			displayClinics(data.foundClinics, searchParams);
		}
		
	}); 
	
}


function setupHead(appt){
	$('#panel').children().not('#navbarId, #searchDiv').remove();
	var panel = $("#panel");
	var dateStr = setupDate(appt.dateLong);
	var name = appt.appointmentName;
	panel.append(`<div id="apptInfo" data-appointment-name='${name}' data-appointment-date=${dateStr} style="width: 600px; margin: 0 auto;"><h5>Search results for ${name} on ${dateStr}</h5>
	<p id="appointmentName" style="display: none">${name}</p><p id="appointmentDate" style="display: none">${dateStr}</p>
	</div>`);
}

function searchDoctors(searchParams){
	
	var searchJson = JSON.stringify(searchParams);
	
	$.ajax({
		url: "/usr/searchApptsOneClinic",
		type: "PUT",
		data: searchJson,
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
            console.log("greska");
		},
		success : function (data) {
			console.log("u dobroj sam funkciji");
			setupHead(data.searchedAppointment);
			//updateHeadingClinic(searchParams);
			//displayDoctors(data);
			setUpClinicInfo(data.clinic);
			displayDoctors(data.doctors);

		}
		
	}); 
	
}

function updateHeadingClinic(searchParams){
	$("#appointmentName").text(searchParams.appointmentName);
	var dateString = setupDate(searchParams.date);
	$("#appointmentDate").text(dateString);
}


function displayDoctors(doctors) {
	
	$('#panel').children().not('#navbarId, #searchDiv, #clinicInfoDiv, #apptInfo').remove();
	var panel = $("#panel");
	var i = 0;
	for (doctor of doctors){
		i = i + 1;
		var divId = "doctor" + i;
		var divIdString = divId.toString();
		console.log("HELOOOOOOOOOOOOOOO" + divIdString);
		var times = ""
		for (apptTime of doctor.availableAppointments){
			times += setupTime(apptTime.start) + " - " + setupTime(apptTime.end) + "&#13;";
		}
		var options ="";
		for (apptTime of doctor.availableAppointments){
			
			time = setupTime(apptTime.start) + " - " + setupTime(apptTime.end);
			
			options += "<option>" + time + "</option>"
			//$(this).closest("selectTime").append($('<option>', {
			 //   value: 1,
			 //   text: time 
			//}));
		}
		
		panel.append(`<div class="card card-appointment">
          <div class="row cardy doctor-card" id=${divId} >
                <div class="apt-img-div">
                   <img class="apt-img" src="https://www.freeiconspng.com/uploads/physician-icon-png-28.png"; alt="" width="115px;"> 
                </div> 
                <div>
                  <div class="card-block">
                    <h5 class="card-title clinic-name">Dr. ${doctor.firstName} ${doctor.lastName}</h5> 
                    <p class="doctorId" style="display: none">${doctor.id}</p>
                    <div style="display: inline-block; max-width: 200px;">
                      <p>Name: ${doctor.firstName} ${doctor.lastName}</p>
                    </div>
                    <div style="display: inline-block; margin-left: 50px; margin-right: 30px;max-width: 200px;">
                   	 <div class="form-group mb-2">
    <label class="" for="inputAppointments">Appointment: </label>
  </div>
  <select class="custom-select selectTime" id=select${i}>
    <!--<option selected>Choose...</option>-->
    ${options}
  </select>
                    
                    <br>
                    <a class="btn btn-primary btn-sm float-right">Make appointment<a/>
                     <a class="btn btn-primary btn-sm float-right"  href="javascript:makeAppointment(divIdString)">Make appointment<a/>
                
                   <a class="btn btn-primary btn-sm float-right open-ModalAppt2" data-toggle="modal" data-target="#modalAppt2" 
                	data-name='${doctor.firstName} ${doctor.lastName}' data-doctor-id=${doctor.id} data-selectId = select${i}
                   href="#modalAppt2">Make appointment<a/>
                    
                    
    </div> 
    </div></div></div></div>`);
		
		for (apptTime of doctor.availableAppointments){
			time = setupTime(apptTime.start) + " - " + setupTime(apptTime.end);
			$(this).closest("selectTime").append($('<option>', {
			    value: apptTime.start,
			    text: time 
			}));
		}
	}
	
}




function displayClinics(clinics, searchParams){ 		// i need search params for when i click on display doctors
	$('#panel').children().not('#navbarId, #searchDiv, #apptInfo').remove();
	var panel = $("#panel");
	
	for (clinic of clinics){
		var info = {"clinic": clinic, "searchParams": searchParams};
		var name = clinic.name;
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
		                    <p>Appt price: ${clinic.price}</p>
		                    </div>
		                    <div style="display: inline-block; margin-left: 50px; margin-right: 30px;">
		                    <p>Address: ${clinic.address} </p>
		                    <p>City: ${clinic.city}</p>
		                    <p>Country: ${clinic.country}</p>
		                    <br>
		                     <a class="btn btn-primary btn-sm"  href="javascript:setUpDoctorDisplay(${clinic.id}, '${clinic.name}', '${clinic.address}', ${clinic.price}, '${searchParams.appointmentName}', ${searchParams.date})
">See doctors<a/>
		                   
		                    <a class="btn btn-primary btn-sm float-right"  href="javascript:getClinicsAppts(${clinic.id})">Apojntmenti predef<a/>
		                   
		                    
		                    
		    </div> 
		    </div></div></div></div>`);
		
	}
	
	
}



function setUpDoctorDisplay(id, name, address, price, appointmentName, date){
	
	
	
	console.log("setUpDoctorDisplay");
	console.log(id);
	console.log(name);
	console.log(id + name + address + price + appointmentName + date);
	//javascript:setUpDoctorDisplay(${clinic.id}, '${clinic.name}', '${clinic.address}', ${clinic.price}, '${searchParams.appointmentName}', ${searchParams.date})
	$.ajax({
		   url:setupClinicInfo(id, name, address, price, appointmentName, date, price),
		   success:function(){
		   setUpDoctors1(appointmentName, date, id);
		}
	})
	
	
	console.log("id klinike: " + id);
	
}

function setUpDoctors1(appointmentName, date, id){
	var searchAppts = {"appointmentName": appointmentName, "date": date, "clinicId": id};
	searchDoctors(searchAppts)
}

function setupClinicInfo(id, name, address, price, appointmentName, date, price){
	
	$("#searchButton").val(id);
	console.log("da vidim jesam li namjestila" + $("#searchButton").val());
	$('#panel').children().not('#navbarId, #searchDiv').remove();
	var panel = $("#panel");
	var date1 = setupDate(date);
	console.log("date1  " + date1);
	//dosomething.then()
	
	panel.append(`<div id="clinicInfoDiv" style="margin: 0 auto; width: 500px;">${name}, address: ${address}
	<p id="appointmentName">${appointmentName}</p><p id="appointmentDate">${date1}</p><p id="appointmentPrice">${price}</p>
	</div>`);
	
}



function makeAppointment(divId){
	console.log(divId);
	//$("#" + divId).closest(".doctorId").show();
}




function searchClinicsFromForm() {
	var input = $("#clinicNameInput").val().toUpperCase();
	//var input = $("#clinicNameInput").val();
	console.log(input);
	var divs = $("div.clinic");
    console.log(divs);
    for (div1 of divs){
        var contentA = $(div1).data('name');
        if (!contentA.toUpperCase().includes(input)){
            $(div1).hide();
        }
        else {
        	 $(div1).show();
        }
    }
	
}