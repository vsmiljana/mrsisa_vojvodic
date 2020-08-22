function checkRegLoad(){
	
	$.ajax({
		url: "/usr/checkIfLogged",
		type: "GET",
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
			$("body").show();
		},
		success : function (data) {
			
			window.location.replace("/homepage.html");
		}
		
	}); 
	
}

function checkIfLogged(){
	
	$.ajax({
		url: "/usr/checkIfLogged",
		type: "GET",
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
			console.log("upo u error");
			window.location.replace("/");
		},
		success : function (data) {
			console.log("success");
			console.log(data);
			//d = JSON.parse(data.responseText);
			console.log(data.email);
			console.log("success moze aj");
			//alert("ima");
			$("body").show();
			setUpPatient(data);
			console.log("cao " + data.email);
		}
		
	}); 
	
	
}


function logOut(){
	$.ajax({
		url: "/usr/logOut",
		type: "POST",
		contentType: "application/json",
		dataType: "json",
		
		error: function (response) {
			console.log("upo u error");
			window.location.replace("/");
		},
		success : function (data) {
			console.log("success");
			window.location.replace("/");
		}
		
	}); 
}


function setupDate(milisecs){
	var dateMs = new Date(milisecs);
	var dateString = dateMs.getDate() + "/" + (dateMs.getMonth()+1) + "/" + dateMs.getFullYear();
	return dateString;
}

function setupTime(minutes){
	var hours = Math.floor(minutes/60);
	var minutes = minutes % 60;
	var time = hours + ":";
	if (minutes < 10){
		time += "0";
	}
	time += minutes;
	return time;
}

function dateToMs(dateString){
	// date is in dd/mm/yyyy format
	console.log(dateString);
	var elements = dateString.split("/");
	var day = elements[0];
	var month = elements[1];
	var year = elements[2];
	console.log(day +  " " + month + " " + year);
	var date = new Date(year + "-" + month + "-" + day);
	console.log(date);
	console.log(date.getTime());
	return date.getTime();
}


function timeToMins(timeString){
	var elements = timeString.split(":");
	var hours = parseInt(elements[0]);
	var minutes = parseInt(elements[1]);
	var res = hours*60 + minutes;
	return res;
}