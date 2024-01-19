import React, { FC } from "react";

interface StatProps {
  data?: any;
}
export const Stat: FC<StatProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-2" key={data.desc}>
      <p className="text-2xl lg:text-5xl font-semibold text-[#30C0B7]">
        {data.stat}
      </p>
      <p className="text-sm lg:text-xl text-[#747D84]">{data.desc}</p>
    </div>
  );
};
