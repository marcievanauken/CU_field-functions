console.log("yo main5.js");
$(document).ready(function(){
    
    //shows placeholder text outside of field when clicked
    $("input").on('keydown', function(e){
      var code = (e.keyCode || e.which);
      if(code == 16 || code == 9 || code == 91) {
        return;
      }
      $(this).next(".focus").fadeIn();
    });

    $("input").blur(function(){
      $(".focus").fadeOut();
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

    //validate apartment number
    // function validateAptNum(aptnum) {
    //   var reAptNum = /^[a-zA-Z0-9 ]+$/
    // return reAptNum.test(aptnum);
    // };

    //validate zip code
    function validateZip(zipcode) {
      var reZip = /^(\d{5}$)|(^\d{5}-\d{4})$/
    return reZip.test(zipcode);
    }

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

    // INLINE VALIDATION

    // var correct = $(this).blur(function(){
    //   $(this).parent().find(".error").hide();
    //   $(this).parent().find(".correct").fadeIn();
    //   $(this).parent().find(".incorrect").hide();
    // });



    //name validation (first and last)
    $(".validName").blur(function(){
      var name = $(this).val();
      var nameCount = name.length;
      console.log(name + " " + nameCount);
        if (validateName(name) && nameCount >= 2){
          console.log("good!");
            // return correct;
            $(this).parent().find(".error").hide();
            $(this).parent().find(".correct").fadeIn();
            $(this).parent().find(".incorrect").hide();  
        } else if (name = " " || name === 0) {
          console.log("Nothing was entered");
            $(this).parent().find(".error").hide();
            $(this).parent().find(".correct").hide();
            $(this).parent().find(".incorrect").hide();
        } else {
          console.log("NOT good");
            $(this).parent().find(".error").show();
            $(this).parent().find(".correct").hide();
            $(this).parent().find(".incorrect").fadeIn();
        }
    });

    //address validation
    $(".validLetNum").blur(function(){
      var letnum = $(this).val();
        if (validateLetterNum(letnum)) {
          console.log("letnum is good!");
          $(this).parent().find(".error").hide();
          $(this).parent().find(".correct").fadeIn();
          $(this).parent().find(".incorrect").hide();
        } else if (letnum = " " || letnum === 0) {
            console.log("Nothing was entered");
            $(this).parent().find(".error").hide();
        } else {
            console.log("letnum is NOT good");
            $(this).parent().find(".error").show();
            $(this).parent().find(".correct").hide();
            $(this).parent().find(".incorrect").fadeIn();
        }
    });

    //zipcode validation
    $("#zip").blur(function(){
      var zip = $("#zip").val();
      if (validateZip(zip)) {
        console.log("zipcode is good!");
        $(this).parent().find(".error").hide();
        $(this).parent().find(".correct").fadeIn();
        $(this).parent().find(".incorrect").hide();
      } else if (zip = " " || zip === 0) {
          console.log("Nothing was entered");
          $(this).parent().find(".error").hide();
          $(this).parent().find(".correct").hide();
          $(this).parent().find(".incorrect").hide();
      } else {
          console.log("zipcode is NOT good");
          $(this).parent().find(".error").show();
          $(this).parent().find(".correct").hide();
          $(this).parent().find(".incorrect").fadeIn();
      }
    });

    //phone number validation
    $("#phone").blur(function(){
      var phone = $("#phone").val();
      if (validatePhoneNum(phone)) {
        console.log("phone is good!");
        $(this).parent().find(".error").hide();
        $(this).parent().find(".correct").fadeIn();
        $(this).parent().find(".incorrect").hide();
      } else if (phone = " " || phone === 0) {
          console.log("Nothing was entered");
          $(this).parent().find(".error").hide();
          $(this).parent().find(".correct").hide();
          $(this).parent().find(".incorrect").hide();
      } else {
        console.log("phone is NOT good");
          $(this).parent().find(".error").show();
          $(this).parent().find(".correct").hide();
          $(this).parent().find(".incorrect").fadeIn();
      }
    });

    //email validation
    $("#email").blur(function(){
      var email = $("#email").val();
      if (validateEmail(email)) {
        console.log("email is good!");
        $(this).parent().find(".error").hide();
        $(this).parent().find(".correct").fadeIn();
        $(this).parent().find(".incorrect").hide();
      } else if (email = " " || email === 0) {
          console.log("Nothing was entered");
          $(this).parent().find(".error").hide();
          $(this).parent().find(".correct").hide();
          $(this).parent().find(".incorrect").hide();
      } else {
          console.log("email is not good!");
          $(this).parent().find(".error").show();
          $(this).parent().find(".correct").hide();
          $(this).parent().find(".incorrect").fadeIn();
      }
    });

    //date validation
    $("#date").blur(function(){
      var date = $("#date").val();
      if (validateDate(date)) {
        console.log("date is good!");
        $(this).parent().find(".error").hide();
        $(this).parent().find(".correct").fadeIn();
        $(this).parent().find(".incorrect").hide();
      } else if (date = " " || date === 0) {
          console.log("Nothing was entered");
          $(this).parent().find(".error").hide();
          $(this).parent().find(".correct").hide();
          $(this).parent().find(".incorrect").hide();
      } else {
          console.log("date is not good!");
          $(this).parent().find(".error").show();
          $(this).parent().find(".correct").hide();
          $(this).parent().find(".incorrect").fadeIn();
      }
    });

    //domain validation
    $("#website").blur(function(){
      var domain = $("#website").val();
      if (validateDomain(domain)) {
        console.log("domain is good!");
        $(this).parent().find(".error").hide();
        $(this).parent().find(".correct").fadeIn();
        $(this).parent().find(".incorrect").hide();
      } else if (domain = " " || domain === 0) {
          console.log("Nothing was entered");
          $(this).parent().find(".error").hide();
          $(this).parent().find(".correct").hide();
          $(this).parent().find(".incorrect").hide();
      } else {
          console.log("domain is not good!");
          $(this).parent().find(".error").show();
          $(this).parent().find(".correct").hide();
          $(this).parent().find(".incorrect").fadeIn();
      }
    });

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

      // var aptnum = $("#aptnum").val();
      // if (validateAptNum(aptnum)) {
      //   console.log("apt num is valid - yay!");
      // } else {
      //   console.log("apt num is NOT valid");
      //   $("#result4").text(aptnum + " is not a valid apartment number");
      //   $("#result4").css("color", "red");
      // };

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






