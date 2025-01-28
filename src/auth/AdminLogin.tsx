import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { green, blue, borderL, Outsideborder } from "../shared/Buttonstyle";
import { addauthadmin } from "../Redux/slices/authAdmin";
import { adminlogged } from "../Redux/slices/Loggedinslice";

type Props = {
  email: string;
  password: string;
};
// type prop = {
//   setautheticatedadmin: React.Dispatch<React.SetStateAction<boolean>>;
// };
const Adminlogin = () => {
  const selector = useSelector(
    (state: RootState) => state.admin.existingadmins
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const form = useForm<Props>();

  const { handleSubmit, register, control, formState } = form;

  const { errors } = formState;

  const submitt = (data: Props) => {
    dispatch(addauthadmin(data));
    const emailVAl = selector.find((abc) => abc.email === data.email);
    const pwVAl = selector.find((abc) => abc.password === data.password);

    // console.log(emailVAl);

    if (emailVAl && pwVAl) {
      // console.log(emailVAl);
      // setautheticatedadmin(true);
      dispatch(adminlogged(true));
      navigate("/homeadmin", { replace: true });
    } else {
      // console.log("not found");
    }
  };

  const onError = () => { };

  return (
    <>
      <div className="w-full h-full">
        <div className="w-5/6 mx-auto mt-32 pb-8">

          <div className="w-3/4 mx-auto">

            <h1 className="  my-2 ml-3"> <span className="text-2xl font-semibold">Sign in</span>  </h1>

            <form
              className="flex flex-col  p-3 shadow-md"
              noValidate
              onSubmit={handleSubmit(submitt, onError)}
            >
              <label htmlFor="email"></label>
              <input
                placeholder="Email"
                className={`${borderL} px-2 py-1 text-sm`}

                type="text"
                {...register("email", {
                  required: { value: true, message: "Can't be empty" }, //value defines if the validation is on or off
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, ///this is a different value
                    message: "Invalid format",
                  },
                })}
              ></input>
              <p className="text-red-600 text-xs my-2 h-[20px]">{errors.email?.message}</p>

              <label htmlFor="password"></label>
              <input
                placeholder="Password"
                className={`${borderL} px-2 py-1 text-sm`}

                type="password"
                {...register("password", {
                  required: { value: true, message: "cant be empty" },
                })}
              ></input>

              <p className="text-red-600 text-xs my-2 h-[20px]">{errors.password?.message}</p>
              <div className="flex justify-center mt-3">
                <button type="submit" className={`${blue} mt-5 w-full`}>
                  Login
                </button>
              </div>
            </form>

          </div>



          <DevTool control={control} />

        </div>
        <div className="flex justify-center  space-x-3 items-center">

          <p className="text-xs">create a new account</p>
          <button
            className=" underline text-xs text-primary"
            onClick={() => {
              navigate("/registeradmin");
            }}
          >
            signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Adminlogin;
