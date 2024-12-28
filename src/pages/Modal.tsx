import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { blue, red } from "../shared/Buttonstyle";
import { useDispatch } from "react-redux";
import { cancelbooked, canceledUsers } from "../Redux/slices/Bookedslice";

type props = {
  children: React.ReactNode;
  mail: string | undefined;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ children, mail }: props) {
  console.log(mail, "ok");
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const confirmM = async () => {
    await dispatch(canceledUsers(mail));
    dispatch(cancelbooked(mail));
    handleClose();
    // window.location.reload();
  };

  return (
    <div>
      <button onClick={handleOpen} className={`${red}`}>
        {children}
      </button>
      {/* <Button onClick={handleOpen} className={`${red}`}>
        Open modal
      </Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div>
              <div>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  className="text-xl font-bold"
                >
                  Do you want to cancel?
                </Typography>
              </div>
              <div className="mt-6 space-x-5">
                <button
                  className={`${red}`}
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Cancel
                </button>
                <button className={`${blue}`} onClick={confirmM}>
                  Confirm{" "}
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
