import React from "react";
import logo from "../../assets/images/Sphere favicon .png";
import facebookIcon from "../../assets/images/facebook.png";
import instaIcon from "../../assets/images/instagram.png";

const Footer = () => {
  return (
    <div className="bg-darkGrey text-white py-10 mt-10 relative">
      <div className="flex flex-col justify-center items-center">
        <div className="w-32">
          <img src={logo} alt="" className="w-full" />
        </div>
        <div className="text-center mt-8">
          <p className="text-lg tracking-widest">For Entertainment Purposes Only.<br/>
            &copy; 2022 The Sphere. All Rights Reserved.
          </p>
        </div>
        <div className="flex md:hidden">
          <a href="/">
            <img src={facebookIcon} alt="" className="w-28" />
          </a>
          <a href="/">
            <img src={instaIcon} alt="" className="w-28" />
          </a>
        </div>
      </div>
      <div className="hidden absolute bottom-10 right-10 md:flex">
        <a href="/">
          <img src={facebookIcon} alt="" className="w-28" />
        </a>
        <a href="/">
          <img src={instaIcon} alt="" className="w-28" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

