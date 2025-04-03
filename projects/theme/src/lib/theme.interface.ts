export interface GandamTheme {
  typography?: string;
  colors?: {
    text?: string;
    background?: string;
    border?: string;
    icon?: string;
    error?: string;
  };
  button?: {
    text?: string;
    background?: string;
    hover?: string;
    hoverText?: string;
    active?: string;
    activeText?: string;
    disabled?: string;
    border?: string;
    borderRadius?: string;
    focus?: string;
  };
  input?: {
    background?: string;
    text?: string;
    placeholder?: string;
    border?: string;
    borderRadius?: string;
    focus?: string;
  };
  card?: {
    background?: string;
    hText?: string;
    pText?: string;
    border?: string;
    borderRadius?: string;
  };
}
