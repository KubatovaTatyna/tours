// import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import Tour from "./pages/tour";


function App() {
  return (
    <div className="App">
      <Home />
      <Tour />
      {/* <Routes>
        <Route path="/tours" element='#'/>
      </Routes> */}
    </div>
  );
}

export default App;
