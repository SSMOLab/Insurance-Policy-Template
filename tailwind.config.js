const themeList = {
  blue: {
    background: {
      main: "#55B3DC",
      term: "#F6F4EF",
      info: "#9FDAF4",
      gradient1: "#BEDBFE",
      gradient2: "#91C3FD",
      gradient3: "#61A6FA",
      gradient4: "#3C83F6",
      gradient5: "#1D4FD7"
    },
    border: "#90cdf4",
    text: {
      title: "#1D4FD7",
      sidebar: "#FFFFFF",
      hover: "#1D4FD7"
    }
  },
  orange: {
    background: {
      main: "#F8A12F",
      term: "#F6F4EF",
      info: "#F3D79F",
      gradient1: "#FDE68B",
      gradient2: "#FCD44F",
      gradient3: "#FBBD23",
      gradient4: "#F59F0A",
      gradient5: "#DB7706"
    },
    border: "#fbd38d",
    text: {
      title: "#F59F0A",
      sidebar: "#FFFFFF",
      hover: "#F59F0A"
    }
  }
};
let theme;

if (process.env.VUE_APP_THEME === "orange") {
  theme = "orange";
} else {
  theme = "blue";
}
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      colors: {
        themeBackgroundMain: themeList[theme].background.main,
        themeBackgroundTerm: themeList[theme].background.term,
        themeBackgroundInfo: themeList[theme].background.info,
        themeBackgroundGradient1: themeList[theme].background.gradient1,
        themeBackgroundGradient2: themeList[theme].background.gradient2,
        themeBackgroundGradient3: themeList[theme].background.gradient3,
        themeBackgroundGradient4: themeList[theme].background.gradient4,
        themeBackgroundGradient5: themeList[theme].background.gradient5,
        themeBorder: themeList[theme].border,
        themeTextTitle: themeList[theme].text.title,
        themeTextSidebar: themeList[theme].text.sidebar,
        themeTextHover: themeList[theme].text.hover
      }
    }
  },
  variants: {},
  plugins: []
};
