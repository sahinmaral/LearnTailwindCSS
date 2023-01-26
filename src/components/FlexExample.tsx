import React from "react";

function FlexExample() {
  return (
    <div className="my-5">
      <div>Header</div>
      <div className="flex">
        <div className="basis-1/4 border border-black">Sidebar</div>
        <div className="basis-3/4 border border-black">Main Content</div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="border border-black">Sidebar</div>
        <div className="border border-black">Main Content</div>
      </div>

      <div className="flex justify-center space-x-2">
        <div style={{width:"100px"}} className="border border-black text-center">1</div>
        <div style={{width:"100px"}} className="border border-black text-center">2</div>
        <div style={{width:"100px"}} className="border border-black text-center">3</div>
      </div>
    </div>
  );
}

export default FlexExample;
