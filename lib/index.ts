export interface ILangs {
  English?: string;
  Chinese?: string;
  ChineseTraditional?: string;
  Dutch?: string;
  Korea?: string;
  French?: string;
  German?: string;
  Japanese?: string;
  Italian?: string;
  Portuguese?: string;
  Spanish?: string;
  Swedish?: string;
  Russian?: string;
  Arabic?: string;
  Vietnamese?: string;
  Polish?: string;
  Finnish?: string;
  Afrikaans?: string;
  Khmer?: string;
  Thai?: string;
  Turkish?: string;
  Ukrainian?: string;
  Zulu?: string;
}

let language = 'en';
let nowLang = 'English';
let isProd = process.env.NODE_ENV === 'production';

if (navigator) {
  if (navigator.language) {
    language = navigator.language;
  } else if ((navigator as any)['browserLanguage']) {
    language = (navigator as any)['browserLanguage'];
  }
}

const langMap = {
  en: 'English',
  'zh-CN': 'Chinese',
  'zh-': 'ChineseTraditional',
  nl: 'Dutch',
  'ko-': 'Korea',
  fr: 'French',
  de: 'German',
  'ja-': 'Japanese',
  it: 'Italian',
  pt: 'Portuguese',
  es: 'Spanish',
  sv: 'Swedish',
  ru: 'Russian',
  ar: 'Arabic',
  vi: 'Vietnamese',
  pl: 'Polish',
  fi: 'Finnish',
  af: 'Afrikaans',
  km: 'Khmer',
  th: 'Thai',
  tr: 'Turkish',
  uk: 'Ukrainian',
  zu: 'Zulu',
};

const keys = Object.keys(langMap);

for (let i = 0; i < keys.length; i++) {
  const v = keys[i];
  if (language.indexOf(v) === 0) {
    nowLang = (langMap as any)[v];
    break;
  }
}

const strOf = Object.prototype.toString;

type II18fn = (languages: ILangs, params?: any, defLang?: keyof ILangs) => string;

interface II18fnProp {
  setNowLanguage: (v: keyof ILangs) => any;
  getLanguage: () => string;
  addLanguage: (languageType: string, languageKey: string) => void;
  setProduction: (isProd: boolean) => void;
}

const i18fn: II18fn & II18fnProp = (languages: ILangs, params?: any, defLang?: keyof ILangs): string => {
  var nowlang = defLang || nowLang;
  var str = (languages as any)[nowlang];
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
      return str || i18fn(languages, params, 'English') + ' - [Miss i18fn: ' + nowlang + ']';
    }
    return str || i18fn(languages, params, 'English');
  }
  return str;
};

i18fn.setNowLanguage = (v: keyof ILangs) => {
  nowLang = v;
};

i18fn.getLanguage = () => {
  return nowLang;
};
i18fn.addLanguage = (languageType: string, languageKey: string) => {
  if (language.indexOf(languageType) > -1) nowLang = languageKey;
};

i18fn.setProduction = (prod: boolean) => {
  isProd = prod;
};

export default i18fn;
