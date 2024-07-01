import { AppBar, Tab, Tabs, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8bc34a",
      contrastText: "#000000",
      
    },
    secondary: {
      main: "#8bc34a",
      contrastText: "#000000",
      
    },
  },
});

export const Header = (props) => {
  const { active } = props;
  const [value, setValue] = useState(active);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar
      className="header"
      position="static"
      sx={{ backgroundColor: "white" }}
    >
      <ThemeProvider theme={theme}>
        <Tabs
          onChange={handleChange}
          value={value}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          sx={{fill: "black"}}
        >
          <Tab sx={{padding: 0, margin: '0 10px'}}
            label={
              <Link to={"/"} className="link">
                Учетные записи
              </Link>
            }
            value="one"
            color="white"
          />
          <Tab sx={{padding: 0, margin: '0 10px'}} label="Пользователи" value="two" />
          <Tab sx={{padding: 0, margin: '0 10px'}}
            label={
              <Link to={"/devices"} className="link">
                Объекты
              </Link>
            }
            value="three"
          />
          <Tab sx={{padding: 0, margin: '0 10px'}} label="Водители" value="four" />
          <Tab sx={{padding: 0, margin: '0 10px'}} label="Уведомления" value="five" />
        </Tabs>
      </ThemeProvider>
    </AppBar>
  );
};
