import React from "react";
import FooterLogo from "../../Images/footer-logo-4-dark.png";

import { TfiGoogle } from "react-icons/tfi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Container from "../Container";

const FooterButtonWithIcon = ({ icon }) => {
  return (
    <button className="h-12 _hover_effect w-12 flex rounded-full mr-[18px] justify-center items-center bg-[#eee]">
      {icon}
    </button>
  );
};

function Footer() {
  return (
    <div className="bg-[#282828]">
      <Container>
        <div className="grid grid-cols-3 gap-2 py-10">
          <img className="mx-[10px]" src={FooterLogo} alt="FooterImage" />

          <p className="text-[#999999] mb-5">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmoda tempor incididunt consectetur adipiscing elit.
          </p>
          <div className="flex justify-end ">
            <FooterButtonWithIcon icon={<FaFacebookF />} />
            <FooterButtonWithIcon icon={<FaTwitter />} />
            <FooterButtonWithIcon icon={<TfiGoogle />} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
