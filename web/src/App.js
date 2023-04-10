
import "./App.css";
import Datas from "./components/Datas";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form/>}></Route>
        <Route path="/datas" element={<Datas/>}></Route>
      </Routes>
    </div>
  );
}
export default App;