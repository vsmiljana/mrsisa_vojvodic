function setUpPatient(data){
	console.log("setup patient");
	console.log("iz setUpPatient")
	console.log(data);
		$.ajax({
			url: "/usr/getUpcomingAppointments",
			type: "GET",
			contentType: "application/json",
			//dataType: "json",
			
			error: function (response) {
				window.location.replace("/");
			},
			success : function (data) {
				//d = JSON.parse(data.responseText);
				console.log(data);
				console.log("success");
				//alert("ima");
				$("body").show();
				setUpAppointments(data);
				setupDateForSearch();
				
			}
			
		}); 
}

function setUpAppointments(data){
	var panel = $("#panel");
	
	if (data.length == 0){
		panel.append(`<div>Znam da je jadno al aj bar nesto pise :'( A pisace da nema apojntmenta.</div>`);
	}
	
	for (var appointment of data){
		//var dateMs = new Date(appointment.dateLong);
		//var date = dateMs.toLocaleDateString();
		var date = setupDate(appointment.dateLong);
		var timeStart = setupTime(appointment.start)
		panel.append( `<div class="card card-appointment upcomingAppointment">
          <div class="row cardy" >
                <div class="apt-img-div">
                   <img class="apt-img" src="/images/icons/upcoming_appts_ico.png" alt="" width="115px;"> 
                </div> 
                <div>
                  <div class="card-block">
                    <h5 class="card-title">${appointment.appointmentName}: ${date}: ${appointment.doctor} </h5> 
                    <div class="col-info-card" style="display: inline-block;">
                    <p>Appointment type: ${appointment.appointmentName}</p>
                    <p>Date: ${date}</p>
                    <div style="border-bottom: 1px;">
                      <p>Time: ${timeStart}</p> </div>
                       <p>Doctor: ${appointment.doctor} </p>
                  </div>
                    <div class="col-info-card" style="display: inline-block;">
                   
                    <p>Clinic: ${appointment.clinicName}</p>
                    <p>Clinic Address: ${appointment.clinicAddress}</p>
                    <p>Appointment price: ${appointment.price}</p>
                    <br>
                    
    </div> 
    </div></div></div></div>`);
		//panel.append(`<div>${appointment.appointmentName}</div>`);
		//console.log(appointment);
	}
	
}

function setupDateForSearch(){
	  var inputDateObject = document.getElementById("dateAppointment");
	  //inputDateObject.min = "2020-22-08";
	  var today = new Date();
	  var year = today.getFullYear();
	  var month = today.getMonth() + 1;
	  var day = today.getDate();
	  console.log(year + " " + month  + " " + day)
	  var monthStr = month;
	  var dayStr = day;
	  if (month < 10) {
		  monthStr = "0" + month;
	  }
	  if (day < 10){
		  dayStr = "0" + day;
	  }
	  var dateStr = year + "-" + monthStr + "-" + dayStr;
	  dateStr = dateStr.toString();
	  console.log(dateStr);
	  document.getElementById("dateAppointment").min = dateStr;
	  document.getElementById("dateAppointment").value = dateStr;
	  //document.getElementById("dateAppointment").min = "2020-08-22";
}