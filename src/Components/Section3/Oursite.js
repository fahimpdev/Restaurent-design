import React from "react";
import imgA from "../../Images/bigcommerce (1).png";
import imgB from "../../Images/foursquare.png";

import imgC from "../../Images/squarespace.png";
import Container from "../Container";

function Oursite() {
  return (
    <div className="bg-[#f3f3f3]">
      <Container>
        <div className="grid grid-cols-4  py-16 3]  ">
          <div>
            <h1 className="text-xl mb-5 text-[#444444] ">How Trust PixFort</h1>
            <p className="text-base mb-5 text-[#bbbbbb]">
              The Best Companies Which Trust Our Digital Goods
            </p>
          </div>
          <div>
            <img src={imgA} alt="OurService" />
          </div>
          <div>
            <img src={imgB} alt="OurService" />
          </div>
          <div>
            <img src={imgC} alt="OurService" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Oursite;
