import React, { FC, ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

interface DialogProps {
  children: ReactNode;
  closeDialog?: () => unknown;
  isOpen?: any;
}

export const Dialog: FC<DialogProps> = ({ children, closeDialog, isOpen }) => {
  const dialogMain = useRef<any>(null);
  const popupComponent = useRef<any>(null);
  var tlForm = gsap.timeline({ repeat: 0, repeatDelay: 0 });
  var tlDuration = 0.4;

  useEffect(() => {
    {
      isOpen
        ? tlForm
            .fromTo(
              dialogMain?.current,
              { visibility: "hidden" },
              { visibility: "visible", duration: 0 }
            )
            .fromTo(
              popupComponent?.current,
              { scale: 0.1 },
              { scale: 1, tlDuration }
            )
        : tlForm
            .fromTo(
              popupComponent?.current,
              { scale: 1 },
              { scale: 0.1, tlDuration }
            )
            .fromTo(
              dialogMain?.current,
              { visibility: "visible" },
              { visibility: "hidden", duration: 0 }
            );
    }
  }, [dialogMain]);

  return (
    <div
      className="fixed min-h-screen bg-[#1D252D] inset-0 z-100 "
      ref={dialogMain}
    >
      <div
        ref={popupComponent}
        className="relative flex justify-center items-center"
      >
        <span className="relative">
          {children}
          <img
            className="absolute top-4 right-6 w-8 cursor-pointer"
            src="/images/close-form.svg"
            onClick={closeDialog}
          ></img>
        </span>
      </div>
    </div>
  );
};
