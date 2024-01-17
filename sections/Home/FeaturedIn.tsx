import React from "react";

export const FeaturedIn = () => {
  const featuredList = [
    { image: "/images/quartz.png" },
    { image: "/images/moneycontrol.png" },
    { image: "/images/outlook.png" },
    { image: "/images/business-insider.png" },
    { image: "/images/forbes.png" },
    { image: "/images/economic-times.png" },
    { image: "/images/mint.png" },
    { image: "/images/the-hindu.png" },
  ];
  return (
    <div className="container mx-auto lg:px-0 px-5">
      <div className="flex flex-col items-center mt-12 mb-24">
        <p className="text-2xl lg:text-5xl font-medium">
          We’ve been featured In
        </p>
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-y-10 gap-x-10 mt-10 place-items-center">
          {featuredList.map((e, i) => (
            <img key={i} className="w-24" src={e.image}></img>
          ))}
        </div>
      </div>
    </div>
  );
};
