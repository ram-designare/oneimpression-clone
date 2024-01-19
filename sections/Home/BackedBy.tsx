import React from "react";

export const BackedBy = () => {
  const investors = [
    { name: "Vamsi Krishna", image: "/images/vamsi.png" },
    { name: "Pulkit Jain", image: "/images/pulkit.png" },
    { name: "Peyush Bansal", image: "/images/peyush.png" },
    { name: "Gaurav Agarwal", image: "/images/gaurav.png" },
    { name: "Anupam Mittal", image: "/images/anupam.png" },
    { name: "Zakir Khan", image: "/images/zakir.png" },
    { name: "Masoom Minawala", image: "/images/masoom.png" },
    { name: "Neeraj Chopra", image: "/images/neeraj.png" },
  ];

  const investorList = investors.map((each: any) => (
    <div key={each.name} className="flex flex-col items-center">
      <img alt={`${each.name}`}
        className="rounded-full w-16 md:w-24 h-16 md:h-24 mx-auto border-black border"
        src={each.image}
      ></img>
      <p className="text-xs lg:text-base">{each.name}</p>
    </div>
  ));
  return (
    <div className="lg:container mx-auto lg:px-0 px-5">
      <div className="flex lg:flex-row flex-col lg:gap-12 lg:py-32 py-16 lg:pl-8">
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-2xl lg:text-5xl font-medium">
            We are backed by leading investors
          </p>
          <p className="text-sm lg:text-xl w-3/4">
            Our vision for the creator economy is shared by leading investors
            globally. Our investors include 20+ unicorn founders, social
            platform leaders as well as highly reputed institutions around the
            world.
          </p>
        </div>
        <div className="flex-1 flex flex-col mt-10 lg:mt-0">
          <div className="flex justify-between gap-6 overflow-hidden">
            <img alt="krafton-logo" className="w-28 lg:w-60" src="/images/krafton.png"></img>
            <img alt="peer-capital" className="w-28 lg:w-full" src="/images/peercapital.png"></img>
          </div>
          <div className="grid grid-cols-4 gap-y-6 lg:gap-y-10 lg:mt-6 mt-4">
            {investorList}
          </div>
        </div>
      </div>
    </div>
  );
};
