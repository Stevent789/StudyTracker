$(document).ready(function() {

    var subject = $('#subject'),
        hoursToComplete = $('#hour1'),
        hoursComplete = $('#hour2');

hourInfo = [];

var calNumber;
var calTotal = [];
$('.row div').on('click', function(){
    $(this).toggleClass('red');
    if( $(this).hasClass('red')){
      $(this).css('background-color', 'red');
      calNumber = $(this).html();
      seatsTotal.push(calNumber);
      console.log(calTotal);
    }else{
      $(this).css('background-color', 'green');
      var calNumber = $(this).html();
      var ind = seatsTotal.indexOf(calNumber);
      seatsTotal.splice(ind, 1);
      console.log(calTotal);
    }
  });

    //    this makes the form appear when the sready button is clicked
    $('#ready-button').on('click', function(){
          $('.type').css('visibility', 'visible');
          //$('#marquee').css('visibility', 'hidden');
        //  $('form').addClass('w3-animate-right');
    });

    // this links the text fields to create values for our variables
    $('#form-submit').on('click', function(){
        console.log('submit complete');
        var subject = $('#subject').val();
        var hoursToComplete = $('#hour1').val();
        var hoursComplete = $('#hour2').val();
        var userInfo = {
            subject: subject,
            assignments: hoursToComplete,
            hoursComplete: hoursComplete,
          };
        console.log(userInfo.subject);
        hourInfo.push(userInfo);
        $('form').css('visibility', 'hidden');
        hoursToComplete = [];
        assignments = '';
        console.log(userInfo.subject)


    });
});
