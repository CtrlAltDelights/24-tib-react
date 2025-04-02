import React from "react";

function Hero() {
  return (
    <>
      <h1 className="mt-36 mb-20 text-4xl text-center font-bold">
        Generation Thailand <br /> React - Assessment
      </h1>
      <div className="space-x-32 text-center mb-8 font-bold">
        {" "}
        <button className="border-2 p-4 bg-amber-900 hover:bg-amber-700">
          User Home Sector
        </button>
        <button className="border-2 p-4 bg-amber-900 hover:bg-amber-700">
          Admin Home Sector
        </button>
      </div>
    </>
  );
}

export default Hero;
