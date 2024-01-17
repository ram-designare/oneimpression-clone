import React from "react";

export const StayOrganised = () => {
  const breakPoints = [
    { point: "Manual Searches" },
    { point: "Influencer Outreach" },
    { point: "Price Negotiations" },
    { point: "Blind Decisions" },
    { point: "Painful Contracts" },
    { point: "Payment Hassles" },
    { point: "Delivery Issues" },
    { point: "Compiling Reports" },
    { point: "Multiple Agencies" },
  ];

  const allBReakPoints = breakPoints.map((each: any) => (
    <p
      key={each.point}
      className="text-base lg:text-3xl line-through decoration-blue-400"
    >
      {each.point}
    </p>
  ));

  return (
    <div className="relative">
      <div className="lg:container mx-auto lg:px-0 px-5 mt-8 lg:mt-4">
        <div className="flex flex-col justify-center lg:text-center relative">
          <p className="text-2xl lg:text-5xl font-medium">
            Stay organised.<br></br>
            You can take a break from the following
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-12 xl:mx-32 lg:mt-20 mt-6">
            {allBReakPoints}
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-[800px] lg:-bottom-[700px] -z-10"
        src="/images/gradient-5.png"
      ></img>
    </div>
  );
};
