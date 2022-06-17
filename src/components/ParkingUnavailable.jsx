import React from "react";
import Typography from "@mui/material/Typography";

function ParkingUnavailable({ parkingSpaceId, onClick = () => {} }) {
  return (
    <div
      className="bg-red-600 text-white mx-2 my-3 rounded-md p-8 cursor-pointer hover:scale-110 transition-all duration-300 ease-in"
      onClick={onClick}
    >
      <Typography variant="h6" className="font-bold text-center">
        P-{parkingSpaceId}
      </Typography>
      <Typography variant="h6" className=" text-center">
        Unavailable
      </Typography>
    </div>
  );
}

export default ParkingUnavailable;
