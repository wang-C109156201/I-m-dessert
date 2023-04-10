import { Switch, theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#4D6447",
    colorBgBase	: "#323721",
    colorTextBase: "#FFFCFB",
    colorTextFooter: "#ffffff",
    colorBgFooter: "#000000",
    colorNavBarBase:"red",
  },
  components: {
    Button: {
      colorPrimary: "#6366f2;",
      colorPrimaryHover: "4D6447",
    },
    Switch: {
      colorPrimary: "#F9CBB7;",
      colorPrimaryHover: "#323721",
    }
  },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorBgBase: "#FFFCFB",
    colorTextBase: '#323721',
    colorNavBarBase:"red",
  },
  components: {
    Button: {
      colorPrimary: "#6366f2;",
      colorPrimaryHover: "#4D6447",
    },
    Switch: {
      colorPrimary: "#F9CBB7;",
      colorPrimaryHover: "#323721",
    }
  },
};

export { lightTheme, darkTheme };
