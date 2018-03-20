$(document).ready(function() {
    var text_max = 200;
    $('#count_message').html(text_max + ' remaining');
    
    $('#text').keyup(function() {
      var text_length = $('#text').val().length;
      var text_remaining = text_max - text_length;
      
      $('#count_message').html(text_remaining + ' remaining');
    });
    
    $('textarea.expand').focus(function () {
        $(this).animate({ height: "8em" }, 500); 
    });
    });