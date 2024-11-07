import "./App.css";
import RandomColorsGeneration from "./components/RandomColorsGeneration/RandomColorsGeneration.jsx";
import H1ForColors from "./components/H1-for-colors/H1-for-colors.jsx";
import Probability from "./components/Probability/Probability.jsx";

function App() {
  return (
    <div className="App">
      <H1ForColors />
      <RandomColorsGeneration />
      <Probability />
    </div>
  );
}

export default App;
