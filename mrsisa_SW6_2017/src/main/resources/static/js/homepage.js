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
				window.location.replace("/login.html");
			},
			success : function (data) {
				//d = JSON.parse(data.responseText);
				console.log(data);
				console.log("success");
				//alert("ima");
				$("body").show();
				setUpAppointments(data);
				
			}
			
		}); 
}

function setUpAppointments(data){
	var panel = $("#panel");
	
	if (data.length == 0){
		panel.append(`<div>Znam da je jadno al aj bar nesto pise :'( A pisace da nema apojntmenta.</div>`);
	}
	
	for (var appointment of data){
		 panel.append( `<div class="card card-appointment">
          <div class="row cardy" >
                <div class="apt-img-div">
                   <img class="apt-img" src="/images/icons/upcoming_appts_ico.png" alt="" width="115px;"> 
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
                    <br>
                    
    </div> 
    </div></div></div></div>`);
		//panel.append(`<div>${appointment.appointmentName}</div>`);
		//console.log(appointment);
	}
	
}