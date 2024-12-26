import { useParams } from "react-router-dom";
import { addbooked, clicked } from "../Redux/slices/Bookedslice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Outsideborder } from "../shared/Buttonstyle";
import { RootState } from "../Redux/store";
import { useEffect, useState } from "react";
import { Getday, ResetDayData12 } from "../Redux/slices/AppointmentSlice";
import { SetTrue } from "../Redux/slices/AppointmentSlice";

type Props = {
  petsName: string;
  issue: string;

  dob: number;
  activa: boolean;
};

type tim = {
  t: string;
  active: boolean;
}[];

interface Daytime {
  id: number;
  t: string;
  i: number;
}

const Home = () => {
  const params = useParams();
  const paramsid = params.id;
  const selector = useSelector((state: RootState) => state.book.bookedpeople);
  const AppTime = useSelector(
    (state: RootState) => state.appoint.dayappointment
  );
  const TodayIs = useSelector((state: RootState) => state.appoint.day);
  if (TodayIs) {
    console.log(TodayIs);
  }

  const match = selector.find((abc) => abc.email === paramsid);

  const edit = match?.activa;
  const pett = match?.pet;
  const iss = match?.issue;
  const dt = match?.dob;

  const dispatch = useDispatch();
  const [TargetValue, setTargetValue] = useState<string | undefined>();
  const [TimeClicked, setTimeClicked] = useState<string>();
  const [showtime, setshowtime] = useState<boolean>(false);
  const [minDate, setMinDate] = useState<string>("");
  const [maxDate, setMaxDate] = useState<string>("");

  // console.log(TargetValue);

  const submitt = (data: Props) => {
    const Datee = +new Date(data.dob);

    dispatch(addbooked({ ...data, paramsid, dob: Datee, activa: true }));
    dispatch(SetTrue(TimeClicked));
    setshowtime(false);
  };
  const error = () => {};

  const form = useForm<Props>({
    defaultValues: { petsName: pett, issue: iss, dob: dt },
  });
  const { handleSubmit, register, formState } = form;
  const { errors } = formState;
  const weekdayNames = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const Today = new Date().getMinutes();

  console.log(Today);
  useEffect(() => {
    const IntervalInsideFunc = () => {
      console.log("called");
      const today = new Date();
      const midnight = new Date();
      const DayArr = today.getDay();

      midnight.setHours(16, 53, 0, 0);
      // console.log(midnight);
      // console.log(today);
      // console.log(midnight.getHours());

      const GetminDiff = midnight.getMinutes() - today.getMinutes();
      console.log(GetminDiff, "o");

      if (GetminDiff <= 0) dispatch(ResetDayData12(weekdayNames[DayArr]));
    };
    const intervalId = setInterval(IntervalInsideFunc, 50000);

    return () => clearInterval(intervalId);
  }, [Today, dispatch]);

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };
  useEffect(() => {
    // Function to update the date range (today and next 7 days)
    const updateDateRange = () => {
      const today = new Date(); // E.g., Today is 2024-12-25
      const nextWeek = new Date(today);
      nextWeek.setDate(today.getDate() + 7); // E.g., Next week is 2024-01-01

      setMinDate(formatDate(today)); // minDate: "2024-12-25"
      setMaxDate(formatDate(nextWeek)); // maxDate: "2024-01-01"
    };

    // Update date range on initial render
    updateDateRange();

    // Set up an interval to check every minute
    const intervalId = setInterval(() => {
      const now = new Date();
      // Check if the current time is midnight
      if (now.getHours() === 0 && now.getMinutes() === 0) {
        updateDateRange(); // Update date range at midnight
      }
    }, 60000); // Check every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

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
              <div className="flex flex-col w-1/3 py-4 ">
                <label htmlFor="dob">pick your date </label>
                <input
                  className="border border-slate-500 "
                  type="date"
                  id="dob"
                  min={minDate} // Dynamically set minimum date
                  max={maxDate} // Dynamically set maximum date
                  {...register("dob", {
                    required: {
                      value: true,
                      message: "dob is required",
                    },

                    valueAsDate: true,
                    onChange: (e) => {
                      // setTargetValue(e.target.value);
                      dispatch(Getday(e.target.value));
                      setshowtime(true);
                    },
                  })}
                  disabled={edit}
                ></input>
                <p className="text-red-400">{errors.dob?.message}</p>
              </div>

              <div>
                <div className="flex gap-4">
                  {showtime ? (
                    <>
                      {" "}
                      {AppTime.map((abc) => {
                        return (
                          <button
                            type="button"
                            disabled={abc.active}
                            className={`p-4 ${
                              abc.active
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-black"
                            } hover:bg-red-300`}
                            onClick={() => {
                              setTimeClicked(abc.t);
                              console.log("clicked");
                            }}
                            key={abc.t}
                          >
                            {abc.t}
                          </button>
                        );
                      })}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              {!edit ? (
                <>
                  <div className="mt-10">
                    <button
                      // disabled={true}
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

              {/* {edit ? (
                <>
                  {" "}
                  <div>
                    <h1>Verify your Details</h1>

                    <div>
                      <p>User : {paramsid}</p>
                      <p>Pet's name : {pett}</p>
                      <p>Issue : {iss}</p>
                      <p>Date Enquiry : {iss}</p>
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        className="underline"
                        onClick={() => {
                          dispatch(clicked(paramsid));
                        }}
                      >
                        edit details
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )} */}
            </form>

            {edit ? (
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
                      dispatch(clicked(paramsid));
                    }}
                  >
                    edit details
                  </p>
                </div>
              </>
            ) : null}
          </div>
        </div>
        {/* <Try /> */}
      </div>
    </>
  );
};

export default Home;
