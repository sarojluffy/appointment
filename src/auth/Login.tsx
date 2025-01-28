import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { useState } from "react";
import { addlog } from "../Redux/slices/Loggedinslice";
import { green, blue, borderL } from "../shared/Buttonstyle";
import { currentuser } from "../Redux/slices/Loggedinslice";

type Props = {
  email: string;
  password: string;
  isactive: boolean;
};
// type prop = {
//   setautheticated: React.Dispatch<React.SetStateAction<boolean>>;
// };

const Login = () => {
  const selector = useSelector((state: RootState) => state.auth.existing);

  // console.log(selector);

  const [emailval, setemailval] = useState<string>("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const form = useForm<Props>();

  const { handleSubmit, register, control, formState } = form;

  const { errors } = formState;

  const submitt = (data: Props) => {
    const emailVAl = selector.find((abc) => abc.email === data.email);
    const pwVAl = selector.find((abc) => abc.password === data.password);
    console.log(data);

    if (emailVAl && pwVAl) {
      dispatch(addlog({ ...data, isactive: true }));
      dispatch(currentuser(emailVAl.email));

      navigate(`/home/${emailVAl.email}`, { replace: true });
    } else {
      setemailval("email or pw doesnt match");
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
              <input placeholder="Email"
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

              <p className="text-red-600 text-xs ">{emailval}</p>

              <div className="flex justify-center ">
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
              navigate("/register");
            }}
          >
            signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
