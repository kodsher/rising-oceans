import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <nav
      className="
        flex 
        justify-between 
        items-center 
        p-5
        bg-transparent 
        sticky 
        top-0 
        shadow-md
        z-50
        border-b
        border-b-2
        border-roTeal
        backdrop-blur
      "
    >
      <div className="flex items-center">
        <Image
          src="/icon.png"
          alt="Logo"
          width={50}
          height={50}
          className="mr-2"
        />
        <h1 className="hidden md:block font-bold text-roAquaBlue text-4xl">
          Rising 0ceans
        </h1>
      </div>

      <div>
        <ConnectButton />
      </div>
    </nav>
  );
};

export default Header;