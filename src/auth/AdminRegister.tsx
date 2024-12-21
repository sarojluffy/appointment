import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { green, blue, borderL, Outsideborder } from "../shared/Buttonstyle";

import { addauthadmin } from "../Redux/slices/authAdmin";

type Props = {
  email: string;
  password: string;
};

const AdminReg = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const form = useForm<Props>();

  const { handleSubmit, register, control, formState } = form;

  const { errors } = formState;

  const submitt = (data: Props) => {
    dispatch(addauthadmin(data));
    navigate("/loginadmin");
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
            {/* <p>{emailval}</p> */}

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
              <button type="submit" className={`${green}`}>
                Register as admin
              </button>
            </div>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </>
  );
};

export default AdminReg;
