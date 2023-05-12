import React from "react";
import { BsFileText } from "react-icons/bs";

import { BsArrowDownCircle } from "react-icons/bs";
function Home() {
  // const [isModalOpen, SetisModalOpen] = useState(false);

  // const showModal = () => {
  //   SetisModalOpen(true);
  // };

  // const handleOk = () => {
  //   SetisModalOpen(false);
  // };
  // const handleCancle = () => {
  //   SetisModalOpen(false);
  // };

  return (
    <div className="pt-28 pb-[60px] mx-10 mb-50 flex justify-center flex-col text-center">
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
          <button className="text-[#ffffff] _hover_effect text-xl my-5 px-4 py-3 rounded font-bold flex items-center justify-center border-2 ">
            <BsFileText className="mr-3 " size={22} /> Make a Reservation
          </button>
        </div>
      </div>
      <a
        href="#order"
        className="text-[#ffffff] text-4xl flex pt-12 mt-14 justify-center text-center "
      >
        <BsArrowDownCircle size={45} />
      </a>
    </div>
  );
}

export default Home;
