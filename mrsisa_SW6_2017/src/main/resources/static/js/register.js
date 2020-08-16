
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
        	//console.log("nesto");
        	
        	//var name = $("#email_input").value;
        	//var password = $("#password_input").value;
        	
        	//console.log(name);
        	
        	
        	register();
        }
        
        //console.log("nesto");
    	
    	//var name = $("#email_input").value;
    	//var password = $("#password_input").value;
    	
    	//console.log(name);
        
        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });
    

    //for(var i=0; i<input.length; i++) {
    //    if(validate(input[i]) == false){
    //        showValidate(input[i]);
    //        check=false;
    //    }
    //}
    
    /*$input.forEach(element => element.focusout(function(){
    	if(validate($("#email_input")) == false){
    		console.log("iz for ica");
            showValidate(element);
 
        }
    }));*/
    
    $( "#email_input" )
    .focusout(function() {
    	if(validate($("#email_input")) == false){
    		//console.log("nope");
            showValidate(($("#email_input")));
 
        }
    });

    $( "#password_input" )
    .focusout(function() {
    	if(validate($("#password_input")) == false){
    		//console.log("nope");
            showValidate(($("#password_input")));
 
        }
    });
    
    $( "#password2_input" )
    .focusout(function() {
    	if(validate($("#password2_input")) == false){
    		//console.log("nope");
            showValidate(($("#password2_input")));
        }
    	if ($("#password2_input").val() != ($("#password_input").val())){
    		 showValidate(($("#password2_input")));
    	}
    });
    $( "#first_name_input" )
    .focusout(function() {
    	if(validate($("#first_name_input")) == false){
    		//console.log("nope");
            showValidate(($("#first_name_input")));
 
        }
    });
    $( "#last_name_input" )
    .focusout(function() {
    	if(validate($("#last_name_input")) == false){
    		//console.log("nope");
            showValidate(($("#last_name_input")));
 
        }
    });
    
    $( "#city_input" )
    .focusout(function() {
    	if(validate($("#city_input")) == false){
    		//console.log("nope");
            showValidate(($("#city_input")));
 
        }
    });
    $( "#phone_number_input" )
    .focusout(function() {
    	if(validate($("#phone_number_input")) == false){
    		//console.log("nope");
            showValidate(($("#phone_number_input")));
 
        }
    });   $( "#country_input" )
    .focusout(function() {
    	if(validate($("#country_input")) == false){
    		//console.log("nope");
            showValidate(($("#country_input")));
 
        }
    });   $( "#address_input" )
    .focusout(function() {
    	if(validate($("#address_input")) == false){
    		//console.log("nope");
            showValidate(($("#address_input")));
 
        }
    });   $( "#ssn_input" )
    .focusout(function() {
    	if(validate($("#ssn_input")) == false){
    		//console.log("nope");
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
		headers: {"Authorization": "Basic xxxx"},
		contentType: "application/json",
		//dataType: "json",
		
		error: function (response) {
            errorValue = response.responseText;
            console.log("error");
            alert("vec postoji neko sa tim ssn ili emailom");
		},
		success : function (data) {
			//d = JSON.parse(data.responseText);
			console.log(data);
			console.log("success registrovo si se");
			//alert("ima");
			window.location.replace("/homepage.html");
		}
		
	}); 
}

