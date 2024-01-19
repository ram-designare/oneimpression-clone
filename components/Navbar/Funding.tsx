import React from "react";

export const Funding = () => {
  return (
    <div className="w-full bg-[#1d252d]">
      <div className="lg:container mx-auto lg:px-0 px-3">
        <div className="flex items-center justify-center gap-4 text-white py-3">
        <img alt="rocket" className="w-5 lg:w-7 " src="/images/rocket.svg"></img>
        <p className="text-xs lg:text-base">
          We are excited to announce that we have secured our Series A financing
          as part of a $10 Million round led by Krafton. <span className="text-[#30B8c0]">Read More</span>
        </p></div>
      </div>
    </div>
  );
};
