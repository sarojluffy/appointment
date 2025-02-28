import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { searchbooked } from "../Redux/slices/Bookedslice";
import { borderL } from "../shared/Buttonstyle";
import { deletebooked } from "../Redux/slices/Bookedslice";
import { useEffect, useState } from "react";

const Homeadmin = () => {
  const selector = useSelector((state: RootState) => state.book.bookedpeople);
  const selector2 = useSelector(
    (state: RootState) => state.book.searchedbookedpeople
  );
  const dispatch = useDispatch();

  const [searchval, setsearchval] = useState<string>("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(searchbooked(searchval));
    }, 600);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchval]);

  const deletee = (val: string) => {
    // console.log(val);

    dispatch(deletebooked(val));
  };

  return (
    <>
      <div className="w-full mt-10">
        <div className="w-5/6 mx-auto ">
          <div className="w-full my-6">
            <input
              type="text"
              onChange={(e) => {
                setsearchval(e.target.value);
              }}
              className={`${borderL} w-full px-2 py-1`}
              placeholder="search by user"
            ></input>
          </div>
          <div>
            {selector2.length ? (
              <>
                {selector2.map((abc) => {
                  return (
                    <div
                      className="flex border border-slate-400 justify-between p-3 mb-3"
                      key={abc.email}
                    >
                      <div>
                        <p>
                          <span className="font-semibold">user :</span> :
                          {abc.email}
                        </p>
                        <p>
                          <span className="font-semibold">pet name :</span> :
                          {abc.pet}
                        </p>
                        <p>
                          <span className="font-semibold">pet issues :</span> :
                          {abc.issue}
                        </p>
                        <p>
                          <span className="font-semibold">
                            appointment enquiry for :
                          </span>
                          {new Date(abc.dob ?? Date.now()).toDateString()}
                        </p>
                        <p>
                          <span className="font-semibold">Time :</span> :
                          {abc.bookedtime}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          deletee(abc.email);
                        }}
                      >
                        delete
                      </button>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {" "}
                {selector.length ? (
                  <>
                    {selector.map((abc) => {
                      return (
                        <div
                          className="flex border border-slate-400 justify-between p-3 mb-3"
                          key={abc.email}
                        >
                          <div>
                            <p>
                              <span className="font-semibold">user :</span> :
                              {abc.email}
                            </p>
                            <p>
                              <span className="font-semibold">pet name :</span>{" "}
                              :{abc.pet}
                            </p>
                            <p>
                              <span className="font-semibold">
                                pet issues :
                              </span>{" "}
                              :{abc.issue}
                            </p>
                            <p>
                              <span className="font-semibold">
                                appointment enquiry for :
                              </span>
                              {abc.dob}
                            </p>
                          </div>

                          <button
                            onClick={() => {
                              deletee(abc.email);
                            }}
                          >
                            delete
                          </button>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <div>no appointments</div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homeadmin;
