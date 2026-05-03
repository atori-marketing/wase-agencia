export const theme = {
  colors: {
    primary: "#6EC1E4",
    secondary: "#54595F",
    text: "#7A7A7A",
    accent: "#61CE70",
    purpleWase: "#6E04D1", // f3330ba
    orangeWase: "#FF6100", // a90cfd4
    greenWase: "#03A688", // 738848c
    black: "#000000", // fee1020
    darkGray: "#393939", // 6e8884f
    gray: "#6D6D6D", // c490e82
    lightGray: "#E6E6E6", // b90985c
    white: "#FFFFFF", // 7994dd5
  },
  typography: {
    h1: {
      desktop: "3rem",
      mobile: "2rem",
      weight: 500,
      family: "'Poppins', sans-serif",
    },
    h2: {
      desktop: "1.8rem",
      mobile: "1.4rem",
      weight: 500,
      family: "'Poppins', sans-serif",
    },
    h3: {
      desktop: "1.3rem",
      mobile: "1.1rem",
      weight: 500,
      family: "'Poppins', sans-serif",
    },
    span: {
      desktop: "1rem",
      mobile: "1rem",
      weight: 400,
      family: "'Poppins', sans-serif",
    },
    a: {
      desktop: "1.2rem",
      mobile: "1.1rem",
      weight: 500,
      family: "'Poppins', sans-serif",
    },
    system: {
      family: "'Roboto', sans-serif",
      weights: {
        normal: 400,
        medium: 500,
        semibold: 600,
      }
    }
  },
  breakpoints: {
    mobile: "767px",
    tablet: "1024px",
    desktop: "1025px",
  }
};

export const resolveGlobalColor = (globalId) => {
  if (!globalId || typeof globalId !== 'string') return globalId;
  const parts = globalId.split('?id=');
  if (parts.length < 2) return globalId;
  const id = parts[1];
  const mapping = {
    "primary": theme.colors.primary,
    "secondary": theme.colors.secondary,
    "text": theme.colors.text,
    "accent": theme.colors.accent,
    "f3330ba": theme.colors.purpleWase,
    "a90cfd4": theme.colors.orangeWase,
    "738848c": theme.colors.greenWase,
    "fee1020": theme.colors.black,
    "6e8884f": theme.colors.darkGray,
    "c490e82": theme.colors.gray,
    "b90985c": theme.colors.lightGray,
    "7994dd5": theme.colors.white,
  };
  return mapping[id] || globalId;
};

export const resolveGlobalTypography = (globalId) => {
  if (!globalId || typeof globalId !== 'string') return null;
  const parts = globalId.split('?id=');
  if (parts.length < 2) return null;
  const id = parts[1];
  const mapping = {
    "1dec6f7": theme.typography.h1,
    "7965b5e": theme.typography.h2,
    "7ebfcee": theme.typography.h3,
    "3a17688": theme.typography.span,
    "d1cc863": theme.typography.a,
  };
  return mapping[id] || null;
};
