import React, { useContext } from "react";
import { Button } from "../Button/Button";
import { UserContext } from "@/pages/_app";
import { FooterColumn } from "./FooterColumn";

const Footer = () => {
  const { dialogState, setDialogState } = useContext<any>(UserContext);

  const footerPointers = [
    { point: "Lightning Fast Speed" },
    { point: "Best Creator Pricing" },
    { point: "Seamless Delivery" },
    { point: "Realtime Analytics" },
  ];

  const footerLegal = {
    title: "LEGAL",
    points: [
      { name: "Talk to us", link: "" },
      { name: "Terms of Service", link: "" },
      { name: "Privacy Policy", link: "" },
      { name: "Brand Terms & Condition", link: "" },
      { name: "Influencer Terms & Condition", link: "" },
    ],
  };

  const footerGridElements = [
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
    <div className="bg-[#1D252D] py-12 lg:py-24 lg:px-52 px-5">
      <footer className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:items-center gap-8 ">
          <p className="text-4xl lg:text-7xl text-white font-semibold">
            Start a Campaign Now
          </p>
          <div className="flex lg:flex-row flex-col justify-evenly gap-4 lg:gap-16">
            {footerPointers.map((each: any) => (
              <div key={each.point} className="flex items-center gap-2">
                <img className="w-5 h-5" src="/images/check.png"></img>
                <p className="text-white text-sm lg:text-xl">{each.point}</p>
              </div>
            ))}
          </div>

          <Button
            onClick={() => setDialogState({ open: true, type: "form" })}
            bgColor="bg-[#30B8C0] !py-4"
            text="Get Started"
            textColor="white text-sm lg:text-xl font-medium"
            width="200px"
          ></Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-16 lg:place-items-start mt-24">
          <div className="grid lg:col-span-2">
            <FooterColumn data={footerLegal} />
            <p className="text-white text-xs lg:text-base md:pr-40 mt-2 lg:mt-3">© 2021 Anycast Technology Pvt. Ltd. All rights reserved.</p>
            <img className="mt-6 lg:mt-12" src="/images/oi-white-logo.svg"></img>
          </div>
          {footerGridElements.map((each: any, i: number) => (
            <FooterColumn key={each.title} data={each} />
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
