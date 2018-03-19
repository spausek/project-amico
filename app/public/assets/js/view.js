$(document).ready(() => {

    let translate = [];

  function getTranslations() {
    $.get("/api/learning", function(data) {
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

    $.post("/api/learning", translate, getTranslations);
    $newTranslation.val("");
  }


});