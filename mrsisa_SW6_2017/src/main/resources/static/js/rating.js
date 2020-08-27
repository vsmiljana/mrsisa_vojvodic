function rateDoctor(doctorId){
	var rating = $("#userRatingSelect").val();
	console.log("doctor id: " + doctorId + " rating " + rating);
	
	var ratingDto = {"id": doctorId, "rating": rating};
	var ratingString = JSON.stringify(ratingDto);
	
	$.ajax({
		url: "/usr/rateDoctor",
		type: "POST",
		data: ratingString,
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
            alert("Oops! There has been a problem!");
            getRecord();
		},
		success : function (data) {
			//alert("ocijenio si svaka cast bre")
			// postavi sve opet
			getRecord();

		}
		
	}); 

}

function rateClinic(clinicId){
	var rating = $("#userRatingSelect").val();
	console.log("clinic id: " + clinicId + " rating " + rating);
	var ratingDto = {"id": clinicId, "rating": rating};
	var ratingString = JSON.stringify(ratingDto);
	
	$.ajax({
		url: "/usr/rateClinic",
		type: "POST",
		data: ratingString,
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
            alert("Oops! There has been a problem!")
            getRecord();
		},
		success : function (data) {
			//alert("ocijenio si kliniku svaka cast bre")
			// postavi sve opet
			getRecord();
		}
	}); 

}
