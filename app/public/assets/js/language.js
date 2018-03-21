
  const languages = 
    {
        "Afrikaans": "af",
        "Albanian": "sq",
        "Arabic": "ar",
        "Armenian": "hy",
        "Belarusian": "be",
        "Catalan": "ca",
        "Chinese-simple": "zh-CN",
        "Croatian": "hr",
        "Czech": "cs",
        "Danish": "da",
        "English": "en",
        "Estonian": "et",
        "Filipino": "tl",
        "Finnish": "fi",
        "French": "fr",
        "German": "de",
        "Greek": "el",
        "Hebrew": "iw",
        "Hindi": "hi",
        "Hungarian": "hu",
        "Indonesian": "id",
        "Irish": "ga",
        "Italian": "it",
        "Japanese": "ja",
        "Korean": "ko",
        "Norwegian": "no",
        "Persian": "fa",
        "Polish": "pl",
        "Portuguese": "pt",
        "Russian": "ru",
        "Spanish": "es",
        "Swedish": "sv",
        "Thai": "th",
        "Turkish": "tr",
        "Ukrainian": "uk",
        "Vietnamese": "vi",
        "Yiddish":"yi"
    };
  
  
const languageOne = Object.keys(languages);
//console.log(languageOne);

for (languageTwo in languages) {
    //console.log(languages[languageTwo]);
    nativeLanguage = '<option>' + languageTwo + '</option>';
    studiedLanguage = '<option>' + languages[languageTwo] + '</option>';

    //$(languageScroll).appendTo('#native-language');
    console.log(nativeLanguage);
    console.log(studiedLanguage);
}