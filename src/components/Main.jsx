import React from "react";
import { Care } from "./Care";
import { Reviews } from "./Reviews";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { First } from "./First";
import { OurServices } from "./OurServices";
import { Pets } from "./Pets";
export const Main = () => {
  return (
    <>
      <First />
      <Pets />
      <OurServices/>
      <Care />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};
