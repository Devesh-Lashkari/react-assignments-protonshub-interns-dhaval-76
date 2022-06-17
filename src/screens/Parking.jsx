import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { toast } from "react-toastify";
import axios from "axios";

import ButtonAppBar from "../components/AppBar";
import BookSpaceModal from "../components/BookSpaceModal";
import ParkingAvailable from "../components/ParkingAvailable";
import ParkingUnavailable from "../components/ParkingUnavailable";

import {
  availableSlotsSelector,
  parkingSlotsSelector,
  totalSlotsSelector,
} from "../store/selectors";
import { actionTypes } from "../store/parkingReducer";
import PaymentModal from "../components/PaymentModal";

function Parking() {
  const [isMoadalOpen, setIsMoadalOpen] = useState(false);
  const [modalInfo, setmodalInfo] = useState({});
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({});

  const totalSlots = useSelector(totalSlotsSelector);
  const availableSlots = useSelector(availableSlotsSelector);
  const parkingSlots = useSelector(parkingSlotsSelector);

  const disptach = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (totalSlots === 0) {
      navigate("/", { replace: true });
    }
  }, [totalSlots, navigate]);

  const onModalBtnPress = () => {
    if (availableSlots > 0) {
      setmodalInfo({ arrivalTime: new Date() });
      setIsMoadalOpen((prev) => !prev);
    }
  };

  const onModalClose = () => {
    setmodalInfo({});
    setIsMoadalOpen((prev) => !prev);
  };

  const onBookSpacePress = (joiningTime) => {
    disptach({ type: actionTypes.ADD_CAR, payload: { joiningTime } });

    setIsMoadalOpen(false);
  };

  const onParkPress = ({ parkingSpaceId, joiningTime }) => {
    setIsPaymentModalOpen(true);
    let time = moment().diff(moment(joiningTime), "hour", true);
    let displayTime = `${time} hours `;
    let timeDifference = time - Math.floor(time);

    if (timeDifference > 0) {
      timeDifference = Math.round(timeDifference * 60);
      displayTime = `${Math.floor(time)} hours, ${timeDifference} minutes`;

      if (Math.floor(time) === 0) {
        displayTime = `${timeDifference} minutes`;
      }

      time = Math.ceil(time);
    }

    let amount = 10;

    time -= 2;

    if (time > 0) {
      amount += time * 10;
    }

    setPaymentInfo({ time: displayTime, amount, carId: parkingSpaceId });
  };

  const onPaymentModalClose = () => {
    setPaymentInfo({});
    setIsPaymentModalOpen((prev) => !prev);
  };

  const handlePayment = async ({ carId, amount }) => {
    try {
      await axios.post("https://httpstat.us/200", {
        "car-registration": String(carId),
        charge: amount,
      });

      disptach({ type: actionTypes.REMOVE_CAR, payload: carId });
      setPaymentInfo({});
      setIsPaymentModalOpen(false);
    } catch (err) {
      toast.error(err.message, {
        position: toast.POSITION.TOP_CENTER,
        toastId: "homeSubmitError",
      });
    }
  };

  return (
    <div>
      <ButtonAppBar />

      <Typography variant="h4" className="font-bold text-center">
        Available Parking Slots
      </Typography>

      <div className="my-2 flex flex-wrap ">
        <Button
          disabled={availableSlots <= 0}
          variant="contained"
          className="mx-2 my-3"
          onClick={onModalBtnPress}
        >
          Book your space
        </Button>
        <Typography
          variant="h6"
          className="mx-2 my-3 text-white rounded-md bg-lime-900 px-3 py-1"
        >
          Total Available Spaces: {availableSlots}
        </Typography>
        <Typography
          variant="h6"
          className="mx-2 my-3 text-white rounded-md bg-lime-900 px-3 py-1"
        >
          Total Spaces: {totalSlots}
        </Typography>
      </div>

      <div className="flex flex-wrap my-2">
        {parkingSlots.map((item) => {
          if (item.available) {
            return <ParkingAvailable parkingSpaceId={item.parkingSpaceId} />;
          } else {
            return (
              <ParkingUnavailable
                parkingSpaceId={item.parkingSpaceId}
                onClick={() => onParkPress(item)}
              />
            );
          }
        })}
      </div>

      <BookSpaceModal
        isOpen={isMoadalOpen}
        arrivalTime={modalInfo.arrivalTime}
        handleClose={onModalClose}
        onBookSpacePress={onBookSpacePress}
      />

      <PaymentModal
        isOpen={isPaymentModalOpen}
        handleClose={onPaymentModalClose}
        amount={paymentInfo.amount}
        timeSpent={paymentInfo.time}
        handlePayment={handlePayment}
        carId={paymentInfo.carId}
      />
    </div>
  );
}

export default Parking;
