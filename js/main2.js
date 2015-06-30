$(document).ready(function(){


    //shows placeholder text outside of field when clicked
    $("input").on('keydown', function(e){
      var code = (e.keyCode || e.which);
      if(code == 16 || code == 9 || code == 91) {
        return;
      }
      $(this).next(".focus").fadeIn();
    });

    
    //ERROR CHECKING - REGEX FUNCTIONS
  
    //validate name
    function validateName(name) { 
      var reName = /^[^0-9!@#$%^&*()]+$/
    return reName.test(name);
    };

    //validate address
    function validateLetterNum(letnum) {
      var reAddress = /^[a-zA-Z\s\d\/.]*\d[a-zA-Z\s\d\/.]*$/
    return reAddress.test(letnum);
    };

    //validate phone number
    function validatePhoneNum(phone) {
      var rePhoneNum = /^[0-9\-().+\s]{10,15}$/
    return rePhoneNum.test(phone);
    };

    //regex to validate date
    function validateDate(date){
      var reDate = /^\d{2}[.\/-]\d{2}[.\/-]\d{4}$/
    return reDate.test(date);
    };

    //regex to validate email
    function validateEmail(email) { 
      var reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reEmail.test(email);
    };

    //regex to validate domain
    function validateDomain(domain) { 
      var reDomain = /^[a-zA-Z0-9.:\/\][a-zA-Z0-9-.]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    return reDomain.test(domain);
    };

    //INLINE VALIDATION
    //name validation (first and last)
    $(".validName").blur(function () {
        var name = $(this).val();
        var nameCount = name.length;
        console.log(name + " " + nameCount);
        if (nameCount === 0 || nameCount == " ") {
            console.log("nothing was entered");
            $(this).parent().find(".error").hide();
        }
        else if (validateName(name) && nameCount >= 2) {
            console.log("good!");
            inlineValidate(this, { '.error': 'hide', '.correct': 'fadeIn', '.incorrect': 'hide' });
        } else {
            console.log("NOT good");
            inlineValidate(this, { '.error': 'show', '.correct': 'hide', '.incorrect': 'fadeIn' });
        }
    });

    //address validation
    $(".validLetNum").blur(function () {
        var letnum = $(this).val();
        var letnumCount = letnum.length;
        if (letnumCount === 0 || letnumCount == " ") {
            console.log("nothing was entered");
            $(this).parent().find(".error").hide();
        }
        else if (validateLetterNum(letnum)) {
            console.log("letnum is good!");
            inlineValidate(this, { '.error': 'fadeOut', '.correct': 'fadeIn', '.incorrect': 'hide' });
        } else {
            console.log("letnum is NOT good");
            inlineValidate(this, { '.error': 'show', '.correct': 'hide', '.incorrect': 'fadeIn' });
        }
    });

    //phone number validation
    $("#phone").blur(function(){
      var phone = $("#phone").val();
      var phoneCount = phone.length;
      if (phoneCount === 0 || phoneCount == " "){
          console.log("nothing was entered");
          $(this).parent().find(".error").hide();
        }
      else if (validatePhoneNum(phone)) {
          console.log("phone is good!");
          inlineValidate(this, { '.error': 'hide', '.correct': 'fadeIn', '.incorrect': 'hide' });
      } else {
        console.log("phone is NOT good");
          inlineValidate(this, { '.error': 'show', '.correct': 'hide', '.incorrect': 'fadeIn' });
      }
    });

    //email validation
    $("#email").blur(function(){
      var email = $("#email").val();
      var emailCount = email.length;
      if (emailCount === 0 || emailCount == " "){
          console.log("nothing was entered");
          $(this).parent().find(".error").hide();
        }
      else if (validateEmail(email)) {
        console.log("email is good!");
          inlineValidate(this, { '.error': 'hide', '.correct': 'fadeIn', '.incorrect': 'hide' });
      } else {
          console.log("email is not good!");
          inlineValidate(this, { '.error': 'show', '.correct': 'hide', '.incorrect': 'fadeIn' });
      }
    });

    //date validation
    $("#date").blur(function(){
      var date = $("#date").val();
      var dateCount = date.length;
      if (dateCount === 0 || dateCount == " "){
          console.log("nothing was entered");
          $(this).parent().find(".error").hide();
        }
      else if (validateDate(date)) {
        console.log("date is good!");
          inlineValidate(this, { '.error': 'hide', '.correct': 'fadeIn', '.incorrect': 'hide' });
      } else {
          console.log("date is not good!");
          inlineValidate(this, { '.error': 'show', '.correct': 'hide', '.incorrect': 'fadeIn' });
      }
    });

    //domain validation
    $("#website").blur(function(){
      var domain = $("#website").val();
      var domainCount = domain.length;
      if (domainCount === 0 || domainCount == " "){
          console.log("nothing was entered");
          $(this).parent().find(".error").hide();
        }
      else if (validateDomain(domain)) {
          console.log("domain is good!");
          inlineValidate(this, { '.error': 'hide', '.correct': 'fadeIn', '.incorrect': 'hide' });
      } else {
          console.log("domain is not good!");
          inlineValidate(this, { '.error': 'show', '.correct': 'hide', '.incorrect': 'fadeIn' });
      }
    });

    function inlineValidate(t, o) {
        var i;
        for (i in o) {
            $(t).parent().find(i)[o[i]]();
        }
    };
    //END INLINE VALIDATION

    // Full form - onclick validation
    function validate(){

      var name = $(".validName").val();
      var nameCount = name.length;
      console.log(name + " " + nameCount);
      if (validateName(name) && nameCount >= 2) {
        console.log("name is valid - yay!");
      } else {
        console.log("name is NOT valid");
        $("#result").text(name + " is not valid name");
        $("#result").css("color", "red");
      };

      var lname = $("#lname").val();
      var lnameCount = lname.length;
      console.log(lname + " " + lnameCount);
      if (validateName(name) && lnameCount >= 2) {
        console.log("last name is valid - yay!");
      } else {
        console.log("last name is NOT valid");
        $("#result2").text(lname + " is not valid last name");
        $("#result2").css("color", "red");
      };

      var letnum = $(".validLetNum").val();
      if (validateLetterNum(letnum)) {
        console.log("letnum is valid - yay!");
      } else {
        console.log("letnum is NOT valid");
        $("#result3").text(letnum + " is not a valid address");
        $("#result3").css("color", "red");
      };

      var zipcode= $("#zip").val();
      if (validateZip(zipcode)) {
        console.log("zip code is valid - yay!");
      } else {
        console.log("zipcode is NOT valid");
        $("#result9").text(zipcode + " is not a valid zip code");
        $("#result9").css("color", "red");
      };

      var phone = $("#phone").val();
      if (validatePhoneNum(phone)) {
        console.log("phone number is valid - yay!");
      } else {
        console.log("phone is NOT valid");
        $("#result7").text(phone + " is not a valid phone number");
        $("#result7").css("color", "red");
      };

      var date = $("#date").val();
      if (validateDate(date)) {
        console.log("date is valid - yay!");
      } else {
        console.log("date is NOT valid");
        $("#result5").text(date + " is not a valid date");
        $("#result5").css("color", "red");
      };

      var email = $("#email").val();
      if (validateEmail(email)) {
        console.log("email is valid - yay!");
      } else {
        console.log("email is NOT valid");
        $("#result6").text(email + " is not valid a valid email address");
        $("#result6").css("color", "red");
      };

      var domain = $("#website").val();
      if (validateDomain(domain)) {
        console.log("website is valid - yay!");
      } else {
        console.log("website is NOT valid");
        $("#result8").text(domain + " is not valid a valid website");
        $("#result8").css("color", "red");
      };

      return false;
    };

    $("form").bind("submit", validate);


    // END onclick validation

    //making placeholder fontawesome icon
    $('#iconified').on('keyup', function() {
          var input = $(this);
          if(input.val().length === 0) {
              input.addClass('empty');
          } else {
              input.removeClass('empty');
          }
      });

    
    // Background Image fader
    $('#slideshow').cycle({
        fx: 'fade',
        pager: '#smallnav', 
        pause:   1, 
        speed: 1800,
        timeout:  5500 
    });

    //Thank You Text Change
    function InOut( elem )
    {
     elem.delay()
         .fadeIn(900)
         .delay(3500)
         .fadeOut(
              function(){
                 
                 if(elem.next().length > 0) // if there is a next element
                   {InOut( elem.next() );} // use it
                 else
                   {InOut( elem.siblings(':first'));} // if not, then use go back to the first sibling

               }
             );
    }

    $(function(){
    $('.thank-you li').hide();
    InOut( $('.thank-you li:first') );

    });

  
}); //end document.ready






