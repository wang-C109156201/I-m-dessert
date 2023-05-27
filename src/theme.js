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
      colorPrimary: "#4D6447;",
      colorPrimaryHover: "#F9CBB7",
      colorPrimaryActive: "#F9CBB7",
    },
    Switch: {
      colorPrimary: "#F9CBB7;",
      colorPrimaryHover: "#323721",
    },
    Menu: {
      colorItemBg: "#4D6447",
      colorItemBgSelected: "#96AB90;",
      colorItemText: "#96AB90",
      colorItemTextSelected: "#4D6447",
      // colorSubItemBg:"#f9cbb744",
      colorSubItemBgSelected:"#F9CBB7",
      colorSplit:"#4D6447",
    },
    Drawer:{
      colorBgElevated:"#4D6447",
    },
    Modal:{
      colorBgElevated: "#4D6447",
    },
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
      colorPrimary: "#F9CBB7",
      colorPrimaryHover: "#4D6447",
      colorPrimaryActive: "#4D6447",
    },
    Switch: {
      colorPrimary: "#F9CBB7;",
      colorPrimaryHover: "#323721",
    },
    Menu: {
      colorItemBgSelected: "#F9CBB7;",
      colorItemText: "#4D6447",
      colorItemTextSelected: "#FFFCFB",
      colorSubItemBg:"#f9cbb744",
      colorSubItemBgSelected:"#F9CBB7",
      colorSplit:"#fff",
    },
    // Modal:{
    //   colorBgElevated: "#323721",
    // },
    
  },
};

export { lightTheme, darkTheme };
