import DetailsSection from "../components/DetailsSection/DetailsSection";
import HeroSection from "../components/HeroSection/HeroSection";
import React, { useState, useEffect } from "react";

import image from "../assets/images/hands.png";

const LandingPage = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  console.log("shoudlShowModal", shouldShowModal);

  useEffect(() => {
    console.log(window.localStorage.getItem("modal"));
    if ("modal" in localStorage) {
      console.log("if statement");
      return;
    } else {
      console.log("else statement");
      window.localStorage.setItem("modal", true);
      setShouldShowModal(true);
    }
  }, []);

  const onYesClick = () => {
    setShouldShowModal(false);
  };

  const onNoClick = () => {
    window.location.href = "https://www.chuckecheese.com/";
  };

  return (
    <>
      <div className="px-4 sm:px-14 landing-page">
        <HeroSection />
      </div>
      {shouldShowModal && <EighteenPlus yes={onYesClick} no={onNoClick} />}
      <DetailsSection />
      <div className="flex justify-center items-center mt-10">
        <img src={image} alt="" className="lg:w-3/6" />
      </div>
    </>
  );
};

const EighteenPlus = (props) => {
  console.log("eighteenPlus", props);
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50  flex justify-center items-center">
      <div className="bg-white p-8 rounded-md space-y-4 max-w-md">
        <div className="text-2xl">Are you 18 or older?</div>
        <p>
          If you are not 18 dont click yes or Mark is going to find out and you
          dont want Mark to find out
        </p>
        <div className="space-x-4 flex justify-end">
          <ScottsButton onClick={props.no}>No</ScottsButton>
          <ScottsButton onClick={props.yes}>Yes</ScottsButton>
        </div>
      </div>
    </div>
  );
};

function ScottsButton(props) {
  console.log("scottsButton", props);
  return (
    <button
      onClick={props.onClick}
      className="bg-darkGrey text-white py-2 px-6 rounded-md"
    >
      {props.children}
    </button>
  );
}

export default LandingPage;

// on click yes it returns a do not render eifghteenplus
// on click yes reroutes to google
