import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

function PaymentModal({
  isOpen,
  timeSpent = 0,
  amount = 0,
  carId,
  handleClose = () => {},
  handlePayment = () => {},
}) {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box className="absolute bg-white rounded-lg shadow-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 max-h-[85%] min-w-[60%] overflow-auto">
        <Typography variant="h5" className="font-semibold mb-3">
          Payment
        </Typography>
        <Typography variant="p">For exit, pay below mention amount</Typography>
        <Typography variant="p" className="block">
          Your total time spent is {timeSpent}
        </Typography>
        <Typography variant="p">Your total amount is {amount}$</Typography>

        <div className="flex w-full justify-end mt-4">
          <Button
            variant="contained"
            className=" bg-lime-900 "
            onClick={() => handlePayment({ carId, amount })}
          >
            Pay
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export default PaymentModal;
