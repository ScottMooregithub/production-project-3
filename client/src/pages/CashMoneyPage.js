import React, { useState } from "react";
import moneyImg from "../assets/images/CashMoney.png";
import wandImg from "../assets/images/magic wand.png";
import like from "../assets/images/like.png";
import dislike from "../assets/images/dislike.png";
import circle from "../assets/images/circle.png";
import cashmoney from "../utils/cashmoneyrando.js";
import ShareModal from "../components/Modal/Modal.js";
import { BsFillShareFill } from "react-icons/bs";

const CashMoneyPage = () => {
  const [showResponse, setShowResponse] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="px-4 sm:px-20">
      <div className="flex flex-col-reverse lg:flex-row text-center lg:text-left justify-between items-center gap-6">
        <div className="flex-1">
          <h1 className="text-5xl tracking-widest">CashMoney</h1>
          <p className="text-xl tracking-widest leading-loose mt-4">
            Secrets of the Universe? Well, no. But CashMoney will give you lotto
            numbers to play. Try your luck...
          </p>
        </div>
        <div className="flex justify-end items-center flex-1 lg:pr-10">
          <img src={moneyImg} alt="" className="w-80" />
        </div>
      </div>
      <div className="flex flex-col-reverse mt-10 lg:mt-0 lg:flex-row text-center lg:text-left gap-14">
        <div className="flex-1">
          <img src={wandImg} alt="" className="w-96" />
        </div>
        {!showResponse && (
          <div style={{ flex: 2 }} className="lg:mt-14 lg:ml-20">
            <h1 className="uppercase text-4xl tracking-widest">I am Ready</h1>
            <button
              className="uppercase bg-darkGrey text-lightGrey px-20 py-2 text-2xl mt-6"
              onClick={() => {
                setShowResponse(true);
              }}
            >
              Click
            </button>
          </div>
        )}
        {showResponse && (
          <div style={{ flex: 2 }} className="mt-16">
            <div className="bg-darkGrey text-white text-center py-10 px-10 relative">
              <p className="text-2xl tracking-wider leading-loose">
                {cashmoney()}
              </p>
              <button
                className="px-4 py-2 absolute right-6 bottom-6 share-button"
                type="button"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <BsFillShareFill />
              </button>

              {showModal && <ShareModal setOpenModal={setShowModal} />}
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
              <div
                className="flex flex-col xs:flex-row items-center gap-3"
                style={{ flex: 2 }}
              >
                <p className="text-xl tracking-widest flex-1">
                  Are you satisfied with the Sphere's response?
                </p>
                <div className="flex items-center gap-2 flex-1">
                  <button>
                    <img src={like} alt="" className="w-64" />
                  </button>
                  <button>
                    <img src={dislike} alt="" className="w-64" />
                  </button>
                  <button className="flex justify-center items-center relative">
                    <img src={circle} alt="" className="w-64" />
                    <p className="absolute text-xl">5</p>
                  </button>
                </div>
              </div>
              <button
                className="flex-1 text-3xl tracking-widest"
                onClick={() => {
                  setShowResponse(false);
                }}
              >
                Try Again?
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CashMoneyPage;
