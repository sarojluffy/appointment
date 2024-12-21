import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { green, blue, borderL, Outsideborder } from "../shared/Buttonstyle";

import { useEffect, useState } from "react";
import { addlog } from "../Redux/slices/Loggedinslice";

import { addauthadmin } from "../Redux/slices/authAdmin";

type Props = {
  email: string;
  password: string;
};

const Adminlogin = () => {
  const selector = useSelector(
    (state: RootState) => state.admin.existingadmins
  );

  //   const [emailval, setemailval] = useState<string>("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const form = useForm<Props>();

  const { handleSubmit, register, control, formState } = form;

  const { errors } = formState;

  const submitt = (data: Props) => {
    dispatch(addauthadmin(data));
    const emailVAl = selector.find((abc) => abc.email === data.email);
    const pwVAl = selector.find((abc) => abc.password === data.password);

    if (emailVAl && pwVAl) {
      console.log(emailVAl);
      navigate("/homeadmin");
    } else {
      console.log("not found");
    }
  };

  const onError = () => {};

  return (
    <>
      <div className="w-full h-full">
        <div className="w-5/6 mx-auto mt-32">
          <form
            className={`${Outsideborder} flex flex-col w-2/4 mx-auto p-3`}
            noValidate
            onSubmit={handleSubmit(submitt, onError)}
          >
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
            <div className="flex justify-center">
              <button type="submit" className={`${blue} my-3`}>
                Login
              </button>
            </div>
          </form>

          <DevTool control={control} />
          <div className="flex justify-center pt-5">
            <button
              type="submit"
              className={`${green}`}
              onClick={() => {
                navigate("/registeradmin");
              }}
            >
              Signup as admin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adminlogin;
