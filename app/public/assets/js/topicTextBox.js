$(document).ready(function() {
    const textMax = 200;
    $('#count_message').html(textMax + ' remaining');
    
    $('#text').keyup(function() {
      const textLength = $('#text').val().length;
      const textRemaining = textMax - textLength;
      
      $('#count_message').html(textRemaining + ' remaining');
    });
    
    $('textarea.expand').focus(function () {
        $(this).animate({ height: "8em" }, 500); 
    });
    });