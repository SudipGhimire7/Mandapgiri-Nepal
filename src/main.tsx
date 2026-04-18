  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { CurrencyProvider } from "./app/context/CurrencyContext.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  );