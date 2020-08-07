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
			
			window.location.replace("/");
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
	return dateMs.toLocaleDateString();
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