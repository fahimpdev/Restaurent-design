import React, { useState } from "react";
import image1 from "../../Images/r1.png";
import image2 from "../../Images/r2.png";
import image3 from "../../Images/r3.png";

import { BsFlag, BsTag } from "react-icons/bs";
import { TbNotes } from "react-icons/tb";
import CustomModaL from "../Modal";

const OrdersCard = ({ image, tittle, icon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancle = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="px-3 py-3">
      <img className="mb-2" src={image} alt="Fast Food" />
      <h1 className="text-xl font-bold mb-2">{tittle}</h1>
      <p className="text-[#999] mb-3">
        Lorem ipsum dolor sit Seamlessly empower fully researched growth
        strategies interoperable internal.
      </p>
      <button
        onClick={showModal}
        className="flex items-center _hover_effect border-2 border-[#f77825] font-bold rounded my-[5px] text-[#f77825] px-3 py-2  "
      >
        {icon} <span className="ml-2">Order Meal</span>
      </button>
      <CustomModaL
        handleCancle={handleCancle}
        handleOk={handleOk}
        isModalOpen={isModalOpen}
      />
    </div>
  );
};

function Order() {
  return (
    <div id="order" className="py-[60px]">
      <div className="grid mb-5  grid-cols-2">
        <h1 className="text-5xl text-[#444444]  font-bold">
          Make Awesome Heading Section
        </h1>
        <p className="text-xl text-[#bbbbbb]">
          From logo design to website development,
          <br /> hand-picked designers and developers are
          <br /> ready to complete your new project.
        </p>
      </div>
      <div className="grid grid-cols-3">
        <OrdersCard image={image1} tittle="Fast Food" icon={<TbNotes />} />
        <OrdersCard image={image2} tittle="Drinks & Snacks" icon={<BsTag />} />
        <OrdersCard image={image3} tittle="Main Menu Food" icon={<BsFlag />} />
      </div>
    </div>
  );
}

export default Order;
