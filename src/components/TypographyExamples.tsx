import React from "react";

const TypographyExamples: React.FunctionComponent = () =>  {
  return (
    <div className="my-5">
      <h1 className="text-3xl font-bold text-sky-200 bg-metal">hello world</h1>
      <p className="tablet:text-lime-600 text-orange-900">
        The quick brown fox...
      </p>
      <p className="md:text-slate-700 text-blue-600">The quick brown fox...</p>
      <p className="border border-black text-xl font-arial">
        The quick brown fox...
      </p>
      <p className="mt-5">The quick brown fox...</p>

      {/* Arbitrary values */}
      <button className="bg-[#1da1f2] hover:bg-[#147ab9] text-white my-1 p-1 rounded-lg">
        Login with Twitter
      </button>

      <p className="text-sm hover:text-base cursor-pointer italic">
        The quick brown fox...
      </p>
      <p className="diagonal-fractions">1/2</p>

      <p className="-tracking-2 leading-loose underline text-right">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsu
      </p>
    </div>
  );
}

export default TypographyExamples;
