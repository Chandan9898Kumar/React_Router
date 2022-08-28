import './App.css';
import MyIncrease from './CalculationCom/MyIncrease';
import MyMulti from './CalculationCom/MyMulti';
import HomePage from './CalculationCom/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/MyIncrease" element={<MyIncrease />} />
          <Route path="/MyMulti" element={<MyMulti />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
