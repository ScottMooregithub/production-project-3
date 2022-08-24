import React from "react";
import sphere from "../../assets/images/Sphere favicon .png";
import hat from "../../assets/images/Magic Mark.png";
import crystal from "../../assets/images/Light Worker.png";
import money from "../../assets/images/CashMoney.png";
import { Link } from "react-router-dom";

const DetailsSection = () => {
  return (
    <div className="bg-darkGrey text-white py-20 mt-10">
      <div className="px-4 sx:px-14 md:px-24 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="flex items-center gap-4">
        <Link to="/sorcerers-sphere" className="w-32 min-w-[100px]">
            <img src={sphere} alt="" className="w-full" />
          </Link>
          <div>
            <h1 className="text-xl tracking-widest">Sorcerer's Spehere</h1>
            <p className="text-md tracking-widest leading-loose mt-1">
              Ask your deepest questions and Sorcerer's sphere will give you the
              answers you need.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
        <Link to="/magic-mark" className="w-32 min-w-[100px]">
            <img src={hat} alt="" className="w-full" />
          </Link>
          <div>
            <h1 className="text-xl tracking-widest">Magic Mark</h1>
            <p className="text-md tracking-widest leading-loose mt-1">
              Is it sarcasm or insults you seek? Pay a visit to Magic Mark and
              all your needs will be met!
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
        <Link to="/light-worker"className="w-32 min-w-[100px]">
            <img src={crystal} alt="" className="w-full" />
          </Link>
          <div>
            <h1 className="text-xl tracking-widest">Light Worker</h1>
            <p className="text-md tracking-widest leading-loose mt-1">
              Child of the Universe, you are loved. Come replenish your soul
              with Light Worker's affirmations.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
        <Link to="/cash-money" className="w-32 min-w-[100px]">
            <img src={money} alt="" className="w-full" />
          </Link>
          <div>
            <h1 className="text-xl tracking-widest">CashMoney</h1>
            <p className="text-md tracking-widest leading-loose mt-1">
              Secrets of the Universe? Well, no. But CashMoney will give you
              lotto numbers to play. Try your luck...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;

//reminders - possible to do top of page link back with https://stackoverflow.com/questions/45583358/open-link-at-top-of-page
//add alt tags and notes
//Look in your bookmarks for the link saved with the svg social share content if we can keep those icons or if we delete