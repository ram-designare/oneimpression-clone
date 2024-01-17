import React from "react";

export const Stats = () => {
  const stats = [
    {
      stat: "7 Million+",
      desc: "Accessible Creators Globally",
    },
    {
      stat: "50,000+",
      desc: "Content Created Yearly",
    },
    {
      stat: "2 Billion+",
      desc: "Views Generated on Social Platforms",
    },
    {
      stat: "500+",
      desc: "Brands Who Trust Us",
    },
  ];

  const ourStats = stats.map((each: any) => (
    <div className="flex flex-col gap-2" key={each.desc}>
      <p className="text-2xl lg:text-5xl font-semibold text-[#30C0B7]">{each.stat}</p>
      <p className="text-sm lg:text-xl text-[#747D84]">{each.desc}</p>
    </div>
  ))
  return (
    <div className="grid lg:grid-cols-2 gap-x-24 lg:mt-[200px] mt-32 pb-20">
      <div className="flex flex-col gap-4">
        <p className="text-2xl lg:text-5xl font-semibold">
          Manage influencer campaigns at scale with speed & seamlessness.
        </p>
        <p className="">
          Our platform simplifies influencer campaigns, enabling brands to scale
          rapidly. From discovery to pricing, contracting to payments, briefing
          to performance, we have got everything covered.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-y-10 gap-x-4 lg:mt-0 mt-8">
        {ourStats}
      </div>
    </div>
  );
};
