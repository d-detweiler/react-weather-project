import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="mb-3 text-center">Weather Forecast ☀️</h1>
        </header>
        <Weather defaultCity="Vancouver" />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/d-detweiler"
              target="_blank"
              rel="noreferrer"
            >
              Dominika Detweiler
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/d-detweiler/weather-app-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
