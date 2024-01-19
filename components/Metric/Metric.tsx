import React, { FC } from "react";
import { Pill } from "../Pill/Pill";

export interface MetricProps {
  classes: string;
  image: string;
  title: string;
  content?: any;
  tag?: boolean;
  icon?: any;
}

export const Metric: FC<MetricProps> = ({
  classes,
  image,
  title,
  content,
  tag,
  icon,
}) => {
  return (
    <div className="flex justify-center items-center pt-6 lg:py-12 lg:gap-20 lg:mt-0 mt-12">
      <div
        className={`flex gap-28 ${classes || "lg:flex-row gap-28 flex-col-reverse"}`}
      >
        <div className="flex-1 flex flex-col justify-start lg:pl-12">
          <div className="text-2xl lg:text-5xl font-semibold lg:w-3/4 pt-8 relative">
            {tag && <Pill text="New" color="#FF9A23" />}
            <span className="relative font-semibold">
              {title}{" "}
              {icon && (
                <img
                  className="absolute lg:-right-16 -right-10 lg:w-[52px] w-[32px] lg:bottom-4 bottom-2"
                  src={icon}
                ></img>
              )}
            </span>
          </div>
          {content.length <= 1 && (
            <div className="flex flex-col gap-2 text-sm lg:text-lg pt-4 w-full lg:w-full font-medium">
              {content}
            </div>
          )}
          {content.length > 1 && (
            <div className="flex flex-col gap-2 pt-8">
              {content.map((each: any) => (
                <div className="flex items-center gap-2" key={each.point}>
                  <svg
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-2.5 w-3.5 sm:w-4 sm:h-3"
                  >
                    <path
                      d="M6.93922 12.4757L16.7537 2.66113C17.0821 2.33272 17.0821 1.8003 16.7537 1.47189C16.4253 1.14348 15.8928 1.14348 15.5645 1.47189L6.34463 10.6918L2.43555 6.7828C2.10714 6.45439 1.57466 6.45439 1.24631 6.7828C0.917897 7.11127 0.917897 7.64369 1.24631 7.97204L5.74998 12.4757C5.91419 12.6399 6.12941 12.7219 6.34463 12.7219C6.55979 12.7219 6.77502 12.6399 6.93922 12.4757Z"
                      fill="#21C17A"
                      stroke="#21C17A"
                    ></path>
                  </svg>
                  <p className="text-sm lg:text-lg font-medium">{each.point}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex-1 lg:pr-10">
          <img src={image}></img>
        </div>
      </div>
    </div>
  );
};
