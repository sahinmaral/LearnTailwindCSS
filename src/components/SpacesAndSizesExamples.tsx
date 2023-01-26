import React from "react";

function SpacesAndSizesExamples() {
  return (
    <div className="my-5">
      <div className="flex">
        <div className="bg-red-500 p-3 m-3" style={{ width: "200px" }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="bg-red-500 p-3 m-3" style={{ width: "200px" }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      <div className="my-3">
        <div className="w-36 h-16 bg-sky-400 opacity-20"></div>
        <div className="-mt-8 bg-sky-300">-mt-8</div>
      </div>
      <div className="flex space-x-4">
        <div className="bg-red-500 p-3" style={{ width: "200px" }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="bg-red-500 p-3" style={{ width: "200px" }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpacesAndSizesExamples;
