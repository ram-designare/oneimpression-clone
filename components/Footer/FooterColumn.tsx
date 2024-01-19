import React, { FC } from "react";

interface FooterColumnProps {
  data?: any;
}
export const FooterColumn: FC<FooterColumnProps> = ({ data }) => {
  return (
    <div className="flex flex-col" key={data.title}>
      <p className="text-[#747D84] text-xs lg:text-base mb-5">{data.title}</p>
      <div className="flex flex-col gap-2 lg:gap-3 text-white text-xs md:text-normal lg:text-base">
        {data.points.map((point: any) => (
          <p className="cursor-pointer" key={point.name}>
            {point.name}
          </p>
        ))}
      </div>
    </div>
  );
};
