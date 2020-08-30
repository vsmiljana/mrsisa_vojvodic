function login() {

	
	var name = $("#email_input").val();
	var password = $("#password_input").val();

	
	var person = {"email":name, "password":password};
	
	var personjson = JSON.stringify(person);
	console.log(personjson);
	$.ajax({
		url: "/usr/login",
		type: "POST",
		data: personjson,
		headers: {"Authorization": "Basic xxxx"},
		contentType: "application/json",
		
		
		error: function (response) {
            var errorMessage = response.responseJSON.message;
            showError(errorMessage);
		},
		success : function (data) {
			
			window.location.replace("/homepage.html");
		}
		
	}); 
}


function showError(message){
	$("#p-error-text").text(message);
	$("#div-incorrect-combo").show()
}

function checkIfLogged(){
	$.ajax({
		url: "/usr/checkIfUserLogged",
		type: "GET",
		contentType: "application/json",
		
		error: function (response) {
			window.location.replace("/homepage.html");
		},
		success : function (data) {
			//window.location.replace("/homepage.html");
		}
		
	}); 
}