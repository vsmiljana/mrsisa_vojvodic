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
			displayUserProfileHome(data);
			//displayUserInformation(data);
			//whatev(data);
		}
		
	}); 
}

function whatev(data){
	 $.ajax({
		   url: $.getScript("js/validateEdit.js"),
		   success:function(){
			   
		//displayUserInformation(data);
		}
	})
}


function displayUserProfileHome(user){
	$('#panel').children().not('#navbarId, #searchDiv, #searchClinics, #searchClinicsAdvanced, #searchDoctors, #searchDoctorsAdvanced').remove();
	$('#panel').children().not('#navbarId, #searchDiv, #searchClinics, #searchClinicsAdvanced, #searchDoctors, #searchDoctorsAdvanced').hide();
		$("#searchClinics").hide();
		$("#searchClinicsAdvanced").hide();
		$("#searchDoctors").hide();
		$("#searchDoctorsAdvanced").hide();
		$("#searchDiv").hide();
		// ma sve opet da load omg
	//	var userString = JSON.stringify(user);
	//	console.log(userString);
	//	var newTemp = userString.replace(/"/g, "'");
	//	console.log(newTemp);
		
		var panel = $("#panel");

		panel.append(`<div class="card card-appointment doctor" id="general-info-div">
	         <div class="row cardy" >
	             <div class="apt-img-div">
	                <img class="apt-img" src="https://assets.dryicons.com/uploads/icon/svg/5584/25eea25e-4514-459a-965f-f07761e47fed.svg"; alt="" width="115px;"> 
	              </div> 
	              <div>
	                <div class="card-block">
	                  <h5 class="card-title">General Information</h5> 
	                  <div style="display: inline-block; max-width: 200px;">
	                    <p>Email: ${user.email}
	                    <p>Name: ${user.firstName} ${user.lastName}</p>
	                  	<p>Social Secirity Number: ${user.ssn} </p>
	                  	<a id="a-edit-inf" href=#>Change Info </a>
	                  </div>
	                  <div style="display: inline-block; margin-left: 50px; margin-right: 30px;max-width: 200px;">
	                  <p> Address: ${user.address} </p>
	                  <p> City: ${user.city} </p>
	                  <p> Country: ${user.country} </p>
	                  <p> Phone Number: ${user.phoneNumber} </p>
	                  <a href="javascript:changePasswordSetup()"> Change password </a>
	               <br>
	     </div> 
	    </div></div></div></div>`);
		//"javascript:displayEditInformation('${newTemp}')"
		
	
		 $("#a-edit-inf").attr("href", "javascript:displayEditInformation('" + user.email + "','"+  user.firstName +"','"  +
				 user.lastName+ "','" + user.ssn + "','" + user.address + "','" + user.city + "','" + user.country
				 + "','"+ user.phoneNumber + "')");

	}

         
