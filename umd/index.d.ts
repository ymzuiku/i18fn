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
declare type II18fn = (languages: ILangs, params?: any, defLang?: keyof ILangs) => string;
interface II18fnProp {
    setNowLanguage: (v: keyof ILangs) => any;
    getLanguage: () => string;
    addLanguage: (languageType: string, languageKey: string) => void;
    setProduction: (isProd: boolean) => void;
}
declare const i18fn: II18fn & II18fnProp;
export default i18fn;
