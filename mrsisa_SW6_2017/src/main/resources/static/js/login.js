function login() {
	console.log("iz login funkcije");
	
	var name = $("#email_input").val();
	var password = $("#password_input").val();
	
	console.log(name);
	console.log(password);
	
	var person = {"email":name, "password":password};
	
	var personjson = JSON.stringify(person);
	console.log(personjson);
	$.ajax({
		url: "/usr/login",
		type: "POST",
		data: personjson,
		headers: {"Authorization": "Basic xxxx"},
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
            errorValue = response.responseText;
            console.log("error");
            alert("nema");
		},
		success : function (data) {
			//d = JSON.parse(data.responseText);
			console.log(data);
			console.log("success");
			//alert("ima");
			window.location.replace("/homepage.html");
		}
		
	}); 
}