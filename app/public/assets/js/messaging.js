$(document).ready(() => {

    let translate = [];

  function getTranslations() {
    $.get("/api/home", function(data) {
      translate = data;
    });
  }

  function amicoTranslate(event) {
    event.preventDefault();
    var translate = {
      message: messageInput.val().trim(),
      languageOne: languageInputOne.val().trim(),
      languageTwo: languageinputTwo.val().trim()
    };

    $.post("/api/home", translate, getTranslations);
    $newTranslation.val("");
  }

  $(function () {
    $(".postButton").on("click", function(event){
      event.preventDefault();
      let newMessage = {
        message: $("#messageInput").val().trim(),
      }
      console.log(newMessage);
      $("#messageInput").val('');
      $(".media-body").append();
      // $.ajax("/api/home", {
      //   type: "POST",
      //   data: newMessage
      // }).then(function(){
      //   console.log("Created new message");
      //   location.reload();
      // });
    });
  });


});