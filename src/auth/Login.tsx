import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { useState } from "react";
import { addlog } from "../Redux/slices/Loggedinslice";
import { green, blue, borderL } from "../shared/Buttonstyle";
import { logged, currentuser } from "../Redux/slices/Loggedinslice";

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
    console.log("emailVAl:", emailVAl);
    console.log("pwVAl:", pwVAl);
    if (emailVAl && pwVAl) {
      dispatch(addlog({ ...data, isactive: true }));
      dispatch(currentuser(emailVAl.email));
      console.log(emailval);

      navigate(`/home/${emailVAl.email}`, { replace: true });
      // setautheticated(true);
    } else {
      setemailval("email or pw doesnt match");
    }
  };

  const onError = () => {};

  return (
    <>
      <div className="w-full h-full">
        <div className="w-5/6 mx-auto mt-32 pb-8">
          <form
            className="flex flex-col w-2/4 mx-auto border-[1px] border-slate-400 p-3 "
            noValidate
            onSubmit={handleSubmit(submitt, onError)}
          >
            <p className="text-red-400">{emailval}</p>

            <label htmlFor="email">email</label>
            <input
              className={`${borderL}`}
              type="text"
              {...register("email", {
                required: { value: true, message: "Can't be empty" }, //value defines if the validation is on or off
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, ///this is a different value
                  message: "Invalid format",
                },
              })}
            ></input>
            <p className="text-red-400">{errors.email?.message}</p>

            <label htmlFor="password">password</label>
            <input
              className={`${borderL}`}
              type="password"
              {...register("password", {
                required: { value: true, message: "cant be empty" },
              })}
            ></input>

            <p className="text-red-400">{errors.password?.message}</p>
            <div className="flex justify-center mt-3">
              <button type="submit" className={`${blue}`}>
                Login
              </button>
            </div>
          </form>
          <DevTool control={control} />
        </div>
        <div className="flex justify-center items-center">
          <button
            className={`${green}`}
            onClick={() => {
              navigate("/register");
            }}
          >
            signup as User
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
