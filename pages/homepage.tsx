import React from "react";
import Link from "next/link";
import Image from 'next/image';

// components

import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "../components/Footers/Footer.js";
import FullWidthContainer from "../components/Container/FullWidthContainer";
import TwoButtonPromotion from "../components/Promotions/TwoButtonPromotion";
import NextImage from "../components/Image/NextImage";

export default function Landing() {
  return (
    <>
      <Navbar transparent backgroundClass={"bg-white shadow"} />
        <FullWidthContainer>
          <TwoButtonPromotion/>
          <NextImage/>
        </FullWidthContainer>
      <Footer />
    </>
  );
}
