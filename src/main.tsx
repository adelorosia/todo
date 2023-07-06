import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppContextProvider } from "./Context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
