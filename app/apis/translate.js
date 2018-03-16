const translate = require("google-translate-api");



const amicosTranslate = function (message, language) {
translate(message, { to: language })
  .then(res => {
    console.log(res.text);
    console.log(res.from.language.iso);
    return res.text;
  })
  .catch(err => {
    console.error("This is the error: " + err);
  })
}


module.exports = amicosTranslate;
