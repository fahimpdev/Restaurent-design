import React from "react";
import { Modal } from "antd";
import { BsFileText } from "react-icons/bs";

const CustomModaL = ({ isModalOpen, handleOk, handleCancle }) => {
  return (
    <Modal
      className=" justify-center flex items-center   scroll-smooth   px-[30px] py-[30px]"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancle}
      footer={null}
    >
      <form className="w-[400px] h-[628px]">
        <i className="text-[#a71930] justify-center flex items-center ">
          <BsFileText className="h-[70px] w-[80px] mb-5" />
        </i>

        <h1 className="text-[21px] mb-[10px] font-bold text-center">
          Reservation Form
        </h1>
        <p className="text-center text-base font-bold mb-5">
          You can add unlimited fields from Html
        </p>

        <input
          className="px-[10px] py-[15px] w-[100%] border-2 font-bold border-black mb-5 "
          type="text"
          id="name"
          name="name"
          placeholder=" Your Full Name"
        ></input>
        <br />
        <input
          className="px-[10px] py-[15px] w-[100%] border-2 font-bold border-black mb-5 "
          type="email"
          id="email"
          name="email"
          placeholder=" Your Email"
        ></input>
        <br />
        <input
          className="px-[10px] py-[15px] font-bold w-[100%] border-2 border-black mb-5 "
          type="tel"
          id="phone"
          name="phone"
          placeholder="Your Phone Number"
        ></input>
        <br />
        <select
          id="Person"
          className="px-[10px] py-[15px] w-[100%]  font-bold border-2 border-black mb-5 "
        >
          <option value="One Person" selected>
            One Person
          </option>
          <option value="TWo Person">Two Person</option>
          <option value="Three Person">Three Person</option>
          <option value="More">More</option>
        </select>
        <br />
        <button
          type="submit"
          className="w-[100%] text-base font-bold shadow-none mb-[10px] py-[15px] text-[#ffffff] bg-[#f77825]"
        >
          Send Information
        </button>

        <p className="text-center py-[10px] text-[#AAAAAA] text-base">
          *Some Dummy text goes here
        </p>
      </form>
    </Modal>
  );
};

export default CustomModaL;
