import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className="w-full  bottom-0 bg-blue-200 py-4  absolute  ">

            {/* for fooetr to not leave space below , use overflow-hidden to its parent div */}

            <div className="w-5/6 mx-auto flex ">

                {/* left footer */}
                <div className="w-2/4">

                    <h3 className="font-semibold mb-3">PeTify</h3>
                    <div className="flex gap-3  items-center">
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />

                    </div>


                </div>


                {/* right footer  */}
                <div className="w-3/4 flex items-center">

                    <p className="text-xs ">©Copyright PeTify 2025 All rights reserved.</p>
                </div>

            </div>


        </div>
    )
}

export default Footer