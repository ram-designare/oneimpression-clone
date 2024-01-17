import React, { useContext } from "react";
import { Button } from "../Button/Button";
import { UserContext } from "@/pages/_app";

const Footer = () => {

  const { dialogState, setDialogState } = useContext<any>(UserContext);

  const footerPointers = [
    { point: "Lightning Fast Speed" },
    { point: "Best Creator Pricing" },
    { point: "Seamless Delivery" },
    { point: "Realtime Analytics" },
  ];

  const footerGridElements = [
    {
      title: "LEGAL",
      points: [
        { name: "Talk to us", link: "" },
        { name: "Terms of Service", link: "" },
        { name: "Privacy Policy", link: "" },
        { name: "Brand Terms & Condition", link: "" },
        { name: "Influencer Terms & Condition", link: "" },
        { name: "© 2021 Anycast Technology Pvt. Ltd. All rights reserved.", link: "" },
      ],
    },
    {
      title: "FEATURES",
      points: [
        { name: "Creator Discovery", link: "" },
        { name: "Creator Access", link: "" },
        { name: "Creator Insights", link: "" },
        { name: "Competitive Pricing", link: "" },
        { name: "Seamless Fulfilment", link: "" },
        { name: "Real Time Tracking", link: "" },
        { name: "One Ads", link: "" },
      ],
    },
    {
      title: "ONE IMPRESSION",
      points: [
        { name: "Home", link: "" },
        { name: "About Us", link: "" },
        { name: "Press", link: "" },
        { name: "Case Studies", link: "" },
        { name: "Blog", link: "" },
        { name: "Careers (We're Hiring ✨)", link: "" },
      ],
    },
    {
      title: "CONTACT",
      points: [
        { name: "Talk to us", link: "" },
        { name: "Instagram", link: "" },
        { name: "LinkedIn", link: "" },
        { name: "Twitter", link: "" },
        { name: "Facebook", link: "" },
      ],
    },
  ];
  return (
    <div className="bg-[#1D252D]">
      <div className="lg:container mx-auto py-24 lg:px-0 px-5">
        <div className="flex flex-col lg:items-center gap-8">
          <p className="text-4xl lg:text-7xl text-white font-semibold">
            Start a Campaign Now
          </p>
          <div className="flex lg:flex-row flex-col justify-around gap-4 lg:gap-12">
            {footerPointers.map((each: any) => (
              <div key={each.point} className="flex items-center gap-2">
                <img className="w-5 h-5" src="/images/check.png"></img>
                <p className="text-white text-sm lg:text-xl">{each.point}</p>
              </div>
            ))}
          </div>

          <Button
            onClickFunction={() =>
              setDialogState({ open: true, type: "form" })
            }
            bgColor="bg-[#30B8C0]"
            text="Get Started"
            textColor="white"
            width="200px"
          ></Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 lg:place-items-center mt-12">
          {footerGridElements.map((each: any) => (
            <div className="flex flex-col" key={Math.random()}>
              <p className="text-[#747D84] text-sm">{each.title}</p>
              <div className="flex flex-col gap-2 lg:gap-4 text-white">
                {each.points.map((point: any) => (
                  <p key={point.name}>{point.name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
