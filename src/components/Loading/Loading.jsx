import React from "react";
import logo from "../../assets/logo.png"

const Loader = ({ inline = false }) => {
  return (
    <div
      className={
        inline
          ? "flex justify-center items-center"
          : "fixed inset-0 flex justify-center items-center bg-white z-50"
      }
    >
      <div className="flex h-30 gap-1 items-center text-3xl md:text-7xl font-bold bg-[linear-gradient(125.07deg,_rgba(99,46,227,1),_rgba(159,98,242,1)_100%)] text-transparent bg-clip-text">
        L <span>
          <img className="animate-spin w-8 md:w-18" src={logo} alt="" />
          </span> ading
      </div>
    </div>
  );
};

export default Loader;
