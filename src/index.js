import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./shared/redux/store";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(0,0,0,.5)",
                },
            },
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
