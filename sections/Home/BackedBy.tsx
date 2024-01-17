import React from "react";

export const BackedBy = () => {
  const investors = [
    {name: "Vamsi Krishna 1", image: "/images/vamsi.png"},
    {name: "Vamsi Krishna 2", image: "/images/vamsi.png"},
    {name: "Vamsi Krishna 3", image: "/images/vamsi.png"},
    {name: "Vamsi Krishna 4", image: "/images/vamsi.png"},
    {name: "Vamsi Krishna 5", image: "/images/vamsi.png"},
    {name: "Vamsi Krishna 6", image: "/images/vamsi.png"},
    {name: "Vamsi Krishna 7", image: "/images/vamsi.png"},
    {name: "Vamsi Krishna 8", image: "/images/vamsi.png"},
  ]
  return (
    <div className="container mx-auto lg:px-0 px-5">
      <div className="flex lg:flex-row flex-col lg:gap-12 py-32 lg:pl-8">
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-2xl lg:text-5xl">We are backed by leading investors</p>
          <p className="text-sm lg:text-xl w-3/4">
            Our vision for the creator economy is shared by leading investors
            globally. Our investors include 20+ unicorn founders, social
            platform leaders as well as highly reputed institutions around the
            world.
          </p>
        </div>
        <div className="flex-1 flex flex-col mt-10 lg:mt-0">
          <div className="flex justify-between overflow-hidden">
            <img className="w-28 lg:w-60" src="/images/krafton.png"></img>
            <img className="w-28 lg:w-60" src="/images/krafton.png"></img>
          </div>
          <div className="grid grid-cols-4 gap-y-6 lg:gap-y-10 lg:mt-0 mt-4">
            {investors.map((each: any) => (
              <div key={each.name} className="flex flex-col items-center">
                <img className="rounded-full w-16 md:w-24 h-16 md:h-24 mx-auto border-black border" src={each.image}></img>
                <p className="text-xs lg:text-base">{each.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
