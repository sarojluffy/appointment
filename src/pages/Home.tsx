import { useParams } from "react-router-dom";
import { addbooked } from "../Redux/slices/Bookedslice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Outsideborder } from "../shared/Buttonstyle";
import { RootState } from "../Redux/store";
import { bookedinlog, editinlog } from "../Redux/slices/Loggedinslice";
import { useState } from "react";
type Props = {
  petsName: string;
  issue: string;

  dob: string;
};

const Home = () => {
  const params = useParams();
  const paramsid = params.id;
  const selector = useSelector((state: RootState) => state.book.bookedpeople);

  const Bookedd = useSelector((state: RootState) => state.log.bookedD);
  const edit = useSelector((state: RootState) => state.log.editt);
  // const [Bookedd, setBookedd] = useState<boolean>(false);
  // const [edit, setedit] = useState<boolean>(false);

  const match = selector.find((abc) => abc.email === paramsid);
  const pett = match?.pet;
  const iss = match?.issue;
  const dt = match?.dob;

  const dispatch = useDispatch();

  const submitt = (data: Props) => {
    const formatteddob = new Date(data.dob).toDateString();

    dispatch(addbooked({ ...data, paramsid, dob: formatteddob }));

    dispatch(bookedinlog(true));
    dispatch(editinlog(true));
  };
  const error = () => {};

  const form = useForm<Props>({
    defaultValues: { petsName: pett, issue: iss, dob: dt },
  });
  const { handleSubmit, register, formState } = form;
  const { errors } = formState;

  return (
    <>
      <div className="w-full my-9">
        <div className="w-5/6 mx-auto">
          <div className="">
            <h1 className="font-bold">Welcomeback {paramsid}</h1>
          </div>

          <div className="">
            <form onSubmit={handleSubmit(submitt, error)} noValidate>
              <div className="flex flex-col">
                <label htmlFor="pets name">Pet's name</label>
                <input
                  type="text"
                  className="border-2 border-slate-500 my-5 w-1/3"
                  {...register("petsName", {
                    required: { value: true, message: "cant be empty" },
                  })}
                  disabled={edit}
                ></input>
                <p className="text-red-400">{errors.petsName?.message}</p>

                <p>{errors.petsName?.message}</p>
              </div>

              <div className="flex flex-col">
                <label htmlFor="issue">issue</label>
                <textarea
                  className="border-2 border-slate-500 w-3/4"
                  {...register("issue", {
                    required: { value: true, message: "cant be empty" },
                  })}
                  disabled={edit}
                ></textarea>
                <p className="text-red-400">{errors.issue?.message}</p>
              </div>
              <div className="flex flex-col w-2/3 py-4 ">
                <label htmlFor="dob">pick your date </label>
                <input
                  className="border border-slate-500"
                  type="date"
                  id="dob"
                  {...register("dob", {
                    required: {
                      value: true,
                      message: "dob is required",
                    },
                    valueAsDate: true,
                  })}
                  disabled={edit}
                ></input>
                <p className="text-red-400">{errors.dob?.message}</p>
              </div>
              {Bookedd ? (
                <>
                  {" "}
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="bg-green-500 rounded-md py-1 text-white px-2"
                    >
                      book an appointment
                    </button>
                  </div>
                </>
              ) : (
                <></>
              )}
            </form>

            {Bookedd && edit ? (
              <>
                <div className={`${Outsideborder}w-full mt-4 py-3 px-1`}>
                  <h1 className="font-semibold">Details submitted</h1>

                  <p>User : {paramsid}</p>
                  <p>Pet's name : {pett}</p>
                  <p>Issue : {iss}</p>
                  <p>Booked date : {dt}</p>

                  <p
                    className="underline mt-2"
                    onClick={() => {
                      dispatch(editinlog(false));
                    }}
                  >
                    edit details
                  </p>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
