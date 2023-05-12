import React from "react";
import logo from "../../Images/logo.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

function Nav() {
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
          <a href="!#">
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
    </section>
  );
}

export default Nav;
