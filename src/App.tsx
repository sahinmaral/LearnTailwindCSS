import React from "react";
import FlexExample from "./components/FlexExample";
import GridsExample from "./components/GridsExample";
import SpacesAndSizesExamples from "./components/SpacesAndSizesExamples";
import TypographyExamples from "./components/TypographyExamples";

function App() {
  return (
    <div className="container">
      <TypographyExamples />
      <hr/>
      <SpacesAndSizesExamples />
      <hr/>
      <FlexExample />
      <hr />
      <GridsExample />
    </div>
  );
}

export default App;
