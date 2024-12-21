import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addauth } from "../Redux/slices/authslice";
import { green, blue, borderL } from "../shared/Buttonstyle";

type Props = {
  email: string;
  password: string;
};

const Register = () => {
  const form = useForm<Props>();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { handleSubmit, register, control, formState } = form;

  const { errors } = formState;

  const submitt = (data: Props) => {
    // console.log(data);
    // alert("registered");
    dispatch(addauth(data));
    navigate("/login", { replace: true });
  };

  const onError = () => {};

  return (
    <>
      <div className="w-full h-full">
        <div className="w-5/6 mx-auto mt-32">
          <form
            className="flex flex-col w-2/4 mx-auto p-3 border-[1px] border-slate-400"
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

            <button type="submit" className={`${blue} mt-3`}>
              register as user
            </button>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </>
  );
};

export default Register;
