import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addauth } from "../Redux/slices/authslice";
import { blue, borderL } from "../shared/Buttonstyle";
import { ToastContainer, toast, Bounce } from 'react-toastify';

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
    dispatch(addauth(data));
    toast.success("registered")
    setTimeout(() => {

      navigate("/login", { replace: true });
    }, 2000);

  };


  const onError = () => { };

  return (
    <>
      <div className="w-full h-full">
        <div className="w-5/6 mx-auto mt-32 pb-8">
          <div className="w-3/4 mx-auto">

            <h1 className="  my-2 ml-3"> <span className="text-2xl font-semibold">Sign up</span>  </h1>
            <form
              className="flex flex-col  p-3 shadow-md"
              noValidate
              onSubmit={handleSubmit(submitt, onError)}
            >
              <label htmlFor="email" className=""></label>
              <input
                placeholder="Email"
                className={`${borderL} px-2 py-1 text-sm`}
                type="text"
                {...register("email", {
                  required: { value: true, message: "field can't be empty" }, //value defines if the validation is on or off
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
                className={`${borderL} px-2 py-1  text-sm`}
                type="password"
                {...register("password", {
                  required: { value: true, message: "field can't be empty" },
                })}
              ></input>

              <p className="text-red-600 text-xs my-2 h-[20px]">{errors.password?.message}</p>

              <button type="submit" className={`${blue} mt-5`}>
                Register
              </button>
              <ToastContainer position="top-left"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
              />
            </form>




          </div>

          <DevTool control={control} />
        </div>
        <div className="flex justify-center  space-x-3 items-center">

          <p className="text-xs">Got an account ?</p>
          <button
            className=" underline text-xs text-primary"
            onClick={() => {
              navigate("/login");
            }}
          >
            signin
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
