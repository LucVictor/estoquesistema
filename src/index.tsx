import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ShelfLifeIndex from "./componentes/shelflife/index";
import DamagedIndex from "./componentes/damaged/index";
import Layout from "./componentes/nav/layout";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
const router = createBrowserRouter([
  {
    path: "/vencimentos",
    element: <Layout children={<ShelfLifeIndex />} />,
  },
  {
    path: "/avarias/",
    element: <Layout children={<DamagedIndex />} />,
  },
  {
    path: "/",
    element: <Layout children={<DamagedIndex />} />,
  },
]);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
