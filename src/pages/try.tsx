import { AppointmentDay } from "../shared/appointment";
type Props = {};

const Try = (props: Props) => {
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
