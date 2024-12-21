import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full">
        <div className="w-5/6 mx-auto mt-32 space-x-5">
          <div className="py-7">Login as</div>

          <button
            className="bg-gray-400 py-1 px-3 rounded-md text-white"
            onClick={() => {
              navigate("/login");
            }}
          >
            User
          </button>
          <button
            className="bg-gray-400 py-1 px-3 rounded-md text-white"
            onClick={() => {
              navigate("/loginadmin");
            }}
          >
            Admin
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
