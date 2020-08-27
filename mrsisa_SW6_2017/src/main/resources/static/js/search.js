function searchAppointments(){
	
	
	
	console.log("klikno na search");

	var apptType = $('#selectAppointments').find(":selected").text();
	//console.log("Appointment Type: "  + apptType);
	if (apptType === "Choose..."){
		//alert("Please choose type of appointment")
		apptType = null;
		$("#search-appts-err").show();
		return;
	}
	else {
		$("#search-appts-err").hide();
	}
	console.log(apptType);
	var date = new Date($('#dateAppointment').val());
	date.setHours(23);
	date.setMinutes(59);
	
	var today = new Date();
	
	if (date <= today){
		//alert("Samo da bih imala u istoriji")
	}
	
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
	$('#panel').children().not('#navbarId, #searchDiv,  #searchClinics, #searchClinicsAdvanced, #searchDoctors, #searchDoctorsAdvanced').remove();
	var panel = $("#panel");
	//$("#searchClinics").hide();
	//$("#searchClinicsAdvanced").hide();
	var dateStr = setupDate(appt.dateLong);
	var name = appt.appointmentName;
	panel.append(`<div id="apptInfo" data-appointment-name='${name}' data-appointment-date=${dateStr} style="margin-left: 150px; margin-top: 20px;">
	<h5>Search results for <span class="highlight-text">${name}</span> on <span class="highlight-text">${dateStr}</span>:</h5>
	
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
	
	$('#panel').children().not('#navbarId, #searchDiv, #clinicInfoDiv, #apptInfo, #searchDoctors, #searchDoctorsAdvanced, #searchClinics, #searchClinicsAdvanced').remove();
	
	$("#searchDoctors").show();
	//$("#searchDoctorsAdvanced").show();
	$("#searchClinics").hide();
	$("#searchClinicsAdvanced").hide();
	
	var panel = $("#panel");
	var i = 0;
	
	if (doctors.length == 0) {
		makeSorryDiv("Sorry! No doctors found.");
		return;
	}
	
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
		var rating = doctor.rating;
		var ratingText = doctor.rating;
		if (isNaN(doctor.rating)){
			ratingText = "-";
			rating = 0;
		}
		
		panel.append(`<div class="card card-appointment doctor"  data-id = ${doctor.id} data-first-name = '${doctor.firstName}'
		data-last-name = '${doctor.lastName}' data-rating = ${rating}>
          <div class="row cardy doctor-card" id=${divId} >
                <div class="apt-img-div">
                   <img class="apt-img" src="/images/icons/doctor_icon.png"; alt="" width="115px;"> 
                </div> 
                <div>
                  <div class="card-block">
                    <h5 class="card-title clinic-name">Dr. ${doctor.firstName} ${doctor.lastName}</h5> 
                    <p class="doctorId" style="display: none">${doctor.id}</p>
                    <div style="display: inline-block; max-width: 200px;">
                      <p>Name: ${doctor.firstName} ${doctor.lastName}</p>
                    	 <p> Rating: ${ratingText} <i class='fas fa-star'></i> (${doctor.votes} votes)</p>
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
             <!--       <a class="btn btn-primary btn-sm float-right">Make appointment<a/>
                     <a class="btn btn-primary btn-sm float-right"  href="javascript:makeAppointment(divIdString)">Make appointment<a/>
                -->
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
	addSomeSpace();
	
}



function makeSorryDiv(message){
	$("#panel").append(`<div class="reg-inf-display" style="color:gray"><h5>${message}</h5></div>`);	
	addSomeSpace();
}

function makeInfoIsEmptyDiv(message){
	$("#panel").append(`<div class="reg-inf-display" style="color:gray; margin: 0 auto;"><h5>${message}</h5></div>`);	
	addSomeSpace();
}

function displayClinics(clinics, searchParams){ 		// i need search params for when i click on display doctors
	$('#panel').children().not('#navbarId, #searchDiv, #apptInfo, #searchClinics, #searchClinicsAdvanced, #searchDoctors, #searchDoctorsAdvanced').remove();
	
	$("#searchClinics").show();
	$("#searchDoctors").hide();
	$("#searchDoctorsAdvanced").hide();
	
	var panel = $("#panel");
	
	if (clinic.lenght == 0){
		makeSorryDiv("Sorry! 0 search results found!");
	}
	
	for (clinic of clinics){
		var info = {"clinic": clinic, "searchParams": searchParams};
		var name = clinic.name;
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
				          <div class="row cardy" >
				                <div class="apt-img-div">
				                   <img class="apt-img" src="/images/icons/clinic_icon.png"; alt="" width="115px;"> 
				                </div> 
				                <div>		                  
				                  <div class="card-block" style="width: 550px" >
		                    <h5 class="card-title clinic-name">${clinic.name}</h5> 
		                    <p>${clinic.description} </p>
		                    <p> ${appointmentsStrings}</p>                   
		                    <p>Address: ${clinic.address}, ${clinic.city}, ${clinic.country}</p>
				             <p>Appointment price: ${clinic.price}</p>
				             <p>Rating: ${ratingText} <i class="fas fa-star"></i> (${clinic.votes} votes)</p>   
				             <br>
				    <a class="btn btn-primary btn-sm"  href="javascript:setUpDoctorDisplay(${clinic.id}, '${clinic.name}', '${clinic.address}', ${clinic.price}, '${searchParams.appointmentName}', ${searchParams.date})
		">See available doctors!<a/>
				                   
				                    <a style="margin-left: 20px;" href="javascript:getClinicsAppts(${clinic.id})">Predefined appointments<a/>
				                   
				                    
				                    
				    </div> 
				    </div></div></div></div>`);
		
	}
	
	addSomeSpace();
	
	
}



function setUpDoctorDisplay(id, name, address, price, appointmentName, date){
	
	//setUpClinicInfo(data.clinic);
	//setUpSearch(data.clinic.appointmentNames, data.clinic.id);
	//setUpDoctorsRegular(data.doctors);
	
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
	
	// ili da mi ga dinamicki pravi
	
	$("#searchButton").val(id);
	console.log("da vidim jesam li namjestila" + $("#searchButton").val());
	$('#panel').children().not('#navbarId, #searchDiv, #searchClinics, #searchClinicsAdvanced , #searchDoctors, #searchDoctorsAdvanced').remove();
	$("#searchClinics").hide();
	$("#searchClinicsAdvanced").hide();
	$("#searchDoctors").show();
	//$("#searchDoctorsAdvanced").show();
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
	var inputName = $("#clinicNameInput").val().toUpperCase();
	var inputAddress = $("#clinicAddressInput").val().toUpperCase();
	var inputRating = $("#clinicRatingSelect").find(":selected").val();
	//var input = $("#clinicNameInput").val();

	var divs = $("div.clinic");
    console.log(divs);
    for (div1 of divs){
        var name = $(div1).data('name').toUpperCase();
        var address = $(div1).data('address').toUpperCase();
        var city = $(div1).data('city').toUpperCase();
        var country = $(div1).data('country').toUpperCase();
        var rating = $(div1).data('rating');
        if (!name.includes(inputName)){
            $(div1).hide();
            continue;
        }
        if (!address.includes(inputAddress) && !city.includes(inputAddress) && !country.includes(inputAddress)){
        	$(div1).hide();
        	continue;
        }
        if (rating < inputRating && rating != 0){
        	$(div1).hide();
        	continue;
        }
        
        else {
        	 $(div1).show();
        }
    }
	
}

function searchDoctorsFromForm() {
	var inputFirstName = $("#firstNameInput").val().toUpperCase();
	var inputLastName = $("#lastNameInput").val().toUpperCase();
	var inputRating = $("#doctorRatingSelect").find(":selected").val();
	//var input = $("#clinicNameInput").val();

	var divs = $("div.doctor");
    console.log(divs);
    for (div1 of divs){
        var firstName = $(div1).data('first-name').toUpperCase();
        var lastName = $(div1).data('last-name').toUpperCase();
        var rating = $(div1).data('rating');
        if (!firstName.includes(inputFirstName)){
            $(div1).hide();
            continue;
        }
        if (!lastName.includes(inputLastName)){
            $(div1).hide();
            continue;
        }
        if (rating < inputRating && rating != 0){
        	$(div1).hide();
        	continue;
        }
        
        else {
        	 $(div1).show();
        }
    }
	
}


function showAdvancedDoctorSearch(){
	$("#searchDoctorsAdvanced").show();
	$("#toggleAdvancedDoctorSearch").attr("href", "javascript:hideAdvancedDoctorSearch()");
	$("#toggleAdvancedDoctorSearch").html("Hide advanced dr search");
}

function hideAdvancedDoctorSearch(){
	$("#searchDoctorsAdvanced").hide();
	$("#toggleAdvancedDoctorSearch").attr("href", "javascript:showAdvancedDoctorSearch()");
	$("#toggleAdvancedDoctorSearch").html("Show advanced dr search");
}


function showAdvancedSearch(){
	console.log("why are you like this")
	$("#searchClinicsAdvanced").show();
	$("#toggleAdvancedClinicSearch").attr("href", "javascript:hideAdvancedSearch()");
	$("#toggleAdvancedClinicSearch").html("Hide advanced search");
}

function hideAdvancedSearch(){
	$("#searchClinicsAdvanced").hide();
	$("#toggleAdvancedClinicSearch").attr("href", "javascript:showAdvancedSearch()");
	$("#toggleAdvancedClinicSearch").html("Show advanced search");
}


function searchClinicsAll(){
	var input = $("#searchClinicsAllInput").val().toUpperCase();
	var divs = $("div.clinic");
    console.log(divs);
    for (div1 of divs){
        var name = $(div1).data('name').toUpperCase();
        var address = $(div1).data('address').toUpperCase();
        var city = $(div1).data('city').toUpperCase();
        var country = $(div1).data('country').toUpperCase();
        var rating = $(div1).data('rating').toString();
        console.log(rating);
        console.log($(div1).data('rating'));
        
        if (name.includes(input) || address.includes(input) || city.includes(input) || country.includes(input) || rating.includes(input)){
        	//$( "div:contains('" + input + "')" ).css( "text-decoration", "underline" );
        	//var elements = $(div1).find("p:contains(" + input + ")").css("background-color", "yellow");
        	//var elements1 = $(div1).find("p:contains(" + input + ")");
        	//console.log(elements1);
        	//highlight(elements1, input)
        	$(div1).show();
        }
        else {
        	 $(div1).hide();
        }
    }
}

function searchDoctorsAll(){
	var input = $("#searchDoctorsAllInput").val().toUpperCase();
	var divs = $("div.doctor");
    console.log(divs);
    for (div1 of divs){
        var firstName = $(div1).data('first-name').toUpperCase();
        var lastName = $(div1).data('last-name').toUpperCase();
        var rating = $(div1).data('rating').toString();
       
        if (firstName.includes(input) || lastName.includes(input) ||rating.includes(input)){
        	//$( "div:contains('" + input + "')" ).css( "text-decoration", "underline" );
        	//var elements = $(div1).find("p:contains(" + input + ")").css("background-color", "yellow");
        	//var elements1 = $(div1).find("p:contains(" + input + ")");
        	//console.log(elements1);
        	//highlight(elements1, input)
        	$(div1).show();
        }
        else {
        	 $(div1).hide();
        }
    }
}

function clearAdvancedSearch(){
	$("#clinicNameInput").val("");
	var inputAddress = $("#clinicAddressInput").val("");
	//var inputRating = $("#clinicRatingSelect").find(":selected").val();
	$('#clinicRatingSelect select').val(1);
	var inputRating = $("#clinicRatingSelect").find(":selected").val();
	$('#clinicRatingSelect option[value=1]').attr('selected','selected');
	$('#clinicRatingSelect option[value=1]').prop('selected', true);
	var inputRating2 = $("#clinicRatingSelect").find(":selected").val();
	
	console.log("hoces li " + inputRating2);
	searchClinicsFromForm();
}

function clearAdvancedDoctorSearch(){
	$("#firstNameInput").val("");
	$("#lastNameInput").val("");
	//var inputRating = $("#clinicRatingSelect").find(":selected").val();
	$('#doctorRatingSelect select').val(1);
	
	$('#doctorRatingSelect option[value=1]').attr('selected','selected');
	$('#doctorRatingSelect option[value=1]').prop('selected', true);
	var inputRating2 = $("#doctorRatingSelect").find(":selected").val();
	
	console.log("hoces li " + inputRating2);
	searchDoctorsFromForm();
}

function clearRegularDoctorSearch(){
	$("#searchDoctorsAllInput").val("");
	$("div.doctor").show();
}

function clearRegularClinicSearch(){
	$("#searchClinicsAllInput").val("");
	$("div.clinic").show();
}


function highlight(elements, text) {
	for (e of elements){
		var el = $(e);
		console.log(e);
		// ili samo da mijenjam cisto e?
		//var inputText = document.getElementById("inputText");
		  //var innerHTML = inputText.innerHTML;
		  var innerHTML = e.innerHTML;
		  
		  var index = innerHTML.toUpperCase().indexOf(text.toUpperCase());
		  if (index >= 0) { 
		   innerHTML = innerHTML.substring(0,index) + "<span class='highlight' style='background-color: blue'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
		   e.innerHTML = innerHTML;
		  }
	}
	  
	}