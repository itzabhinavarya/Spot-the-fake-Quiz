import { Route, Routes } from "react-router";
import "./App.css";
import Game from "./component/Game";
import Start from "./component/Start";
import End from "./component/End";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </>
  );
}

export default App;
