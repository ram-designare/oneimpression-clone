import { Button } from "@/components/Button/Button";
import React from "react";

export const Join = () => {
  return (
    <div className="bg-gradient-to-r from-[#30c0b7] to-[#706df9]">
      <div className="container mx-auto lg:px-0 px-5">
        <div className="flex lg:flex-row flex-col-reverse lg:items-center justify-between py-12 lg:py-24">
          <div className="flex flex-col gap-6">
            <p className="text-base lg:text-2xl text-white">We're hiring 🎉</p>
            <p className="text-2xl lg:text-5xl text-white font-semibold w-2/3">
              Join our team of Rockstars
            </p>
            <Button
              text="View All Open Roles"
              icon={false}
              bgColor="bg-black"
              textColor="white"
              width="200px"
            ></Button>
          </div>
          <div className="flex lg:overflow-visible overflow-hidden lg:mb-0 mb-12">
            {[...Array(5)].map((e, i) => (
              <img
                key={i}
                className={`w-16 lg:w-32 h-16 lg:h-32 -ml-8 z-[${i}]`}
                src="/images/team4.png"
              ></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
