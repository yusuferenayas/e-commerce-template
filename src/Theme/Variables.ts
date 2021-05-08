import SASSVariables from "./scss/_variables.module.scss";

type ThemeVariablesType = {
  primaryColor: string;
  secondaryColor: string;
  titleColor: string;

  fontRegular: string;
  fontLarge: string;
};

const variables = SASSVariables as ThemeVariablesType;

export const colors = {
  primary: variables.primaryColor,
  secondary: variables.secondaryColor,
  title: variables.titleColor,
};

export const fontSize = {
  regular: variables.fontRegular,
  large: variables.fontLarge,
};
