import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename="/campers">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
