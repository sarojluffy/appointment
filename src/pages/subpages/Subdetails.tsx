import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { Outsideborder } from "../../shared/Buttonstyle";

const Subdetails = () => {
  const selector = useSelector((state: RootState) => state.book.bookedpeople);

  const ParamsUser = useParams().user;

  const details = selector.find((abc) => abc.email === ParamsUser);

  const user = details?.email;

  const navigate = useNavigate();

  // console.log(details);

  return (
    <>
      <div className="w-full">
        <div className="w-5/6 mx-auto">
          <div className={`${Outsideborder}w-full mt-4 py-3 px-1 `}>
            <h1 className="font-semibold">Details submitted</h1>

            <p>User : {details?.email}</p>
            <p>Pet's name : {details?.pet}</p>
            <p>Issue : {details?.issue}</p>
            <p>Booked date : {details?.dob}</p>

            <p
              className="underline mt-2"
              onClick={() => {
                navigate(`/home/${user}`);
              }}
            >
              edit details
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subdetails;
