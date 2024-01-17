import { Metric } from "@/components/Metric/Metric";
import React from "react";

export const Metrics = () => {
  const metricsData = [
    {
      title: "Discover & access relevant creators instantly",
      image: "/images/campaign-img.png",
      type: "list",
      content: "",
      list: [
        { point: "7 Million+ creators" },
        { point: "22 Global regions" },
        { point: "20+ Powerful filters" },
        { point: "Celebrity to Micro creators" },
        { point: "10+ Languages supported" },
      ],
      flexDirection: "lg:flex-row flex-col-reverse  lg:gap-20 lg:mt-0 mt-12",
      newTag: false
    },
    {
      title: "Get premium data with creator insights",
      image: "/images/metric.png",
      type: "list",
      content: "",
      list: [
        { point: "Performance Data" },
        { point: "Audience Demographics" },
        { point: "Historical Rating" },
      ],
      flexDirection:
        "lg:flex-row-reverse flex-col-reverse lg:gap-20 lg:mt-0 mt-12",
        icon: "/images/increase-graph.svg"
        
    },
    {
      title: "Competitive pricing at lightning fast speed ⚡",
      image: "/images/competitive.png",
      content:
        "One Impression platform uses innovative technology, scale, data and exclusive partnerships to get you the best deals on top creators. Our platform is suitable for businesses of all sizes and our pricing model allows us to offer unbeatable prices for every budget.",
      list: "",
      type: "para",
      flexDirection: "lg:flex-row flex-col-reverse  lg:gap-20 lg:mt-0 mt-12",
    },
    {
      title: "Fully compliant creator contracts",
      image: "/images/fully_compliant.png",
      list: "",
      type: "para",
      content:
        "Say goodbye to lengthy negotiations and hours spent on legal paperwork. With our Fully Compliant Creator Contracts, you can focus on what matters most — connecting with the right influencers and growing your business.",
      flexDirection:
        "lg:flex-row-reverse flex-col-reverse  lg:gap-20 lg:mt-0 mt-12",
    },
    {
      title: "Advanced creator briefing system",
      image: "/images/advance_creator.png",
      list: "",
      type: "para",
      content:
        "Make content creation faster, easier, and more efficient with our briefing system! No more manual work or worries about errors. Take advantage of this advance system to ensure that your briefs are accurate and perfect every time.",
      flexDirection: "lg:flex-row flex-col-reverse  lg:gap-20 lg:mt-0 mt-12",
    },
    {
      title: "Real time performance tracking & analytics",
      image: "/images/performance.png",
      list: "",
      type: "para",
      content:
        "Track and analyse your campaign performance in real-time. Get deep insights at every level, from creator, content, category, gender and platform. You will exercise unparalleled control over your campaigns, all on a single platform.",
      flexDirection:
        "lg:flex-row-reverse flex-col-reverse  lg:gap-20 lg:mt-0 mt-12",
    },
    {
      title: "Multiply ROI via One Ads",
      image: "/images/ads.png",
      list: "",
      type: "para",
      content:
        "Leverage the power of organic content created by creators to drive action by turning into paid social ads. With a strong record for improved performance, this magic tool will help you significantly improve your ROI.",
      flexDirection: "lg:flex-row flex-col-reverse  lg:gap-20 lg:mt-0 mt-12",
      newTag: true
    },
  ];

  const allMetricSections = metricsData.map((each: any) => (
    <Metric
      key={each.title}
      flexDirection={each.flexDirection}
      image={each.image}
      content={each.content}
      title={each.title}
      type={each.type}
      list={each.list}
      newTag={each.newTag}
      icon={each.icon}
    />
  ))

  return (
    <div className="relative">
      <div className="container mx-auto lg:px-0 px-5">
        {allMetricSections}
      </div>
      <img className="absolute -top-[800px] lg:-top-[600px] -z-10" src="/images/gradient-4.png"></img>
      
    </div>
  );
};
