function login() {
	console.log("iz login funkcije");
	
	var name = $("#email_input").val();
	var password = $("#password_input").val();
	
	console.log(name);
	console.log(password);
	
	var person = {"name":name, "pass":password, "id": 1};
	
	var personjson = JSON.stringify(person);
	console.log(personjson);
	$.ajax({
		url: "kc/person",
		type: "POST",
		data: personjson,
		contentType: "application/json",
		dataType: "json",
		/*complete : function (data) {
			d = JSON.parse(data.responseText);
			
		} */
	}); 
}