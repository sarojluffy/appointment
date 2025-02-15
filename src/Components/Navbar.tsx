import { CiMenuBurger } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

import { blue } from "../shared/Buttonstyle";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate()
  const [isHovered, setIshovered] = useState<boolean>(false);
  const [isToogle, setIstoogle] = useState<boolean>(false);

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
      <div className="w-full flex justify-between fixed top-0 ">
        <div className="w-5/6 mx-auto py-4 flex justify-between items-center max-w-7xl  shadow-md px-3 rounded-md bg-blue-200">
          {/* left nav */}
          <div className="">
            <h1 className="text-3xl font-semibold">PeTiFY</h1>
          </div>

          {/* right nav */}

          <div className="w-full flex ml-3">




            <div className="  items-center  w-full   justify-center gap-6 whitespace-nowrap hidden md:flex ">
              <div className="hover:text-primary cursor-pointer">Our Services</div>
              <div className="hhover:text-primary ">Book Slots</div>
              <div className="hover:text-primary ">Pricing</div>
              <motion.div className="hover:text-primary " >
                {" "}
                Contact Us
              </motion.div>
            </div>

            <div className="w-full flex justify-end items-center gap-8">
              <div className="flex justify-end items-center  gap-5 ">
                <div className="flex items-center">
                  <motion.div
                    onClick={() => { navigate("/login") }}
                    className={` py-2 px-4 hidden md:flex rounded-md  cursor-pointer  hover:transition ease-in-out duration-300  items-center relative group hover:text-primary `}
                    onMouseEnter={onEnter}
                    onMouseLeave={onExit}
                  >
                    <p className="whitespace-nowrap "> Login </p>
                    <RiArrowDropDownLine
                      size={25}
                      className=" transform transition-transform group-hover:-rotate-180 ease-in-out duration-100 "
                    // className=" transform transition-transform duration-300 ease-in-out group-hover:-rotate-180"
                    />

                    <div className="absolute bg-red-200 -bottom-2 w-full left-0 bg-transparent h-2"></div>
                    {/* {LoginC ? <></> : <></>} */}

                    <motion.div
                      onClick={() => { navigate("/loginadmin") }}
                      initial="exit"
                      animate={isHovered ? "enter" : "exit"}
                      variants={Animate}
                      className=" absolute hover:flex left-0 bottom-[-110px] px-4 py-3 rounded-sm hidden group-hover:block text-terinary bg-secondary transition group-hover:ease-in-out group-hover:duration-500"
                    >
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        // whileHover={{ scale: 1.2 }}
                        className=" my-2 border-b-[1px] border-transparent hover:border-terinary transition ease-in"
                      >
                        Admin
                      </motion.div>
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        // whileHover={{ scale: 1.2 }}
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
                  <motion.div >
                    <button className={`${blue} hidden md:block`} onClick={() => {

                      navigate("/login")
                    }}>
                      Get Started
                    </button>
                  </motion.div>
                </div>
              </div>
              <div
                className="flex "
                onClick={() => {
                  setIstoogle(!isToogle);
                }}
              >
                <div
                  className="md:hidden"
                  onClick={() => setIstoogle(!isToogle)}
                >
                  {/* <AnimatePresence mode="wait"> */}
                  {isToogle ? (
                    <motion.div
                      key="menu-c"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2 }}
                    >
                      <RxCross2 size={32} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu-o"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2 }}
                    >
                      <CiMenuBurger size={32} />
                    </motion.div>
                  )}
                  {/* </AnimatePresence> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <AnimatePresence mode="wait">
        {isToogle && (
          <motion.div
            key="ok"

            {top right bottom left}
            initial={{ clipPath: "inset(0 0 100% 0)" }} // Start fully hidden (revealed from top)
            animate={{ clipPath: "inset(0 0 0% 0)" }}   // Fully revealed
            exit={{ clipPath: "inset(0 0 100% 0)" }}    // Exit by hiding from bottom
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-5/6 mx-auto flex items-center justify-center mt-0 bg-blue-200 p-8 rounded-lg shadow-lg md:hidden  fixed right-0 left-0"
          >
            <div className="flex flex-col gap-6 text-black">
              <div className="text-md ">Our Services</div>
              <div className="text-md ">Book Slots</div>
              <div className="text-md ">Pricing</div>
              <div className="text-md ">Contact Us</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>




    </>
  );
};

export default Navbar;
