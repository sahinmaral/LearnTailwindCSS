import React from "react";
import FlexExample from "./FlexExample";
import GridsExample from "./GridsExample";
import SpacesAndSizesExamples from "./SpacesAndSizesExamples";
import TypographyExamples from "./TypographyExamples";

const ExamplePage1: React.FunctionComponent = () => {
  return (
    <div>
      <h1 className="text-3xl">Typography Examples</h1>
      <TypographyExamples />
      <hr />
      <h1 className="text-3xl">Spaces And Sizes Examples</h1>
      <SpacesAndSizesExamples />
      <hr />
      <h1 className="text-3xl">Flex Examples</h1>
      <FlexExample />
      <hr />
      <h1 className="text-3xl">Grid Examples</h1>
      <GridsExample />
    </div>
  );
}

export default ExamplePage1;
