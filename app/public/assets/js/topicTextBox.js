$(document).ready(function() {
    const textMax = 200;
    $('#count_message').html(textMax + ' remaining');
    
    $('#messageInput').keyup(function() {
      const textLength = $('#messageInput').val().length;
      const textRemaining = textMax - textLength;
      
      $('#count_message').html(textRemaining + ' remaining');
    });
    
    $('textarea.expand').focus(function () {
        $(this).animate({ height: "8em" }, 500); 
    });
    });