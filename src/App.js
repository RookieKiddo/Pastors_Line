import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModalA from "./components/ModalA";
import Home from "./pages/Home/Home";
import ModalB from "./components/ModalB";

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modal-a" element={<ModalA />} />
        <Route path="/modal-b" element={<ModalB />} />
        {/* <ButtonA />
        <ButtonB /> */}
      </Routes>
    </div>
  </Router>
);

export default App;
