import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/Sphere.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="mt-6 md:mt-0">
        <h1 className="uppercase text-3xl text-dark tracking-widest">
          Ask and you shall recieve
        </h1>
        <h1 className="text-5xl text-darkGrey mt-3">Sorcerer's Sphere</h1>
      </div>
      <Link to="/sorcerers-sphere" className="lg:w-4/12">
        <img src={image} alt="" className="w-full m-0" />
      </Link>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="#100f0d"
          className="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
