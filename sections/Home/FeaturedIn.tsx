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

  const allFeatured = featuredList.map((e, i) => (
    <img key={i} className="w-24" src={e.image}></img>
  ));
  return (
    <div className="relative">
      <div className="lg:container mx-auto lg:px-0 px-5">
        <div className="flex flex-col items-center lg:mt-0 lg:mb-24 mb-12">
          <p className="text-2xl lg:text-5xl font-semibold">
            We’ve been featured In
          </p>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-y-4 lg:gap-y-10 gap-x-12 mt-6 lg:mt-10 place-items-center">
            {allFeatured}
          </div>
        </div>
      </div>
      <img
            src="/images/gradient-6.png"
            className="absolute -bottom-[300px] lg:-bottom-[500px] left-0 -z-10"
          ></img>
    </div>
  );
};
