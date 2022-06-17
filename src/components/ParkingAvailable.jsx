import React from "react";
import Typography from "@mui/material/Typography";

function ParkingAvailable({ parkingSpaceId }) {
  return (
    <div className="bg-green-300 mx-2 my-3 rounded-md py-8 px-9 cursor-not-allowed">
      <Typography variant="h6" className="font-bold text-center">
        P-{parkingSpaceId}
      </Typography>
      <Typography variant="h6" className=" text-center">
        Available
      </Typography>
    </div>
  );
}

export default ParkingAvailable;
