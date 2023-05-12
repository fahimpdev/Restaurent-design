import React, { useState } from "react";
import { GiWineGlass } from "react-icons/gi";
import CustomModaL from "../Modal";

const Visit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancle = () => setIsModalOpen(false);

  return (
    <div className="items-center flex flex-col py-10">
      <GiWineGlass size={55} className="text-[#f77825] mb-8" />
      <h1 className="text-5xl font-bold mb-5 text-[#ffffff]">
        Visit Our Restaurant
      </h1>
      <p className="text-center text-[#999999] text-base mb-5">
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmoda
        tempor
        <br /> incididunt dolor sit amet consectetur.
      </p>
      <button
        onClick={showModal}
        className="text-[#f77825] _hover_effect my-[5px] px-6 border-[#f77825] rounded py-4 border-2"
      >
        RESERVATION POPUP
      </button>

      <CustomModaL
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancle={handleCancle}
      />
    </div>
  );
};
export default Visit;
