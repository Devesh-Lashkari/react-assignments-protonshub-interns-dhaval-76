import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const API_KEY = "qEpXYZz0eAF9zS5a9rjZXgGZPGsrxlRC8Znuv36s";

function Home() {
  const [state, dispatch] = useStateValue();

  const [asteroidId, setAsteroidId] = useState("");

  const navigate = useNavigate();

  const onSubmitPress = async () => {
    try {
      if (typeof asteroidId === "string" && asteroidId !== "") {
        const res = await axios.get(
          `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${API_KEY}`
        );

        dispatch({
          type: actionTypes.SET_ASTERIOD_DATA,
          payload: res.data,
        });

        navigate(`/asteroid/${asteroidId.toLowerCase()}`);
      } else {
        toast.error("Input can't be empty", {
          position: toast.POSITION.TOP_CENTER,
          toastId: "homeSubmitError",
        });
      }
    } catch (err) {
      toast.error(err.message, {
        position: toast.POSITION.TOP_CENTER,
        toastId: "homeSubmitError",
      });
    }
  };

  const onRandomBtnPress = async () => {
    try {
      const randomRes = await axios.get(
        "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY"
      );

      const randomResData = randomRes.data.near_earth_objects;

      const randomNumber = Math.floor(Math.random() * randomResData.length);
      const randomAsteroidId = randomResData[randomNumber].id;

      const res = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/${randomAsteroidId}?api_key=${API_KEY}`
      );

      dispatch({
        type: actionTypes.SET_ASTERIOD_DATA,
        payload: res.data,
      });

      navigate(`/asteroid/${randomAsteroidId}`);
    } catch (err) {
      toast.error(err.message, {
        position: toast.POSITION.TOP_CENTER,
        toastId: "homeRandomSubmitError",
      });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-3">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={onSubmitPress}
      >
        <div className="min-w-[300px]">
          <TextField
            className="min-w-full"
            label="Enter Asteroid ID"
            variant="outlined"
            value={asteroidId}
            onChange={(e) => setAsteroidId(e.target.value)}
          />
          <div className="flex mt-3 gap-3 justify-between">
            <Button
              className="min-w-max"
              disabled={!asteroidId}
              onClick={onSubmitPress}
              variant="outlined"
            >
              Submit
            </Button>
            <Button
              className="min-w-max"
              onClick={onRandomBtnPress}
              variant="contained"
            >
              Random Asteroid
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Home;
