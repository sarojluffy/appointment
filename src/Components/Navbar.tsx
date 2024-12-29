import { CiMenuBurger } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

import { blue } from "../shared/Buttonstyle";
import { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [isHovered, setIshovered] = useState<boolean>(false);

  // const [LoginC, setLoginC] = useState<boolean>(false);
  const onEnter = () => {
    setIshovered(true);
  };
  const onExit = () => {
    setIshovered(false);
  };

  const Animate = {
    enter: {
      opacity: 1,
      // y: 0,
      // rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      // y: -12,
      // rotateX: -60,
      transition: {
        duration: 0.3,
      },
      display: "none",
    },
  };

  return (
    <>
      <div className="w-full ">
        <div className="w-5/6 mx-auto py-4 flex justify-between items-center max-w-7xl  shadow-md px-3 rounded-md">
          {/* left nav */}
          <div className="">
            <h1 className="text-3xl font-semibold">PeTiFY</h1>
          </div>

          {/* right nav */}
          <div className="w-full flex ml-3">
            <div className="  items-center  w-full   justify-center gap-12 whitespace-nowrap hidden md:flex ">
              <div className="cursor-pointer">Our Services</div>
              <div>Book Slots</div>
              <div>Pricing</div>
              <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
                {" "}
                Contact Us
              </motion.div>
            </div>
            <div className="md:hidden">
              <CiMenuBurger size={32} />
            </div>

            <div className="w-2/3">
              <div className="flex justify-end items-center  gap-5 ">
                <div className="hidden md:flex items-center">
                  <motion.div
                    className={`py-2 px-4  rounded-md  cursor-pointer  hover:transition ease-in-out duration-300 flex items-center relative group hover:text-primary `}
                    onMouseEnter={onEnter}
                    onMouseLeave={onExit}
                  >
                    <p className="whitespace-nowrap"> Log In </p>
                    <RiArrowDropDownLine
                      size={25}
                      className=" transform transition-transform group-hover:-rotate-180 ease-in-out duration-100 "
                      // className=" transform transition-transform duration-300 ease-in-out group-hover:-rotate-180"
                    />

                    <div className="absolute bg-red-200 -bottom-2 w-full left-0 bg-transparent h-2"></div>
                    {/* {LoginC ? <></> : <></>} */}

                    <motion.div
                      initial="exit"
                      animate={isHovered ? "enter" : "exit"}
                      variants={Animate}
                      className=" absolute hover:flex left-0 bottom-[-110px] px-4 py-3 rounded-sm hidden group-hover:block text-terinary bg-secondary transition group-hover:ease-in-out group-hover:duration-500"
                    >
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.2 }}
                        className=" my-2 border-b-[1px] border-transparent hover:border-terinary transition ease-in"
                      >
                        Admin
                      </motion.div>
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.2 }}
                        className="pt-3 border-b-[1px] hover:border-terinary transition ease-in border-transparent"
                      >
                        User
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* <div>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      className={`${blue}`}
                    >
                      Get Started
                    </motion.button>
                  </div> */}
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <button className={`${blue}`}>Get Started</button>
                  </motion.div>
                </div>
                <div className="md:hidden">
                  <CiMenuBurger size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
