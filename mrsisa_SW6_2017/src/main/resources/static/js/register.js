
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
    	//event.preventDefault();
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
        
        if ($("#password_input").val() != $("#password2_input").val()){
        	console.log("nope");
        	showValidate();
        	check=false;
        }

        if (check) {
        	
        	
        	register();
        }
        
     
        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });
    

  
    
    $( "#email_input" )
    .focusout(function() {
    	if(validate($("#email_input")) == false){
    		
            showValidate(($("#email_input")));
 
        }
    });

    $( "#password_input" )
    .focusout(function() {
    	if(validate($("#password_input")) == false){
    		
            showValidate(($("#password_input")));
 
        }
    });
    
    $( "#password2_input" )
    .focusout(function() {
    	if(validate($("#password2_input")) == false){
    		
            showValidate(($("#password2_input")));
        }
    	if ($("#password2_input").val() != ($("#password_input").val())){
    		 showValidate(($("#password2_input")));
    	}
    });
    $( "#first_name_input" )
    .focusout(function() {
    	if(validate($("#first_name_input")) == false){
    		
            showValidate(($("#first_name_input")));
 
        }
    });
    $( "#last_name_input" )
    .focusout(function() {
    	if(validate($("#last_name_input")) == false){
    		
            showValidate(($("#last_name_input")));
 
        }
    });
    
    $( "#city_input" )
    .focusout(function() {
    	if(validate($("#city_input")) == false){
    		
            showValidate(($("#city_input")));
 
        }
    });
    $( "#phone_number_input" )
    .focusout(function() {
    	if(validate($("#phone_number_input")) == false){
    		
            showValidate(($("#phone_number_input")));
 
        }
    });   $( "#country_input" )
    .focusout(function() {
    	if(validate($("#country_input")) == false){
    		
            showValidate(($("#country_input")));
 
        }
    });   $( "#address_input" )
    .focusout(function() {
    	if(validate($("#address_input")) == false){
    		
            showValidate(($("#address_input")));
 
        }
    });   $( "#ssn_input" )
    .focusout(function() {
    	if(validate($("#ssn_input")) == false){
    		
            showValidate(($("#ssn_input")));
 
        }
    });
    
    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else if ($(input).attr('name') == "ssn"){
        	if($(input).val().trim().match('^\\d+$') == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showPass = 0;
        }
        
    });


})(jQuery);


function register() {
	console.log("iz login funkcije");
	
	var email = $("#email_input").val();
	var password = $("#password_input").val();
	var first_name = $("#first_name_input").val();
	var last_name = $("#last_name_input").val();
	var ssn = $("#ssn_input").val();
	var phone_number = $("#phone_number_input").val();
	var address = $("#address_input").val();
	var city = $("#city_input").val();
	var country = $("#country_input").val();
	
	console.log(name);
	console.log(password);
	
	var person = {"email":email, "password":password, "firstName": first_name,
			"lastName": last_name, "ssn": ssn, "phoneNumber": phone_number, "address": address, "city": city, "country": country};
	
	var personjson = JSON.stringify(person);
	console.log(personjson);
	$.ajax({
		url: "/usr/register",
		type: "POST",
		data: personjson,
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
            errorValue = response.responseText;
            console.log(response.responseJSON.status);
            console.log("error");
            if (response.responseJSON.status == 400){
            	failedRegisterNotUnique(response.responseJSON.message);
            }
            else {
            }
		},
		success : function (data) {
			
			window.location.replace("/homepage.html");
		}
		
	}); 
}


function failedRegisterNotUnique(message){
	$("#p-error-text").text(message);
	$("#div-incorrect-combo").show();
}
