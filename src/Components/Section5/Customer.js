import React from "react";
import customer1 from "../../Images/t3.png";
import customer2 from "../../Images/t2.png";

function Customer() {
  const CustomerInfo = ({ image, name }) => {
    return (
      <div>
        <div className="items-center flex flex-col">
          <img
            className="rounded-full w-20 h-20 mb-3 _customer_img_border"
            src={image}
            alt="customer"
          />
          <p className="mb-5 text-center text-base text-[#999999]">
            Lorem ipsum dolor sit amet consectet adipiscing elit sed do eiusmoda
            tempo incididunt ut labore et dolore magnar aliqua Ut enim ad
            voluptate velit esse.
          </p>
          <h1 className="text-sm font-bold text-[#222222]">{name}</h1>
        </div>
      </div>
    );
  };

  return (
    <div className="py-[60px]">
      <div className="grid mb-5  grid-cols-2">
        <h1 className="text-5xl mb-5 font-bold">
          Make Awesome Heading Section
        </h1>
        <p className="text-xl mb-5 text-[#bbbbbb]">
          From logo design to website development,
          <br /> hand-picked designers and developers are
          <br /> ready to complete your new project.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-[60px] ">
        <CustomerInfo image={customer1} name="Mark Smith" />
        <CustomerInfo image={customer2} name="John Due" />
      </div>
    </div>
  );
}

export default Customer;
