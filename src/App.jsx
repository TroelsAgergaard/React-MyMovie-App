import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";

function App() {
  const theme = {
    light: {
      primary: "lightgray",
    },
    dark: {
      primary: "gray",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
