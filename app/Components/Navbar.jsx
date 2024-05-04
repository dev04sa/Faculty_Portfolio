"use client";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const menu = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Contact",
    },
    {
      id: 4,
      name: "Skills",
    },
    {
      id: 5,
      name: "Subjects",
    },
    {
      id: 6,
      name: "Journals",
    },
  ];
  return (
    <>
      <div className=" flex px-4 py-1 mt-2  items-center justify-between md:justify-between lg:justify-between     ">
        <ul className=" w-full font-bold mx-32  md:flex md:justify-between  lg:flex  hidden gap-2   ">
          {menu.map((item) => {
            return (
              <li
                className="  px-3 py-1 pb-2 hover:text-red-600 rounded-full cursor-pointer   "
                key={item.id}
              >
                {" "}
                {item.name}{" "}
              </li>
            );
          })}
        </ul>
        <div className=" md:hidden lg:hidden ">
          {toggle ? (
            <HiMenuAlt3
              className=" text-[30px] cursor-pointer "
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <RxCross2
              className=" text-[30px] cursor-pointer "
              onClick={() => setToggle(!toggle)}
            />
          )}

          {!toggle ? <MenuOverlay menu={menu} /> : null}
          {/* {
        !toggle ? <ul className="  flex flex-col  gap-2 ml-[-80px]  absolute items-center bg-gray-200 rounded-xl p-2 " >
   {menu.map((item) => {
      return <li className="  px-3 py-1 pb-2 hover:bg-blue-400  hover:text-white rounded-full cursor-pointer   " key={item.id}> {item.name} </li>;
    })}
   </ul> : null
        
    } */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
