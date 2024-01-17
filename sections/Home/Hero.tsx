import Navbar from "@/components/Navbar/Navbar";
import React, { useContext } from "react";
import { Stats } from "./Stats";
import { Button } from "@/components/Button/Button";
import { UserContext } from "@/pages/_app";

export const Hero = () => {
  const clientList = [
    { image: "/images/amazon.png" },
    { image: "/images/unilever.png" },
    { image: "/images/tencent.png" },
    { image: "/images/panasonic.png" },
    { image: "/images/mars.png" },
    { image: "/images/meesho.png" },
    { image: "/images/mamaearth.png" },
    { image: "/images/pharmeasy.png" },
    { image: "/images/zomato.png" },
    { image: "/images/plum.png" },
    { image: "/images/myntra.png" },
    { image: "/images/lazypay.png" },
    { image: "/images/cetaphil.png" },
    { image: "/images/pinterest.png" },
  ];

  const { dialogState, setDialogState } = useContext<any>(UserContext);

  const allClients = clientList.map((e, i) => (
    <img key={i} className="w-24" src={e.image}></img>
  ))
  return (
    <div className="relative">
      <div className="lg:container mx-auto lg:px-0 px-5">
        <Navbar />
        <div className="flex flex-col lg:text-center justify-center gap-4 lg:gap-6 mt-24">
          <p className="text-3xl lg:text-7xl font-semibold bg-gradient-to-r from-[#30c0b7] to-[#706df9] lg:py-2 bg-clip-text text-transparent">
            Start your influencer <br></br> campaign today
          </p>
          <p className="text-base lg:text-xl lg:w-2/3 mx-auto">
            One Impression helps you seamlessly activate and scale your
            Influencer Marketing Campaigns all in one place
          </p>
          <div className="flex lg:flex-row flex-col justify-center gap-4 lg:pt-4">
            <Button
              onClickFunction={() =>
                setDialogState({ open: true, type: "form" })
              }
              text="Schedule Demo"
              bgColor="bg-white"
              textColor="black"
            ></Button>
            <Button
              text="Message on Whatsapp"
              bgColor="bg-[#22B85E]"
              textColor="white"
              icon={true}
              iconImg="/images/whatsapp.svg"
            ></Button>
          </div>
        </div>
        <div className="grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 grid-cols-5 sm:grid-cols-3 gap-x-4 lg:gap-x-10 gap-y-8 lg:gap-y-16 mt-20 mb-10 place-items-center">
          {allClients}
        </div>
        <Stats />
        <img src="/images/global-influencer.png"></img>
      </div>
      <img
        className="absolute top-0 left-0 -z-10"
        src="/images/gradient-1.png"
      ></img>
    </div>
  );
};
