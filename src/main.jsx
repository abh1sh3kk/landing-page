import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider, createTheme, rem } from "@mantine/core";
import "@mantine/core/styles.css";
import "./App.css";

const themeObj = {
  fontSizes: {
    xs: rem(10),
    sm: rem(11),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
  },
  headings: {
    FontFace: "Inter sans-serif",
    fontWeight: "400",

    sizes: {
      h1: { fontWeight: "700", fontSize: rem(36), lineHeight: "1.4" },
      h2: { fontSize: rem(30), lineHeight: "1.5" },
      h6: { fontWeight: "900" },
    },
  },
};
const theme = createTheme(themeObj);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
