import { useParams } from "react-router-dom";
import { addbooked, clicked, historybooked } from "../Redux/slices/Bookedslice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { blue, green, Outsideborder } from "../shared/Buttonstyle";
import { RootState } from "../Redux/store";
import { useEffect, useState } from "react";
import { Getday, ResetDayData12 } from "../Redux/slices/AppointmentSlice";
import { SetTrue } from "../Redux/slices/AppointmentSlice";
import Modal from "./Modal";

type Props = {
  petsName: string;
  issue: string;

  dob: number;
  activa: boolean;
  bookedtime: string;
};

// type tim = {
//   t: string;
//   active: boolean;
// }[];

// interface Daytime {
//   id: number;
//   t: string;
//   i: number;
// }

const Home = () => {
  const params = useParams();
  const paramsid = params.id;
  const selector = useSelector((state: RootState) => state.book.bookedpeople);
  const AppTime = useSelector(
    (state: RootState) => state.appoint.dayappointment
  );
  const TodayIs = useSelector((state: RootState) => state.appoint.day);
  if (TodayIs) {
    // console.log(TodayIs);
  }

  const match = selector.find((abc) => abc.email === paramsid);

  const edit = match?.activa;
  const pett = match?.pet;
  const iss = match?.issue;
  const dt = match?.dob;
  const btkk = match?.bookedtime;
  const T = new Date(dt ?? Date.now()).toDateString();
  const DefaultIndTime = new Date(T).toISOString().split("T")[0];
  // console.log(DefaultIndTime, "time");
  const dispatch = useDispatch();

  const [TimeSelected, setTimeSelected] = useState<boolean>(false);
  // console.log(TimeSelected, "i am ");
  // console.log(T, "t");
  // const [TargetValue, setTargetValue] = useState<string | undefined>();
  const [TimeClicked, setTimeClicked] = useState<string>();
  const [showtime, setshowtime] = useState<boolean>(false);
  const [minDate, setMinDate] = useState<string>("");
  const [maxDate, setMaxDate] = useState<string>("");
  const [bookedit, seteditbook] = useState<boolean>(false);

  const [TimeVals, setTimeVals] = useState<boolean>(false);
  // console.log(TargetValue);

  // const Presubmit = () => {
  //   setshowtime(false);
  // };

  const submitt = (data: Props) => {
    if (TimeSelected) {
      const Datee = +new Date(data.dob);
      // const DateNow = new Date();
      // console.log("right");

      dispatch(SetTrue(TimeClicked));

      dispatch(
        addbooked({
          ...data,
          paramsid,
          dob: Datee,
          activa: true,
          bookedtime: TimeClicked,
        })
      );
      dispatch(
        historybooked({
          ...data,
          paramsid,
          dob: Datee,
          activa: true,
          bookedtime: TimeClicked,
        })
      );

      setshowtime(false);
    } else {
      alert("select a time ");
    }
  };
  const error = () => { };

  const form = useForm<Props>({
    defaultValues: { petsName: pett, issue: iss },
  });
  const { handleSubmit, register, formState, trigger } = form;
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

  // console.log(Today);
  useEffect(() => {
    const IntervalInsideFunc = () => {
      // console.log("called");
      const today = new Date();
      const midnight = new Date();
      const DayArr = today.getDay();

      midnight.setHours(16, 53, 0, 0);

      const GetminDiff = midnight.getMinutes() - today.getMinutes();
      // console.log(GetminDiff, "o");

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

      // console.log(today);
      nextWeek.setDate(today.getDate() + 6); // E.g., Next week is 2024-01-01
      // console.log(nextWeek);

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

  const handleValidation = async () => {
    // Trigger validation for all fields
    const isValid = await trigger();
    // console.log("Validation status:", isValid);

    if (isValid) {
      setshowtime(false);
    } else {
      // console.log("Validation errors:", errors);
      seteditbook(false);
    }
  };

  // console.log(formatDate(minDate, maxDate);

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
                  disabled={edit || bookedit}
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
                  disabled={edit || bookedit}
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
                      setTimeSelected(true);
                      setTimeVals(true);
                    },
                  })}
                  disabled={edit || bookedit}
                ></input>
                <p className="text-red-400">{errors.dob?.message}</p>
              </div>
              {TimeVals ? (
                <>
                  <div>
                    <div className="flex gap-4">
                      {AppTime.map((abc) => {
                        return (
                          <button
                            type="button"
                            // disabled={abc.active}
                            disabled={abc.active || !TimeSelected}
                            className={`p-4 ${abc.active
                              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                              : "bg-blue-500 text-white hover:bg-blue-600"
                              } `}
                            onClick={() => {
                              setTimeClicked(abc.t);
                              // console.log("clicked");
                              // setTimeSelected(abc.t);
                            }}
                            key={abc.t}
                          >
                            {abc.t}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}

              {!edit && !bookedit ? (
                <>
                  <div className="mt-10">
                    <button
                      onClick={() => {
                        handleValidation();
                        seteditbook(true);
                        setTimeVals(false);
                      }}
                      // disabled={true}
                      type="button"
                      className={`${green}`}
                    >
                      Book Now
                    </button>
                  </div>
                </>
              ) : (
                <></>
              )}

              <div className=" flex mt-14 gap-5">
                <div>
                  {" "}
                  {!edit && !showtime && bookedit ? (
                    <>
                      {" "}
                      <div>
                        <div className="flex justify-between">
                          <button
                            type="button"
                            className={`${blue} `}
                            onClick={() => {
                              dispatch(clicked(paramsid));
                              seteditbook(false);

                              // console.log("clicked");
                            }}
                          >
                            edit details
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  {" "}
                  {!edit && !showtime && bookedit ? (
                    <>
                      <div className="">
                        <button
                          // disabled={true}
                          type="submit"
                          className={`${green}`}
                        >
                          Confirm appointment
                        </button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </form>

            {edit ? (
              <>
                <div
                  className={`${Outsideborder}w-full mt-4 py-3 px-1 flex flex-col gap-4`}
                >
                  <div>
                    <h1 className="font-semibold">Details submitted</h1>

                    <p>User : {paramsid}</p>
                    <p>Pet's name : {pett}</p>
                    <p>Issue : {iss}</p>
                    <p>Booked date : {T}</p>
                    <p>Booked Time : {btkk} </p>
                  </div>
                  <div>
                    <Modal
                      mail={paramsid}
                      bookedTime={btkk}

                    // TimeClicked= {TimeClicked}
                    >
                      Cancel
                    </Modal>
                  </div>

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
