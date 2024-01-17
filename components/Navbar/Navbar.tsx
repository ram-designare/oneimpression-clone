import React, { useContext, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import gsap from "gsap";
import { UserContext } from "@/pages/_app";

const Navbar = () => {
  const { dialogState, setDialogState } = useContext<any>(UserContext);

  const [viewMenu, setViewMenu] = useState("");

  var tlForm = gsap.timeline({ repeat: 0, repeatDelay: 0 });
  var tlDuration = 0.4;

  useEffect(() => {
    // disabling scrollbar when the dialog box is open
    document.body.style.overflow = viewMenu === "openMenu" ? "hidden" : "auto";
  }, [viewMenu]);

  useEffect(() => {
    if (viewMenu === "openMenu") {
      tlForm
        .to(".navMenu", { visibility: "visible", duration: 0 })
        .fromTo(
          ".navMenu",
          { x: 384 },
          { x: 0, duration: tlDuration, ease: "power1.out" },
          "<"
        );
    } else if (viewMenu === "closeMenu") {
      tlForm
        .fromTo(".navMenu", { x: 0 }, { x: 384, duration: tlDuration })
        .to(".navMenu", { visibility: "hidden", duration: 0 }, "<+=0.4");
    }
  }, [viewMenu]);


  return (
    <>
      <div className="py-4 flex justify-between relative">
        <div>
          <img className="w-[250px]" src="/images/one-logo.png"></img>
        </div>
        <div className="hidden lg:flex gap-10 items-center">
          <p className="relative">
            We&apos;re hiring
            <img
              className="absolute w-4 -right-3 -top-1"
              src="/images/hiring.png"
            ></img>
          </p>

          <p>Sign up as a creator</p>
          <p>Pricing</p>
          <p>Login</p>

          <Button
            onClickFunction={() => setDialogState({ open: true, type: "form" })}
            bgColor="bg-[#26A69A]"
            text="Contact Sales"
            textColor="white"
          ></Button>
        </div>
        <div
          className="flex lg:hidden items-center"
          onClick={() => {
            setViewMenu("openMenu");
          }}
        >
          <img className="w-[24px] h-[20px]" src="/images/hamburger.png"></img>
        </div>
      </div>
      {viewMenu !== "" && (
        <>
          <div className="w-96 h-screen fixed top-0 right-0 bg-white navMenu">
            <div className="flex flex-col gap-2 pl-6 pt-12 relative">
              <p className="relative">
                We&apos;re hiring
                <img
                  className="absolute w-4 left-20 bottom-3"
                  src="/images/hiring.png"
                ></img>
              </p>

              <p>Sign up as a creator</p>
              <p>Pricing</p>
              <p>Login</p>

              <p className="text-[#10B981]" onClick={() => setDialogState({ open: true, type: "form" })}>Contact Sales</p>
              <img
                onClick={() => setViewMenu("closeMenu")}
                className="absolute right-6 top-6 w-[12px]"
                src="/images/xmark-solid.svg"
              ></img>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
