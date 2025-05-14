import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/Jo-Sa80" target="_blank" rel="noreferrer">
          Johanna Sandvoß
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/Jo-Sa80/second-react-weather"
          target="_blank"
          rel="noreferrer"
        >
          GitHUb
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://weather-app-with-react-by-js.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
