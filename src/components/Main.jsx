import React from "react";
import { Service } from "./Service";
import { Care } from "./Care";
import { Reviews } from "./Reviews";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { First } from "./First";
export const Main = () => {
  return (
    <>
      <First />
      <Service />
      <Care />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};
