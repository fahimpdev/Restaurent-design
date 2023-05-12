import React, { useState } from "react";
import { BsFileText } from "react-icons/bs";

import { BsArrowDownCircle } from "react-icons/bs";
import CustomModaL from "../Modal";
function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    console.log(showModal);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancle = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pt-28 pb-[60px] mx-10 mb-50 flex  justify-center flex-col text-center">
      <div className="pb-[60px]">
        <div className="font-bold text-2xl text-white ">
          <h1 className="mb-5 text-5xl ">Restaurant Landing Page</h1>
        </div>
        <p className="mb-5 text-[22px] text-[#bbbbbb]">
          From logo design to website development, hand-picked designers and
          <br />
          developers are ready to complete.
        </p>
        <div className="flex  justify-center">
          <button
            onClick={showModal}
            className="text-[#ffffff] _hover_effect text-xl my-[5px] px-[22px] py-[15px] rounded font-bold flex items-center justify-center border-2 "
          >
            <BsFileText className="mr-3 " size={22} /> Make a Reservation
          </button>
        </div>
      </div>
      <a
        href="#order"
        className="text-[#ffffff] text-4xl flex p-14 mt-16 justify-center text-center "
      >
        <BsArrowDownCircle size={45} />
      </a>
      <CustomModaL
        handleCancle={handleCancle}
        handleOk={handleOk}
        isModalOpen={isModalOpen}
      />
    </div>
  );
}

export default Home;
