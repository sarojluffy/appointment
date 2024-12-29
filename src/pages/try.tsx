import { AppointmentDay } from "../shared/appointment";

const Try = () => {
  return (
    <>
      <div>
        {AppointmentDay[0].time.map((abc) => {
          return <div> {abc.t}</div>;
        })}
      </div>
    </>
  );
};

export default Try;
