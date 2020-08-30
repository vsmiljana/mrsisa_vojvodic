function rateDoctor(doctorId){
	var rating = $("#userRatingSelect").val();

	
	var ratingDto = {"id": doctorId, "rating": rating};
	var ratingString = JSON.stringify(ratingDto);
	
	$.ajax({
		url: "/usr/rateDoctor",
		type: "POST",
		data: ratingString,
		contentType: "application/json",
		
		error: function (response) {
            alert("Oops! There has been a problem!");
            getRecord();
		},
		success : function (data) {
			
			getRecord();

		}
		
	}); 

}

function rateClinic(clinicId){
	var rating = $("#userRatingSelect").val();

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
		
			getRecord();
		}
	}); 

}
