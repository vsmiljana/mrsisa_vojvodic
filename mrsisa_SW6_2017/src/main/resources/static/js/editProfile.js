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
	<div style="width: 600px; margin: 0 auto;">
    <form>
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
            <input type="text" class="form-control" id="inputFirstName" value='${user.firstName}'>
          </div>
          <div class="form-group col-md-6">
            <label for="inputLastName">Last Name</label>
            <input type="text" class="form-control" id="inputLastName" value='${user.lastName}'>
          </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputAddress">Address</label>
              <input type="text" class="form-control" id="inputAddress" value='${user.address}'>
            </div>
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" value='${user.city}'>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCountry">Country</label>
              <input type="text" class="form-control" id="inputCountry" value='${user.country}'>
            </div>
            <div class="form-group col-md-6 validate-input">
              <label for="inputPhoneNumber">Phone Number</label>
              <input type="text" class="form-control" id="inputPhoneNumber" value=${user.phoneNumber}>
            </div>
          </div>
          <div class="wrap-input50 validate-input" data-validate = "Enter Address">
						<input id="address_input" class="input100" type="text" name="address">
						<span class="focus-input100" data-placeholder="Address"></span>
					</div>

        <button type="" class="btn btn-primary" onclick="javascript:submitChanges()"style="margin: 0 auto;">Save changes</button>
      </form>
    </div>`);
	
}



function submitChanges(){
	alert("submit changes");
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