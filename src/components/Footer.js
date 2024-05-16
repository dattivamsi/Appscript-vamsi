"use client";

import Image from "next/image";
import React, { useState } from "react";

const Footer = () => {
  const [showSubFooter, setShowSubFoote] = useState({});

  const showFooterList = (index) => {
    setShowSubFoote({ [index]: !showSubFooter[index] });
  };
  const footerNames = [
    {
      title: "mettā muse",
      subItems: ["mettā muse", "About Us", "Stories", "Artisans","Boutiques","Contact Us","EU Compliances Docs"],
    },
    {
      title: "Quick Links",
      subItems: ["Quick Links", "Orders & Shipping", "Join/Login as a Seller","Payment & Pricing","Return & Refunds"],
    },
    {
      title: "Follows Us",
      subItems: [],
    },
  ];
  return (
    <footer className="footer-section">
      <div className="upper-footer-container">
        <div className="right">
          <div style={{ marginBottom: "3rem" }}>
            <p className="text1">Be the first to know</p>
            <p className="text2">Sign up for updates from mettā muse.</p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Your e-mail"
              className="subscribe-input"
            />
            <button className="subscribe-button">Subscribe</button>
          </div>
          <hr className="h-line"/>
        </div>
        <div className="right left">
          <p className="text1">CONTACT US</p>
          <p className="text2">+44 221 133 5360</p>
          <hr className="h-line"/>
          <p className="text2">customercare@mettamuse.com</p>
          <p className="text1">Currency</p>
          <div className="text-center">
            <Image
              src="/Group.png"
              height={20}
              width={20}
              alt="country"
              className="country-img"
            />
            <span className="p1">Usd</span>
          </div>
          <hr className="h-line"/>
          <p className="text2">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr />
      <div className="under_footer_section">
        <ul>
          <li>mettā muse</li>
          <li>About Us</li>
          <li>Stories</li>
          <li>Artisans</li>
          <li>Boutiques</li>
          <li>Contact Us</li>
          <li>EU Compliances Docs</li>
        </ul>
        <ul>
          <li>Quick Links</li>
          <li>Orders & Shipping</li>
          <li>Join/Login as a Seller</li>
          <li>Payment & Pricing</li>
          <li>Return & Refunds</li>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
        <div>
          <p className="mb1">Follow Us</p>
          <div className="mb1">

          <Image src="/a.png" height={20} width={20} alt="linkedin" />
          <Image src="/insta.png" height={20} width={20} alt="Insta" className="ml1"/>
          </div>
          <div>
            <p className="mb1">mettā muse Accepts</p>
            <Image src="/cards.png" height={20} width={200} alt="linkedin"/>
          </div>
        </div>
      </div>
      <div className="mobile-view-footer">
        {footerNames.map((eachItem, index) => (
          <>
          <ul key={index}>
            <div>
              <li
                onClick={() => showFooterList(index)}
                className="flex-between"
              >
                <span>{eachItem.title}</span>
                {showSubFooter?.[index] ? (
                  <Image src="/arrow-up.png" alt="uparrow" height={10}
                  width={10} />
                ) : (
                  <Image src="/arrow-down.png" alt="downarrow" height={10}
                  width={10} />
                )}
              </li>
            </div>

            {showSubFooter?.[index] && (
              <ul>
                {eachItem.subItems.map((eachSubItem,ind) => (
                  <li key={ind}>{eachSubItem}</li>
                ))}
              </ul>
            )}
          </ul>
          <hr className="h-line"/>
          </>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
