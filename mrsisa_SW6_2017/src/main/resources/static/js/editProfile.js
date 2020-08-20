function showProfile(){
	//displayUserInformation("nestp");
	setupProfile();
}


function setupProfile(){
	$.ajax({
		url: "/usr/current",
		type: "GET",
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
			window.location.replace("/login.html");
		},
		success : function (data) {
			// $.getScript("js/validateEdit.js").then(displayUserInformation(data));
			displayUserInformation(data);
			//whatev(data);
		}
		
	}); 
}

function whatev(data){
	 $.ajax({
		   url: $.getScript("js/validateEdit.js"),
		   success:function(){
		   displayUserInformation(data);
		}
	})
}

function displayUserInformation(user){
	//function1();
	$('#panel').children().not('#navbarId').remove();
	$("#panel").append(`<div>EDIT PROFILE</div>`)
	$("#panel").append(`
	
	<script>
/*$( "input.edit-input" )
  .focusout(function() {
    
  });*/
  
$(".edit-input").focusout(function(){
console.log("mamaaaaaaaaaaaaaaaaaaaaaaa");
  checkInput($(this));
});
</script>
	
	<div style="width: 600px; margin: 0 auto;">	
	<style>.error-message{display: none; color: red;}</style>
	
    <form class="needs-validation validate-form-edit" onsubmit="event.preventDefault();" id="form-edit-profile" novalidate>
        <div class="form-group">
            <label for="inputEmail">Email</label>
            <input type="text" class="form-control" id="inputEmail" value=${user.email} disabled>
        </div>
        <div class="form-group">
            <label for="inputSsn">Social Security Number</label>
            <input type="text" class="form-control" id="inputSsn" value=${user.ssn} disabled>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputFirstName">First Name</label>
            <input type="text" class="form-control edit-input" id="inputFirstName" value='${user.firstName}' required>
			<div class="error-message">
          Please enter your first name.
        </div>
          </div>
          <div class="form-group col-md-6">
            <label for="inputLastName">Last Name</label>
            <input type="text" class="form-control edit-input" id="inputLastName" value='${user.lastName}' required>
             <div class="error-message">
          Please enter your last name.
        </div>
          </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputAddress">Address</label>
              <input type="text" class="form-control edit-input" id="inputAddress" value='${user.address}'>
              <div class="error-message">
          Please enter your address.
        </div>
            </div>
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control edit-input" id="inputCity" value='${user.city}'>
              <div class="error-message">
          Please enter your city.
        </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCountry">Country</label>
              <input type="text" class="form-control edit-input" id="inputCountry" value='${user.country}'>
              <div class="error-message">
          Please enter your country.
        </div>
            </div>
            <div class="form-group col-md-6 validate-input">
              <label for="inputPhoneNumber">Phone Number</label>
              <input type="text" class="form-control edit-input" id="inputPhoneNumber" value=${user.phoneNumber}>
              <div class="error-message">
          Please enter your phone number.
        </div>
            </div>
          </div>
      

        <button  class="btn btn-primary" style="margin: 0 auto;" onclick="checkChanges111()">Save changes</button>
      </form>
    </div>`);
	
}



function checkChanges111(){
	//var goodToGo = checkIfFormIsValid();
	//console.log(goodToGo);
	//if (goodToGo == true){
	//	submitChanges();
	//}
	if (checkIfFormIsValid()){
		submitChanges();
	}
///	if (doSth()){
//		submitChanges();
//	}
}

function submitChanges(){
	alert("sve je ok, moze izmjena");
	// proveriti jel sve ok
	// na beku provjeriti ejl email taj email koji mijenjam... preko postmana npr mogu svasta da napravim ako ne validiram
	// na beku
	var email = $("#inputEmail").val();
	var ssn = $("#inputSsn").val();
	var firstName = $("#inputFirstName").val();
	var lastName = $("#inputLastName").val();
	var address = $("#inputAddress").val();
	var city = $("#inputCity").val();
	var country = $("#inputCountry").val();
	var phoneNumber = $("#inputPhoneNumber").val();
	
	var user = {"email": email, "ssn": ssn, "firstName": firstName, "lastName": lastName, "address": address,
			"city": city, "country": country, "phoneNumber": phoneNumber};
	
	var userString = JSON.stringify(user);
	
	$.ajax({
		url: "/usr/editProfileInfo",
		type: "PUT", 
		contentType: "application/json",
		data: userString,
		error: function (response) {
			//window.location.replace("/login.html");
		console.log("desila se neka greska");
			
		},
		success : function (data) {
		//d = JSON.parse(data.responseText);
//			$("body").show();
			alert("izmenio si");
		}
		
	});
}


function doSth(){
	console.log("nesto sam uradio");
	return true;
}

//function checkValidity(){
	
//}

function checkIfFormIsValid(){
	var valid = true; 
	$("#form-edit-profile :input").not("button").each(function(){
		
		var input = $(this); // This is the jquery object of the input, do what you will
		 console.log(input);
		 if($(input).val().trim() == ''){
		        // prikazi gresku
				console.log("ne moze " + input.name);
				$(input).siblings(".error-message").show();
				valid = false;
		 }
		 else {
			 $(input).siblings(".error-message").hide();
		 }
		 console.log(valid);
		 //return valid;
		 });
	return valid;
	
}

function checkIfValid(input){
	console.log(input);
	var val = input.val();
	console.log(val);
	if($(input).val().trim() == ''){
        // prikazi gresku
		console.log("ne moze " + input.name);
		return false;
    }
	else {
		//sakrij poruku greske
	}
}

function checkInput(input){
	if($(input).val().trim() == ''){
        // prikazi gresku
		console.log("ne moze " + input.name);
		$(input).siblings(".error-message").show();
		fail = false;
 }
 else {
	 $(input).siblings(".error-message").hide();
 }
}