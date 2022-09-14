import React from "react";
// components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import {Route, Routes} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <GlobalStyles/>
      <Routes>
        <Route path="/ignite" element={ <Home/>}></Route>
        <Route path="/game/:id" element={ <Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
