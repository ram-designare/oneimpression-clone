import { Hero } from "@/sections/Home/Hero";
import { MainLayout } from "../layout/MainLayout";
import { useContext, useEffect, useState } from "react";
import { Creators } from "@/sections/Home/Creators";
import { Metrics } from "@/sections/Home/Metrics";
import { StayOrganised } from "@/sections/Home/StayOrganised";
import { BackedBy } from "@/sections/Home/BackedBy";
import { FeaturedIn } from "@/sections/Home/FeaturedIn";
import { Join } from "@/sections/Home/Join";
import Footer from "@/components/Footer/Footer";
import { Funding } from "@/components/Navbar/Funding";
import { UserContext } from "./_app";
import { Dialog } from "@/components/Dialog/Dialog";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { Stats } from "@/sections/Home/Stats";

// import { BASE_URL } from "../utils/Constants";
export const Home = () => {
  const { dialogState, setDialogState } = useContext<any>(UserContext);

  return (
    <>
      <MainLayout>
        <Funding />
        <Hero />
        <Stats />
        <Creators />
        <Metrics />
        <StayOrganised />
        <BackedBy />
        <FeaturedIn />
        <Join />
        <Footer />
        {/* <ContactForm /> */}
      </MainLayout>
      {dialogState.type === "form" && (
        <Dialog
          isOpen={dialogState.open}
          closeDialog={() => setDialogState({ open: false, type: "" })}
        >
          <ContactForm />
        </Dialog>
      )}
    </>
  );
};

export default Home;
