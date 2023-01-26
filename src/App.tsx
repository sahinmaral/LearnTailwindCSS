import React from "react";
import { Route, Routes } from "react-router-dom";
import ExamplePage1 from "./components/ExamplePage1";
import Homepage from "./components/Homepage";

import Navbar from "./components/Navbar";

const App: React.FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <div className="container mb-5">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/example-1" element={<ExamplePage1 />} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
