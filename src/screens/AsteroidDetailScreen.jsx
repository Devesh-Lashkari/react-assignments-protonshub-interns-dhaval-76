import React from "react";
import { useStateValue } from "../StateProvider";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function AsteroidDetailScreen() {
  const [
    { asteriodName, nasa_jpl_url, is_potentially_hazardous_asteroid },
    dispatch,
  ] = useStateValue();

  return (
    <div className="flex flex-col items-center min-h-screen pt-3">
      <Typography variant="h5" component="p" gutterBottom>
        Asteroid Name: {asteriodName}
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Nasa jpl url:{" "}
        <Link href={nasa_jpl_url} target="_blank">
          {nasa_jpl_url}
        </Link>
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Is Asteroid hazardous:{" "}
        {is_potentially_hazardous_asteroid ? "Yes" : "No"}
      </Typography>
    </div>
  );
}

export default AsteroidDetailScreen;
