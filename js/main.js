

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




    //regex to validate email
    function validateEmail(email) { 
  
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }

    function validate(){
      $("#result").text("");
      var email = $("#email").val();
      if (validateEmail(email)) {
        console.log("email is valid - yay!")
      } else {
        $("#result").text(email + " is not valid a valid email address");
        $("#result").css("color", "red");
      }
      return false;
    }

    $("form").bind("submit", validate);






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






