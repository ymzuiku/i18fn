interface ILangs {
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

export const lang: (
  languages: ILangs,
  params?: any,
  defLang?: string,
) => string;
export const setNowLanguage: (
  language:
    | 'English'
    | 'Chinese'
    | 'ChineseTraditional'
    | 'Dutch'
    | 'Korea'
    | 'French'
    | 'German'
    | 'Japanese'
    | 'Italian'
    | 'Portuguese'
    | 'Spanish'
    | 'Swedish'
    | 'Russian'
    | 'Arabic'
    | 'Vietnamese'
    | 'Polish'
    | 'Finnish'
    | 'Afrikaans'
    | 'Khmer'
    | 'Thai'
    | 'Turkish'
    | 'Ukrainian'
    | 'Zulu',
) => string;

export function addLanguage(languageType: string, languageKey: string): void;
export function getLanguage(): string;

export function setProduction(prod: boolean): void;
