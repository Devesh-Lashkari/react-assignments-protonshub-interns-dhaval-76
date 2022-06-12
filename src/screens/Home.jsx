import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useStateValue } from "../StateProvider";

function Home() {
  // const [state, dispatch] = useStateValue();

  // console.log({ state });

  const [asteroidId, setAsteroidId] = useState("");

  const navigate = useNavigate();

  const onSubmitPress = () => {
    if (typeof asteroidId === "string" && asteroidId !== "") {
      navigate(`/pokemon/${asteroidId.toLowerCase()}`);
    } else {
      toast.error("Input can't be empty", {
        position: toast.POSITION.TOP_CENTER,
        toastId: "homeSubmitError",
      });
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={onSubmitPress}
      >
        <div>
          <TextField
            label="Enter Asteroid ID"
            variant="outlined"
            value={asteroidId}
            onChange={(e) => setAsteroidId(e.target.value)}
          />
          <Button
            disabled={!asteroidId}
            style={{ marginTop: "10px" }}
            onClick={onSubmitPress}
            variant="outlined"
          >
            Submit
          </Button>
          <Button
            style={{ marginTop: "10px" }}
            onClick={onSubmitPress}
            variant="outlined"
          >
            Random Asteroid
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default Home;
