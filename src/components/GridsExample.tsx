import React from "react";

function GridsExample() {
  return (
    <div className="my-5">
      <h1 className="text-center">Grid Columns</h1>
      <div className="grid grid-cols-4 gap-4 border border-black p-3 my-3">
        <div className="border-2 border-blue-400 text-center">1</div>
        <div className="border-2 border-blue-400 text-center">2</div>
        <div className="border-2 border-blue-400 text-center">3</div>
        <div className="border-2 border-blue-400 text-center col-span-2">4</div>
        <div className="border-2 border-blue-400 text-center">5</div>
        <div className="border-2 border-blue-400 text-center">6</div>
        <div className="border-2 border-blue-400 text-center">7</div>
        <div className="border-2 border-blue-400 text-center">8</div>
        <div className="border-2 border-blue-400 text-center">9</div>
      </div>

      <h1 className="text-center">Grid Rows</h1>
      <div className="grid grid-rows-4 gap-4 grid-flow-col border border-black p-3 my-3">
        <div className="border-2 border-blue-400 text-center">1</div>
        <div className="border-2 border-blue-400 text-center">2</div>
        <div className="border-2 border-blue-400 text-center">3</div>
        <div className="border-2 border-blue-400 text-center">4</div>
        <div className="border-2 border-blue-400 text-center">5</div>
        <div className="border-2 border-blue-400 text-center">6</div>
        <div className="border-2 border-blue-400 text-center">7</div>
        <div className="border-2 border-blue-400 text-center">8</div>
        <div className="border-2 border-blue-400 text-center">9</div>
      </div>
    </div>
  );
}

export default GridsExample;
