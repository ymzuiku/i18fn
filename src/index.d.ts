interface ILangs {
  english?: string;
  dutch?: string;
  korea?: string;
  french?: string;
  german?: string;
  japanese?: string;
  italian?: string;
  portuguese?: string;
  spanish?: string;
  swedish?: string;
  chineseTraditional?: string;
  chinese?: string;
}

// export const i18fn: Ii18fn;
export const lang: (
  languages: ILangs,
  params?: any,
  defLang?: string,
) => string;
export const now: (language: string) => void;
export const language: boolean;
