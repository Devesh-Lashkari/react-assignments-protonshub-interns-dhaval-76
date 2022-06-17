import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import ButtonAppBar from "../components/AppBar";
import { actionTypes } from "../store/parkingReducer";

function Home() {
  const [parkingSpace, setParkingSpace] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmitPress = (e) => {
    const temp = parseInt(parkingSpace);
    if (temp > 0) {
      dispatch({
        type: actionTypes.DEFINED_PARKING_SPACE,
        payload: temp,
      });

      navigate("/parking");
    } else {
      e.preventDefault();
      toast.error("Parking Space must be greater than zero!", {
        position: toast.POSITION.TOP_CENTER,
        toastId: "homeSubmitError",
      });
    }
  };

  return (
    <div>
      <ButtonAppBar />

      <div className="m-9 p-5 rounded-xl border-black border-2">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={onSubmitPress}
        >
          <Typography variant="h6" className="font-bold">
            Enter your required space
          </Typography>
          <TextField
            className="min-w-full"
            label="Enter Parking Space"
            variant="outlined"
            type="number"
            value={parkingSpace}
            onChange={(e) => setParkingSpace(e.target.value)}
          />
          <div className="flex min-w-full justify-end">
            <Button
              disabled={!parkingSpace}
              onClick={onSubmitPress}
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Home;
