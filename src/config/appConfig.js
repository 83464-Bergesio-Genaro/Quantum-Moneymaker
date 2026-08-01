const normalizeBasePath = (value = "") => {
  const trimmed = String(value).trim();

  if (!trimmed || trimmed === "/") {
    return "";
  }

  return trimmed.endsWith("/") ? trimmed.slice(0, -1) : trimmed;
};

export const appConfig = {
  appName: import.meta.env.VITE_APP_NAME,

  appURL: normalizeBasePath(
    import.meta.env.VITE_BASE_PATH ??
      import.meta.env.VITE_URL ??
      import.meta.env.BASE_URL,
  ), 
  appVersion: import.meta.env.VITE_APP_VERSION,

  /* MUY IMPORTANTE, SI DESEAMOS AGREGAR UNA VARIABLE EN appConfig.js y consumirlo desde los css*/
  themes: {
    light: {
      background:"#f1faff", //white
      primary:"#018081", //darkgreen
      secondary:"#e0f9f4", //lightgreen
      captions:"#0096c8", //blue
      text:"#000000", //black
      contrastText:"#ffffff"
    },
    /*POR AHORA NO LOS UTILIZAMOS*/
    dark: {
      background:"#000a0f", //white
      primary:"#061e19", //darkgreen
      secondary:"#e0f9f4", //lightgreen
      captions:"#38cdff", //blue
      text:"#000000", //black
      contrastText:"#ffffff"
    },
  },
};
