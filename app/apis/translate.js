const translate = require("google-translate-api");



const amicosTranslate = function (message, languageOne, languageTwo) {
// translate(message, { to: language })
//   .then(res => {
//     console.log(res.text);
//     console.log(res.from.language.iso);
//     return res.text;
//   })
//   .catch(err => {
//     console.error("This is the error: " + err);
//   })
translate(message, { from: languageOne, to: languageTwo })
  .then(res => {
    console.log(res.text);
    //=> Ik spreek Nederlands!
    console.log(res.from.text.autoCorrected);
    //=> true
    console.log(res.from.text.value);
    //=> I [speak] Dutch!
    console.log(res.from.text.didYouMean);
    //=> false
  })
  .catch(err => {
    console.error(err);
  });
}

amicosTranslate('I spek Spanish', 'en', 'es');

module.exports = amicosTranslate;
