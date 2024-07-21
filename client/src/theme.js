export const tokensDark = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000",
  },
  primary: {
    /*
      // blue
      100: "#d3d4de",
      200: "#a6a9be",
      300: "#7a7f9d",
      400: "#4d547d",
      500: "#21295c",
      600: "#191F45", 
      700: "#141937",
      800: "#0d1025",
      900: "#070812",
    
    100: "#d5ccd5",
    200: "#aa99ab",
    300: "#806782",
    400: "#553458",
    500: "#2b012e",
    600: "#220125",
    700: "#1a011c",
    800: "#110012",
    900: "#090009",  


    
    100: "#d4ccdd",
    200: "#a99abb",
    300: "#7d6798",
    400: "#523576",
    500: "#270254",
    600: "#1f0243",
    700: "#170132",
    800: "#100122",
    900: "#080011",

    100: "#ceccd9",
    200: "#9d99b3",
    300: "#6b678c",
    400: "#3a3466",
    500: "#090140",
    600: "#070133",
    700: "#050126",
    800: "#04001a",
    900: "#02000d",

*/
    100: "#d4ccdd",
    200: "#a99abb",
    300: "#7d6798",
    400: "#523576",
    500: "#270254",
    600: "#1f0243",
    700: "#170132",
    800: "#100122",
    900: "#080011",
  },

  secondary: {
    /*

    // yellow
    50: "#f0f0f0", 
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14",

    */

    100: "#d0eeee",
    200: "#a1dddc",
    300: "#71cdcb",
    400: "#42bcb9",
    500: "#13aba8",
    600: "#0f8986",
    700: "#0b6765",
    800: "#084443",
    900: "#042222",
  },
};

function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
