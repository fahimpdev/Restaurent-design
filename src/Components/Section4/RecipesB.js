import React from "react";
import { BsSuitHeart } from "react-icons/bs";
import Container from "../Container";

function RecipesB() {
  return (
    <div className="relative">
      <div className="absolute h-full w-1/2 right-0  bg-white" />
      <Container>
        <div className="grid grid-cols-2 py-[60px]">
          <div></div>
          <div className=" px-[15px] z-10 ">
            <h1 className="mb-5 text-5xl font-bold">
              Delicious Meals Weekly in inbox
            </h1>
            <p className="text-[#f77825] mb-[10px] text-base font-bold">
              OOR SERVICE IS TOTALLY FREE
            </p>
            <p className="text-[#999] text-base mb-5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
              ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex commodo consequat Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
            <button className="flex  items-center text-base font-bold+ _hover_effect my-[5px] px-3 py-4 border-black rounded border-2">
              <BsSuitHeart className="mr-[5px]" /> Add to Favourits
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default RecipesB;
