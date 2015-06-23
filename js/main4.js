console.log("yo yo");

  
    //validate name
    function validateName(fname) { 
      var reName = /^[a-zA-Z-' ]+$/;
      if(reName.test(fname)){
        $("#fname").css("background-color", "#ccffcc");
        $("#fnameError").css("display", "none");
        return true;
      }else{
        $("#fname").css("background-color", "#e35152");
        $("#fnameError").css("display", "block");
        return false;
      }
    };

$(document).ready(function(){

    
    //shows placeholder text outside of field when clicked
    $("input").on('keydown', function(e){
      var code = (e.keyCode || e.which);
      if(code == 16 || code == 9) {
        return;
      }
      $(this).next(".focus").fadeIn();
    });

    $("input").blur(function(){
      $(".focus").fadeOut();
    });

    

    // counting characters in input fields
    // $("input").keypress(function() {
    //   if($(this).val().length > 0) {
    //        console.log("greater than one");
    //   } else {
    //        console.log("less than 2");
    //   }
    // });


    //INLINE FORM VALIDATION


    //validate lname
    // function validateLname(lname) { 
    //   var reLname = /^[a-zA-Z-' ]{2,30}$/
    // return reLname.test(lname);
    // };

    // //validate address
    // function validateAddress(address) {
    //   var reAddress = /^[a-zA-Z\s\d\/.]*\d[a-zA-Z\s\d\/.]*$/
    // return reAddress.test(address);
    // };

    // //validate apartment number
    // function validateAptNum(aptnum) {
    //   var reAptNum = /^[a-zA-Z0-9 ]+$/
    // return reAptNum.test(aptnum);
    // };

    // //validate phone number
    // function validatePhoneNum(phone) {
    //   var rePhoneNum = /^[0-9\-().\s]{10,15}$/
    // return rePhoneNum.test(phone);
    // };

    // //regex to validate date
    // function validateDate(date){
    //   var reDate = /^\d{2}[.\/-]\d{2}[.\/-]\d{4}$/
    // return reDate.test(date);
    // };

    // //regex to validate email
    // function validateEmail(email) { 
    //   var reEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return reEmail.test(email);
    // };

    // //regex to validate domain
    // function validateDomain(domain) { 
    //   var reDomain = /^[a-zA-Z0-9.:\/\][a-zA-Z0-9-.]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    // return reDomain.test(domain);
    // };




    // END INLINE FORM VALIDATION



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






