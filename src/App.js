import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="Kyiv" />
      </div>
    </div>
  );
}
