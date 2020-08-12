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
	
	var clinicIdVal = $("#searchButton").val();
	console.log(clinicIdVal);
	
	var clinicId = clinicIdVal;
	
	if (clinicIdVal === "") {
		clinicId = null;
	} 
	
	var searchAppts = {"appointmentName": apptType, "date": dateToSend, "clinicId:": clinicId};

	
	if (clinicId == null) {
		searchClinics(searchAppts);
	}
	
	else {
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
			displayClinics(data, searchParams);
		}
		
	}); 
	
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
			console.log(data);
			
			displayDoctors(data);
		}
		
	}); 
	
}


function displayDoctors(doctors) {
	
	$('#panel').children().not('#navbarId, #searchDiv, #clinicInfoDiv').remove();
	var panel = $("#panel");
	
	for (doctor of doctors){
	
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
          <div class="row cardy" >
                <div class="apt-img-div">
                   <img class="apt-img" src="https://www.freeiconspng.com/uploads/physician-icon-png-28.png"; alt="" width="115px;"> 
                </div> 
                <div>
                  <div class="card-block">
                    <h5 class="card-title clinic-name">Dr. ${doctor.firstName} ${doctor.lastName}</h5> 
                    <div style="display: inline-block; max-width: 200px;">
                      <p>Name: ${doctor.firstName} ${doctor.lastName}</p>
                    </div>
                    <div style="display: inline-block; margin-left: 50px; margin-right: 30px;max-width: 200px;">
                   	 <div class="form-group mb-2">
    <label class="" for="inputAppointments">Appointment: </label>
  </div>
  <select class="custom-select selectTime">
    <option selected>Choose...</option>
    ${options}
  </select>
                    
                    <br>
                    <a class="btn btn-primary btn-sm float-right"  href="#">Make appointment<a/>
                   
                    
                    
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
	$('#panel').children().not('#navbarId, #searchDiv').remove();
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
		   url:setupClinicInfo(id, name, address, price, appointmentName),
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

function setupClinicInfo(id, name, address, price, appointmentName){
	
	$("#searchButton").val(id);
	console.log("da vidim jesam li namjestila" + $("#searchButton").val());
	$('#panel').children().not('#navbarId, #searchDiv').remove();
	var panel = $("#panel");
	
	//dosomething.then()
	
	panel.append(`<div id="clinicInfoDiv" style="margin: 0 auto; width: 500px;">${name}, address: ${address}
	<p id="appointmentName">${appointmentName}</p>
	</div>`);
	
}