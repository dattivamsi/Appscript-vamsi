"use client";

import React, { useState } from "react";
import Image from "next/image";
import "@/components/header.css";
import { useRouter } from "next/navigation";

const Header = () => {
  const [showMenuItems, setShowMenuItems] = useState(false);
  const history = useRouter();

  const showMenu = () => {
    setShowMenuItems((prev) => !prev);
  };

  return (
    <>
      <div className="nav-container">
        <Image
          src="/solar_hamburger-menu-linear.png"
          height={20}
          width={20}
          alt="menu"
          className="moblile-menu"
          onClick={showMenu}
        />
        <div>
          <Image src="/Logo.png" width={20} height={20} alt="logo" />
        </div>
        <div>
          <p className="logo">LOGO</p>
        </div>
        <div>
          <Image src="/Icons.png" width={100} height={15} alt="icons" />
        </div>
      </div>
      <nav className={`nav-items desktop_menu ${showMenuItems ? "show" : ""}`}>
          <ul>
            <li onClick={history.push("/")}>Shop</li>
            <li onClick={history.push("/skills")}>Skills</li>
            <li  onClick={history.push("/stories")}>Stories</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>

      {showMenuItems && (
        <nav className={`nav-items mobile_menu ${showMenuItems ? "show" : ""}`}>
          <ul>
            <li>Shop</li>
            <li>Skills</li>
            <li>Stories</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      )}

      <hr />

      <section className="header_content">
        <div>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </section>
    </>
  );
};

export default Header;
