const translate = require("google-translate-api");



const amicosTranslate = function (message, languageOne, languageTwo) {

translate(message, { from: languageOne, to: languageTwo })
  .then(res => {
    console.log(res.from.text.value);
    console.log(res.from.text.autoCorrected);
    console.log(res.text);
    console.log(res.from.text.didYouMean);
    const translated = {
        originalMessage: message,
        autoCorrectedMessage: res.from.text.value,
        correctedMessage: res.from.text.autoCorrected,
        dymMessage: res.from.text.didYouMean,
        translatedMessage: res.text,
    }
    for (finalMessage in translated) {
      console.log("for in loop: ",translated[finalMessage]);
    }
    console.log("The console says: ", translated);
    return translated;
  })
  .catch(err => {
    console.error(err);
  });
}
amicosTranslate("whut do you want to do today?", 'en', 'es');



module.exports = amicosTranslate;