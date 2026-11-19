import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; message: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, message: "" };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message || "Unknown rendering error" };
  }
  componentDidCatch(error: Error) {
    console.error("Portfolio render error:", error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <main className="fatal">
          <p className="eyebrow">A small technical issue</p>
          <h1>This page couldn't load.</h1>
          <p>Refresh the page. If it continues, open the browser console and share the red error with the site administrator.</p>
          <button onClick={() => window.location.reload()}>Reload page</button>
          <small>{this.state.message}</small>
        </main>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppErrorBoundary>
  </React.StrictMode>
);
