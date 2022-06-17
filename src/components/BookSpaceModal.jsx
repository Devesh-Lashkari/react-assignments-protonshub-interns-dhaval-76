import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import moment from "moment";

function BookSpaceModal({
  isOpen,
  arrivalTime,
  handleClose = () => {},
  onBookSpacePress = () => {},
}) {

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box className="absolute bg-white rounded-lg shadow-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 max-h-[85%] min-w-[60%] overflow-auto">
        <Typography variant="h6" className="mb-2">
          New Car Registration
        </Typography>
        <Typography>
          Car Arrival Time: {moment(arrivalTime).format("DD/MM/YYYY HH:mm:ss")}
        </Typography>

        <div className="flex w-full justify-end mt-4">
          <Button
            variant="contained"
            className=" bg-lime-900 "
            onClick={() => onBookSpacePress(arrivalTime)}
          >
            Book your space
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default BookSpaceModal;
