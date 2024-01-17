import React, { FC } from "react";

export interface MetricProps {
  icon?: boolean;
  text: string;
  bgColor: string;
  iconImg?: string;
  textColor: string;
  width?: string;
  onClickFunction?: () => unknown;
}

export const Button: FC<MetricProps> = ({
  icon,
  text,
  bgColor,
  iconImg,
  textColor,
  width,
  onClickFunction
}) => {
  return (
    <div onClick={(onClickFunction)}
      className={`flex items-center lg:justify-none justify-center px-6 py-2.5 rounded-md ${bgColor} gap-1 cursor-pointer shadow-md ${width && "w-[200px]"}`}
    >
      <button className={`text-${textColor}  text-sm lg:text-base`}>
        {text}
      </button>
      {icon && (
        <img
          className="p-0 ml-1 h-3 w-3 sm:ml-4 sm:h-6 sm:w-6"
          src={iconImg}
        ></img>
      )}
    </div>
  );
};
