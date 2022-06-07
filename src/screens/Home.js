import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  const [pokemonInput, setPokemonInput] = useState("");

  const navigate = useNavigate();

  const onSubmitPress = () => {
    if (typeof pokemonInput === "string" && pokemonInput !== "") {
      navigate(`/pokemon/${pokemonInput.toLowerCase()}`);
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
            label="Enter pokemon name"
            variant="outlined"
            value={pokemonInput}
            onChange={(e) => setPokemonInput(e.target.value)}
          />
          <Button
            style={{ marginTop: "10px" }}
            onClick={onSubmitPress}
            variant="outlined"
          >
            Fetch Pokemon
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default Home;