function displayEditInformation(email, firstName, lastName, ssn, address, city, country, phoneNumber){
	console.log("evo me, tu sam")
	
	//function1();
	$('#panel').children().not('#navbarId, #searchDiv, #searchClinics, #searchClinicsAdvanced, #searchDoctors, #searchDoctorsAdvanced, #general-info-div').remove();

	$("#general-info-div").hide();
	
//	var user = JSON.parse(userS);
	
	
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
	
	<div style="width: 600px; margin: 0 auto;" id="edit-info-div">	
	<style>.error-message{display: none; color: red;}</style>
	<h3>Edit profile </h3>
    <form class="needs-validation validate-form-edit" onsubmit="event.preventDefault();" id="form-edit-profile" novalidate>
        <div class="form-group">
            <label for="inputEmail">Email</label>
            <input type="text" class="form-control" id="inputEmail" value=${email} disabled>
        </div>
        <div class="form-group">
            <label for="inputSsn">Social Security Number</label>
            <input type="text" class="form-control" id="inputSsn" value=${ssn} disabled>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputFirstName">First Name</label>
            <input type="text" class="form-control edit-input" id="inputFirstName" value='${firstName}' required>
			<div class="error-message">
          Please enter your first name.
        </div>
          </div>
          <div class="form-group col-md-6">
            <label for="inputLastName">Last Name</label>
            <input type="text" class="form-control edit-input" id="inputLastName" value='${lastName}' required>
             <div class="error-message">
          Please enter your last name.
        </div>
          </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputAddress">Address</label>
              <input type="text" class="form-control edit-input" id="inputAddress" value='${address}'>
              <div class="error-message">
          Please enter your address.
        </div>
            </div>
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control edit-input" id="inputCity" value='${city}'>
              <div class="error-message">
          Please enter your city.
        </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCountry">Country</label>
              <input type="text" class="form-control edit-input" id="inputCountry" value='${country}'>
              <div class="error-message">
          Please enter your country.
        </div>
            </div>
            <div class="form-group col-md-6 validate-input">
              <label for="inputPhoneNumber">Phone Number</label>
              <input type="text" class="form-control edit-input" id="inputPhoneNumber" value=${phoneNumber}>
              <div class="error-message">
          Please enter your phone number.
        </div>
            </div>
          </div>
      
			<button  type="button" class="btn btn-primary" style="margin: 0 auto;" onclick="cancelChanges()">Cancel</button>
        <button type="submit" class="btn btn-primary" style="margin: 0 auto;" onclick="checkChanges111()">Save changes</button>
      </form>
    </div>`);
	
}


function cancelChanges(){
	$('#panel').children().not('#navbarId, #searchDiv, #searchClinics, #searchClinicsAdvanced, #searchDoctors, #searchDoctorsAdvanced, #general-info-div').remove();
	
	//$("#edit-info-div").hide(); 	// bolje remove
	//$("#change-password-div").hide();
	$("#general-info-div").show();
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
			setupProfile();
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


function changePasswordSetup(){
	$("#general-info-div").hide();
	$("#panel").append(`
	
		<script>
/*$( "input-old-password" )
  .focusout(function() {
    
  });*/
  
$("#input-old-password").focusout(function(){
  checkInput($(this));
  
});
$("#input-new-password1").focusout(function(){
  checkInput($(this));
  
});
$("#input-new-password2").focusout(function(){
  checkInputReEnteredPassword();
});
</script>
	
	<div style="width: 400px; margin: 0 auto;" id="change-password-div">	
	<style>.error-message{display: none; color: red;}</style>
	<h3>Change password </h3>
    <form class="needs-validation validate-form-edit" onsubmit="event.preventDefault();" id="form-change-password" novalidate>
        <div class="form-group">
            <label for="inputOldPassword">Old password</label>
            <input type="password" class="form-control" id="input-old-password" placeholder="Old password">
            <div class="error-message">
			Please enter your old password.
			</div>
        </div>
        <div class="form-group">
            <label for="input-new-password1">New password</label>
            <input type="password" class="form-control" id="input-new-password1" placeholder="New password">
            <div class="error-message">
			Please enter your new password.
			</div>
        </div>
        
         <div class="form-group">
            <label for="input-new-password2">Re-enter new password</label>
            <input type="password" class="form-control" id="input-new-password2" placeholder="Re-enter new password">
            <div class="error-message">
			Re-entered password must match new password.
			</div>
        </div>
		<div id="wrongPassword" style="display: none;"><p style=" color: red; font-weight:bold; font-size: 16px; ">The old password you entered is incorrect!</p></div>
        
		<button  type="button" class="btn btn-primary" style="margin: 0 auto;" onclick="cancelChanges()">Cancel</button>
        <button type="submit" class="btn btn-primary" style="margin: 0 auto;" onclick="checkPasswordChange()">Change password</button>
      </form>
    </div>
	
	`);
	
}



function checkPasswordChange(){
	
	if (checkPasswordForm()){
		submitPasswordChange();
	}
	
}


function submitPasswordChange(){
	var oldPassword = $("#input-old-password").val()
	var newPassword = $("#input-new-password1").val();

	var passwordChange = {"oldPassword": oldPassword, "newPassword": newPassword};
	var passwordChangeStr = JSON.stringify(passwordChange);
	
	$.ajax({
		url: "/usr/changePassword",
		type: "PUT", 
		contentType: "application/json",
		data: passwordChangeStr,
		error: function (response) {
			console.log(response.responseJSON.message);
			if (response.responseJSON.message === "Incorrect current password!") {
				failedPasswordChange();	
			}
			//alert("Oops..." + response)
			
		},
		success : function (data) {
			alert("Pormijenio si lozinku bravoooooooo");
			setupProfile();
		}
		
	});
	
	
}


function checkPasswordForm(){
	
	if (($("#input-old-password").val() === "")){
		console.log("prazna stara")
		return false;
	}
	else if (($("#input-new-password1").val() === "")){
		console.log("prazna nova")
		return false;
	}
	else if (!checkInputReEnteredPassword()) {
		console.log("ne")
		return false;
	}
	else {
		return true;
		}
	
	
}

function  checkInputReEnteredPassword(){
	var password1 = $("#input-new-password1").val();
	var password2 = $("#input-new-password2").val();
	console.log(password2);
	if (password1 != password2 || password2 === ""){
		$("#input-new-password2").siblings(".error-message").show();
		console.log("asdkajdalksdjasdlkjasdjklkadsjlkjladsjklads vracam false")
		return false;
	} 
	else {
		console.log("checkinputeasdafsd")
		$("#input-new-password2").siblings(".error-message").hide();
		return true;
	}
}


function failedPasswordChange(){
	$("#wrongPassword").show();
}	

//https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-czVNHm8tMBuKTNTTy9-aLF3YmZq8f2rC_A&usqp=CAU
//https://assets.dryicons.com/uploads/icon/svg/5586/3f459e73-a14f-4a49-8622-d1de841f41ca.svg
//https://assets.dryicons.com/uploads/icon/svg/5586/3f459e73-a14f-4a49-8622-d1de841f41ca.svg

//https://assets.dryicons.com/uploads/icon/svg/5584/25eea25e-4514-459a-965f-f07761e47fed.svg
//https://assets.dryicons.com/uploads/icon/svg/5583/f85440c7-0eb2-4786-9df3-6ab347f4ba59.svg