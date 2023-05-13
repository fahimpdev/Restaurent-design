import React, { useState } from "react";
import logo from "../../Images/logo.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import CustomModaL from "../Modal";
import Container from "../Container";
import Home from "../Home/Home";

const Navli = ({ tittle, link, onClick }) => {
  return (
    <a onClick={onClick} href={link}>
      <li className="px-5 text-[15px] _hover_effect text-[#CCCCCC] font-bold">
        {tittle}
      </li>
    </a>
  );
};

function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancle = () => setIsModalOpen(false);

  return (
    <div className="background">
      <Container>
        <div>
          <section className="flex justify-between items-center  py-5 ">
            <div className="">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <ul className="flex ">
                <Navli tittle="Service" link="#order" />
                <Navli tittle="Recipes" link="#recipes" />
                <Navli tittle="Reserve Now" link="!#" onClick={showModal} />

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
          <Home />
        </div>
      </Container>
    </div>
  );
}

export default Nav;
