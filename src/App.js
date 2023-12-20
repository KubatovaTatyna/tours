import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Tour from "./pages/tour";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tours/:tourId" element={<Tour />}/>
      </Routes>
    </div>
  );
}

export default App;
