import React, { FC } from "react";

interface PillProps {
  text?: any;
  color?: any;
}
export const Pill: FC<PillProps> = ({ text, color }) => {
  return (
    <p className={`absolute left-0 top-0 lg:-top-2 text-white font-light text-sm lg:text-base px-2 py-1 rounded-lg bg-[${color}]`}>
      {text}
    </p>
  );
};
