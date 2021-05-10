import SASSVariables from "./_variables.module.scss";

type ThemeVariablesType = {
  primaryColor: string;
  alternativeColor: string;
  secondaryColor: string;
  titleColor: string;
  productBorderColor: string;
  grayScaleColor: string;
  grayScaleLightColor: string;
  grayScaleSemiLightColor: string;

  fontRegular: string;
  fontLarge: string;
};

const variables = SASSVariables as ThemeVariablesType;

export const colors = {
  primary: variables.primaryColor,
  alternativeColor: variables.alternativeColor,
  secondary: variables.secondaryColor,
  title: variables.titleColor,
  productBorder: variables.productBorderColor,
  grayScale: variables.grayScaleColor,
  grayScaleLight: variables.grayScaleLightColor,
  grayScaleSemiLightColor: variables.grayScaleSemiLightColor,
};

export const fontSize = {
  regular: variables.fontRegular,
  large: variables.fontLarge,
};
