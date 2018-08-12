interface ILangs {
  english: string;
  dutch: string;
  korea: string;
  french: string;
  german: string;
  japanese: string;
  italian: string;
  portuguese: string;
  spanish: string;
  swedish: string;
  chineseTraditional: string;
  chinese: string;
}

interface Ii18fn {
  txt: (languages: ILangs) => string;
  now: (language: string) => void;
}

export const i18fn: Ii18fn;
