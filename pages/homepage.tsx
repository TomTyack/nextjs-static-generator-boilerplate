import React from "react";
import Link from "next/link";
import Image from 'next/image';

// components

import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "../components/Footers/Footer.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent backgroundClass={"bg-white shadow"} />
      
      <Footer />
    </>
  );
}
