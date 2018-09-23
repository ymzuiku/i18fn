var language = 'en';
var lang = 'English';
var isProd = process.env.NODE_ENV === 'production';

if (navigator) {
  if (navigator.language) {
    language = navigator.language;
  } else if (navigator['browserLanguage']) {
    language = navigator['browserLanguage'];
  }
}

if (language.indexOf('en') > -1) lang = 'English';
else if (language.indexOf('zh-CN') > -1) lang = 'Chinese';
else if (language.indexOf('zh-') > -1) lang = 'ChineseTraditional';
else if (language.indexOf('nl') > -1) lang = 'Dutch';
else if (language.indexOf('ko-') > -1) lang = 'Korea';
else if (language.indexOf('fr') > -1) lang = 'French';
else if (language.indexOf('de') > -1) lang = 'German';
else if (language.indexOf('ja-') > -1) lang = 'Japanese';
else if (language.indexOf('it') > -1) lang = 'Italian';
else if (language.indexOf('pt') > -1) lang = 'Portuguese';
else if (language.indexOf('es') > -1) lang = 'Spanish';
else if (language.indexOf('sv') > -1) lang = 'Swedish';
else if (language.indexOf('ru') > -1) lang = 'Russian';
else if (language.indexOf('ar') > -1) lang = 'Arabic';
else if (language.indexOf('vi') > -1) lang = 'Vietnamese';
else if (language.indexOf('pl') > -1) lang = 'Polish';
else if (language.indexOf('fi') > -1) lang = 'Finnish';
else if (language.indexOf('af') > -1) lang = 'Afrikaans';
else if (language.indexOf('km') > -1) lang = 'Khmer';
else if (language.indexOf('th') > -1) lang = 'Thai';
else if (language.indexOf('tr') > -1) lang = 'Turkish';
else if (language.indexOf('uk') > -1) lang = 'Ukrainian';
else if (language.indexOf('zu') > -1) lang = 'Zulu';

const strOf = Object.prototype.toString;

function txt(languages, params, defLang) {
  var nowlang = defLang || lang;
  var str = languages[nowlang];
  if (params) {
    for (var k in params) {
      var exp = eval('/__' + k + '__/g');
      if (strOf.call(params[k]) !== '[object String]') {
        str = str.replace(exp, params[k][nowlang]);
      } else {
        str = str.replace(exp, params[k]);
      }
    }
  }
  if (nowlang !== 'English') {
    if (!isProd) {
      return (
        str ||
        txt(languages, params, 'English') + ' - [Miss i18fn: ' + nowlang + ']'
      );
    }
    return str || txt(languages, params, 'English');
  }
  return str;
}
function setNowLanguage(v) {
  lang = v;
}
function getLanguage() {
  return lang;
}
function addLanguage(languageType, languageKey) {
  if (language.indexOf(languageType) > -1) lang = languageKey;
}
function setProduction(prod) {
  isProd = prod;
}

exports.lang = txt;
exports.setNowLanguage = setNowLanguage;
exports.addLanguage = addLanguage;
exports.setProduction = setProduction;
