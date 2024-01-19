import React, { useContext, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import gsap from "gsap";
import { UserContext } from "@/pages/_app";
import Link from "next/link";
import { Funding } from "./Funding";

const Navbar = () => {
  const { dialogState, setDialogState } = useContext<any>(UserContext);

  const [viewMenu, setViewMenu] = useState("");

  var tlForm = gsap.timeline({ repeat: 0, repeatDelay: 0 });
  var tlDuration = 0.6;

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
          { x: 0, duration: tlDuration, ease: "power1.inOut" },
          "<"
        );
    } else if (viewMenu === "closeMenu") {
      tlForm
        .fromTo(
          ".navMenu",
          { x: 0 },
          { x: 384, duration: tlDuration, ease: "power1.inOut" }
        )
        .to(".navMenu", { visibility: "hidden", duration: 0 }, "<+=0.4");
    }
  }, [viewMenu]);

  return (
    <>
      <Funding />
      <div className="container mx-auto lg:px-0 px-5">
        <div className="py-4 flex justify-between relative">
          <Link href="/">
            <div>
              <img alt="one-logo"
                className="w-[250px] cursor-pointer"
                src="/images/one-logo.png"
              ></img>
            </div>
          </Link>
          <div className="hidden lg:flex gap-10 items-center">
            <Link
              target="_blank"
              href="https://jobs.lever.co/oneimpression"
              rel="noopener noreferrer"
            >
              <p className="relative cursor-pointer">
                We&apos;re hiring
                <img alt="hiring"
                  className="absolute w-4 -right-3 -top-1"
                  src="/images/hiring.png"
                ></img>
              </p>
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLScJm-gxPRURNWN_3pb9bdTaAWS17JfsqJ2acKnAyCxEtffFwg/viewform"
            >
              <p className="cursor-pointer">Sign up as a creator</p>
            </Link>
            <Link href={"/pricing"}>
              <p className="cursor-pointer">Pricing</p>
            </Link>
            <Link
              href={"https://dashboard.oneimpression.io/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="cursor-pointer">Login</p>
            </Link>

            <Button
              onClick={() => setDialogState({ open: true, type: "form" })}
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
            <img alt="hamburger"
              className="w-[24px] h-[20px]"
              src="/images/hamburger.png"
            ></img>
          </div>
        </div>
        {viewMenu !== "" && (
          <>
            <div className="w-96 h-screen fixed top-0 right-0 z-10 bg-white navMenu">
              <div className="flex flex-col gap-2 pl-6 pt-12 relative">
                <Link
                  target="_blank"
                  href="https://jobs.lever.co/oneimpression"
                  rel="noopener noreferrer"
                >
                  <p className="relative">
                    We&apos;re hiring
                    <img alt="hiring"
                      className="absolute w-4 left-20 bottom-3"
                      src="/images/hiring.png"
                    ></img>
                  </p>
                </Link>

                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/forms/d/e/1FAIpQLScJm-gxPRURNWN_3pb9bdTaAWS17JfsqJ2acKnAyCxEtffFwg/viewform"
                >
                  <p>Sign up as a creator</p>
                </Link>
                <Link href={"/pricing"}>
                  <p>Pricing</p>
                </Link>
                <Link
                  href={"https://dashboard.oneimpression.io/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Login</p>
                </Link>

                <p
                  className="text-[#10B981]"
                  onClick={() => setDialogState({ open: true, type: "form" })}
                >
                  Contact Sales
                </p>
                <img alt="x-mark"
                  onClick={() => setViewMenu("closeMenu")}
                  className="absolute right-6 top-6 w-[12px]"
                  src="/images/xmark-solid.svg"
                ></img>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
