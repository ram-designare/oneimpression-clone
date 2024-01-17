import React, { FC, useEffect, useRef, useState } from "react";

interface FormFieldProps {
  title: string;
  type: string;
  listElements?: any;
  placeholder?: string;
  onChange?: any;
  data?: any;
}

export const FormField: FC<FormFieldProps> = ({
  title,
  type,
  listElements,
  placeholder,
  onChange,
  data,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<any>();
  useEffect(() => {
    function handleClickOutsideNavBar(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutsideNavBar);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideNavBar);
    };
  }, [dropdownRef]);

  const dropdownList = listElements?.map((each: any, index: number) => (
    <option key={index} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
      {each.name}
    </option>
  ));

  return (
    <div className="flex items-center justify-between gap-4">
      <p className="w-1/4">{title}</p>
      {type === "text" && (
        <input
          value={data}
          onChange={onChange}
          className="w-full h-[50px] border rounded-md  pl-4"
          placeholder={placeholder}
        ></input>
      )}
      {type === "dropdown" && (
        <>
          <div className="relative w-full">
            <input
              value={data}
              className="w-full h-[50px] border rounded-md pl-4"
              placeholder={placeholder}
              onClick={() => setShowDropdown(true)}
            ></input>
            {showDropdown && (
              <select
                className="absolute left-0 w-full py-3 bg-white border text-primary-50 outline-none pl-4"
                name="budget"
                onChange={onChange}
                value={data}
              >
                {dropdownList}
              </select>
            )}
          </div>
        </>
      )}
      {type === "phone" && (
        <input
          onChange={onChange}
          className="w-full h-[50px] border rounded-md pl-4"
          placeholder={placeholder}
        ></input>
      )}
    </div>
  );
};
