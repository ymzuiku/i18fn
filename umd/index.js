!function(n,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):(n=n||self).vanillaNormalizeCss=a()}(this,function(){"use strict";var language="en",nowLang="English",isProd="production"===process.env.NODE_ENV;navigator&&(navigator.language?language=navigator.language:navigator.browserLanguage&&(language=navigator.browserLanguage));var langMap={en:"English","zh-CN":"Chinese","zh-":"ChineseTraditional",nl:"Dutch","ko-":"Korea",fr:"French",de:"German","ja-":"Japanese",it:"Italian",pt:"Portuguese",es:"Spanish",sv:"Swedish",ru:"Russian",ar:"Arabic",vi:"Vietnamese",pl:"Polish",fi:"Finnish",af:"Afrikaans",km:"Khmer",th:"Thai",tr:"Turkish",uk:"Ukrainian",zu:"Zulu"};Object.keys(langMap).forEach(function(n){0===language.indexOf(n)&&(nowLang=langMap[n])});var strOf=Object.prototype.toString,i18fn=function(languages,params,defLang){var nowlang=defLang||nowLang,str=languages[nowlang];if(params)for(var k in params){var exp=eval("/__"+k+"__/g");str="[object String]"!==strOf.call(params[k])?str.replace(exp,params[k][nowlang]):str.replace(exp,params[k])}return"English"!==nowlang?isProd?str||i18fn(languages,params,"English"):str||i18fn(languages,params,"English")+" - [Miss i18fn: "+nowlang+"]":str};return i18fn.setNowLanguage=function(n){nowLang=n},i18fn.getLanguage=function(){return nowLang},i18fn.addLanguage=function(n,a){-1<language.indexOf(n)&&(nowLang=a)},i18fn.setProduction=function(n){isProd=n},i18fn});
//# sourceMappingURL=index.js.map
