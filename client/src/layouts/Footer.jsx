import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2]">
      <div className="container flex items-center justify-center grid-cols-2 px-5 py-8 mx-auto md:px-14 lg:py-20 gap-y-6 lg:grid-cols-4 gap-x-5">
        <div>
          <h4 className="flex items-center justify-center mb-4 text-lg font-bold uppercase text-palette-chineseBlack">
            Follow us
          </h4>
          <div className="flex items-center justify-center grid-cols-2 font-normal md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-2 text-palette-graniteGray">
            <a className="inline-block " href="/">
              Facebook
            </a>
            <a className="inline-block" href="/">
              Dribbble
            </a>
            <a className="inline-block" href="/">
              Twitter
            </a>
            <a className="inline-block" href="/">
              Behance
            </a>
            <a className="inline-block" href="/">
              Instagram
            </a>
            <a className="inline-block" href="/">
              Pintereset
            </a>
            <a className="inline-block" href="/">
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className="relative">
        <hr className="border-none h-[1px] bg-gray-300" />
        <button className="bg-[#f2f2f2] rounded-full border border-gray-300 p-3 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <IoIosArrowUp className="w-6 h-6 text-gray-300" />
        </button>
      </div>
      <div className="py-10">
        <p className="text-center text-palette-graniteGray">
          &copy; 2024. created by Vidusha
        </p>
      </div>
    </footer>
  );
};

export default Footer;
