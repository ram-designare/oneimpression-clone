import { Metric } from "@/components/Metric/Metric";
import React from "react";

export const Metrics = () => {
  const metricsData = [
    {
      title: "Discover & access relevant creators instantly",
      image: "/images/campaign-img.png",
      content: [
        { point: "7 Million+ creators" },
        { point: "22 Global regions" },
        { point: "20+ Powerful filters" },
        { point: "Celebrity to Micro creators" },
        { point: "10+ Languages supported" },
      ],
      classes: "",
      newTag: false,
    },
    {
      title: "Get premium data with creator insights",
      image: "/images/metric.png",
      content: [
        { point: "Performance Data" },
        { point: "Audience Demographics" },
        { point: "Historical Rating" },
      ],
      classes: "lg:flex-row-reverse flex-col-reverse",
      icon: "/images/increase-graph.svg",
    },
    {
      title: "Competitive pricing at lightning fast speed ⚡",
      image: "/images/competitive.png",
      content:
        ["One Impression platform uses innovative technology, scale, data and exclusive partnerships to get you the best deals on top creators. Our platform is suitable for businesses of all sizes and our pricing model allows us to offer unbeatable prices for every budget."],
      classes: "",
    },
    {
      title: "Fully compliant creator contracts",
      image: "/images/fully_compliant.png",
      content:
        ["Say goodbye to lengthy negotiations and hours spent on legal paperwork. With our Fully Compliant Creator Contracts, you can focus on what matters most — connecting with the right influencers and growing your business."],
      classes: "lg:flex-row-reverse flex-col-reverse",
    },
    {
      title: "Advanced creator briefing system",
      image: "/images/advance_creator.png",
      content:[
        "Make content creation faster, easier, and more efficient with our briefing system! No more manual work or worries about errors. Take advantage of this advance system to ensure that your briefs are accurate and perfect every time."],
      classes: "",
    },
    {
      title: "Real time performance tracking & analytics",
      image: "/images/performance.png",
      content:
        ["Track and analyse your campaign performance in real-time. Get deep insights at every level, from creator, content, category, gender and platform. You will exercise unparalleled control over your campaigns, all on a single platform."],
      classes: "lg:flex-row-reverse flex-col-reverse",
    },
    {
      title: "Multiply ROI via One Ads",
      image: "/images/ads.png",
      content:
        ["Leverage the power of organic content created by creators to drive action by turning into paid social ads. With a strong record for improved performance, this magic tool will help you significantly improve your ROI."],
      classes: "",
      tag: true,
    },
  ];

  const allMetricSections = metricsData.map((each: any) => (
    <Metric
      key={each.title}
      classes={each.classes}
      image={each.image}
      content={each.content}
      title={each.title}
      tag={each.tag}
      icon={each.icon}
    />
  ));

  return (
    <div className="relative">
      <div className="container mx-auto lg:px-0 px-5">{allMetricSections}</div>
      <img
        className="absolute -top-[800px] lg:-top-[600px] right-0 -z-10"
        src="/images/gradient-4.png"
      ></img>
    </div>
  );
};
