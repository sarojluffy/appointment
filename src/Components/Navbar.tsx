import { CiMenuBurger } from "react-icons/ci";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import { blue } from "../shared/Buttonstyle";
import { useState } from "react";

const Navbar = (props: Props) => {
  const [isHovered, setIshovered] = useState<boolean>(false);
  const onEnter = () => {
    setIshovered(true);
  };
  const onExit = () => {
    setIshovered(false);
  };

  return (
    <div className="w-full ">
      <div className="w-5/6 mx-auto py-4 flex justify-between items-center">
        {/* left nav */}
        <div className="">
          <h1 className="text-3xl font-semibold">PeTiFY</h1>
        </div>

        {/* right nav */}
        <div className="w-full">
          <div className="flex justify-end items-center  gap-5 ">
            <div className="hidden md:flex">
              <div
                className={`py-2 px-4  rounded-md  cursor-pointer  hover:transition ease-in-out duration-300 flex items-center relative group hover:text-primary `}
              >
                <p> Log In </p>
                <RiArrowDropDownLine
                  size={25}
                  className="transition-opacity group-hover:opacity-0 duration-300 "
                />

                <div className="absolute bg-red-200 -bottom-2 w-full left-0 bg-transparent h-2"></div>
                <div className="absolute left-0 bottom-[-110px] px-4 py-3 rounded-sm hidden group-hover:block text-terinary bg-secondary transition group-hover:ease-in-out group-hover:duration-500">
                  <button className=" my-2 border-b-[1px] border-transparent hover:border-terinary transition ease-in">
                    Admin
                  </button>
                  <button className="pt-3 border-b-[1px] hover:border-terinary transition ease-in border-transparent">
                    User
                  </button>
                </div>
              </div>

              <div>
                <button className={`${blue}`}>Get Started</button>
              </div>
            </div>

            <div className="md:hidden">
              <CiMenuBurger size={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
