import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://github.com/Rohansenapati",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/rohan-senapati-50a1a324b",
    icon: <AiFillLinkedin className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100008287984429&mibextid=ZbWKwL",
    icon: <AiFillFacebook className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/r_o_h_a_n_2603?igsh=ZHZ1NTd5ZnhlMHZr",
    icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];
const quickLinks03 = [
  {
    path: "/home",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[1px] border-[text-headingColor]">
      <div className="container mt-6">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="logo" />
            <p className="text-[12px] leading-7 font-[400] text-textColor mt-1">
              Copyright &#169; {year} developed by Rohan Senapati all right
              reserved
            </p>
            <div className="flex items-center mt-1 gap-3">
              {socialLinks.map((link, index) => (
                <Link
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-[black] hover:border-none"
                  target="blank"
                  to={link.path}
                  key={index}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    className="text-[16px] leading-7 font-[400] text-headingColor"
                    to={item.path}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    className="text-[16px] leading-7 font-[400] text-headingColor"
                    to={item.path}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    className="text-[16px] leading-7 font-[400] text-headingColor"
                    to={item.path}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
