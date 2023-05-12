import React, { useState } from "react";
import logo from "../../Images/logo.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import CustomModaL from "../Modal";

function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancle = () => setIsModalOpen(false);

  return (
    <section className="flex justify-between items-center py-5 ">
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex ">
          <a href="#order">
            <li className="px-5 text-[15px] _hover_effect text-[#CCCCCC] font-bold">
              Service
            </li>
          </a>
          <a href="#recipes">
            <li className="px-5 text-[15px] _hover_effect  text-[#CCCCCC] font-bold">
              Recipes
            </li>
          </a>
          <a onClick={showModal} href="!#">
            <li className="px-5 text-[15px] _hover_effect text-[#CCCCCC] font-bold">
              Reserve Now
            </li>
          </a>

          <a
            className="px-2 text-[#CCCCCC] _hover_effect  font-bold flex justify-center items-center"
            href="!#"
          >
            <FaFacebookF />
          </a>
          <a
            className="px-2 text-[#CCCCCC]  _hover_effect font-bold flex justify-center items-center "
            href="!#"
          >
            <FaTwitter />
          </a>
          <a
            className="px-2 text-[#CCCCCC]  _hover_effect font-bold flex justify-center items-center"
            href="!#"
          >
            <TiSocialInstagram />
          </a>
        </ul>
      </div>
      <CustomModaL
        handleCancle={handleCancle}
        handleOk={handleOk}
        isModalOpen={isModalOpen}
      />
    </section>
  );
}

export default Nav;
