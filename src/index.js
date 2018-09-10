var language = (
  navigator['browserLanguage'] || navigator.language
).toLowerCase();

var lang = 'english';

var isProd = process.env.NODE_ENV === 'production';

if (language.indexOf('en') > -1) lang = 'english';
else if (language.indexOf('nl') > -1) lang = 'dutch';
else if (language.indexOf('ko-kr') > -1) lang = 'korea';
else if (language.indexOf('fr') > -1) lang = 'french';
else if (language.indexOf('de') > -1) lang = 'german';
else if (language.indexOf('ja-jp') > -1) lang = 'japanese';
else if (language.indexOf('it') > -1) lang = 'italian';
else if (language.indexOf('pt') > -1) lang = 'portuguese';
else if (language.indexOf('es') > -1) lang = 'spanish';
else if (language.indexOf('sv') > -1) lang = 'swedish';
else if (language.indexOf('zh-hant') > -1) lang = 'chineseTraditional';
else if (language.indexOf('zh-') > -1) lang = 'chinese';

const ILanguage = {
  english: '',
  dutch: '',
  korea: '',
  french: '',
  german: '',
  japanese: '',
  italian: '',
  portuguese: '',
  spanish: '',
  swedish: '',
  chineseTraditional: '',
  chinese: '',
};

function txt(languages = ILanguage, params, defLang) {
  var nowlang = defLang || lang;
  var str = languages[nowlang];
  if (params) {
    for (var k in params) {
      var exp = eval(`/__${k}__/g`);
      if (typeof params[k] === 'object') {
        str = str.replace(exp, params[k][nowlang]);
      } else {
        str = str.replace(exp, params[k]);
      }
    }
  }
  if (nowlang !== 'english') {
    if (!isProd) {
      return (
        str || `${txt(languages, params, 'english')} - [Miss i18fn: ${nowlang}]`
      );
    }
    return str || txt(languages, params, 'english');
  }
  return str;
}

function now(v) {
  lang = v;
}

exports.lang = txt;
exports.now = now;
exports.language = language;
