import * as React from "react";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MediaCard from './Cards'
import URLShortener from "./URLShortener";
import  { useState, useEffect } from "react";
import Home from './Home'

const ThemePaletteModeContext = React.createContext({
  toggleThemePaletteMode: () => {}
});

const ToggleThemePaletteMode = () => {

  // useEffect(() => {
  //   switch (page) {
  //     case "home":
  //       loadHome();
  //       break;
  //     case "about":
  //       loadAbout();
  //       break;
  //     case "urlshortener":
  //       loadUrlShortener();
  //       break;
  //     case "pastebin":
  //       loadPastebin();
  //       break;
  //     default:
  //       loadHome();
  //       break;
  //   }
  // }, [page]);

  const theme = useTheme();
  const themePaletteModeContext = React.useContext(ThemePaletteModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary"
      }}
    >
      <IconButton
        sx={{ ml: 1 }}
        onClick={themePaletteModeContext.toggleThemePaletteMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
};

export default function App() {
  const [page, setPage] = useState("home"); 

  const isSystemDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [themePaletteMode, setThemePaletteMode] = React.useState(
    isSystemDarkMode ? "dark" : "light"
  );

  const themePaletteModeContextProvider = React.useMemo(
    () => ({
      toggleThemePaletteMode: () => {
        setThemePaletteMode((prevMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      }
    }),
    []
  );
  
  const props_arr = [{url:"https://public-apps-thetechcruise.s3.us-east-2.amazonaws.com/public/document.jpeg",title:"URL Shortener",id:"urlshortener",description:"Oh my such good apples pie"}]
  const themeProvider = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themePaletteMode
        }
      }),
    [themePaletteMode]
  );

  
  return (
    <ThemePaletteModeContext.Provider value={themePaletteModeContextProvider}>
      <ThemeProvider theme={themeProvider}>
      <AppBar  position="sticky" component='nav'>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon >

            </MenuIcon>
          </IconButton>
          <Typography variant="h4" color="inherit" component="div">
            Apps from TheTechCruise
          </Typography>
        </Toolbar>
      </AppBar>
        {page === "home" && <Home props_arr ={props_arr} setPage={setPage} ></Home>}
        {page === "urlshortener" && <URLShortener setPage={setPage} title={props_arr[0].title}/>}
        <ToggleThemePaletteMode />

      </ThemeProvider>
    </ThemePaletteModeContext.Provider>
  );
}
