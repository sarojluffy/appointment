import { useNavigate } from "react-router-dom"
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { blue } from "../../shared/Buttonstyle";

const Getstarted = () => {

    const navigate = useNavigate()
    return (

        <div className="w-5/6 flex items-center justify-center mx-auto">

            <button className={`${blue} flex  items-center gap-3 blue mt-8`} onClick={() => {


                navigate("/login")
            }} >
                <div>
                    <p> Get started </p>

                </div>


                <div> <MdOutlineArrowRightAlt size={20} /></div>

            </button>
        </div>

    )
}

export default Getstarted