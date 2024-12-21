import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./Redux/store.ts";

import { persistor } from "./Redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
