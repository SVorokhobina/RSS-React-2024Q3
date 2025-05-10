import "./styles/index.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./components/App/App";
import ErrorBoundary from "./components/ErrorPages/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
);
