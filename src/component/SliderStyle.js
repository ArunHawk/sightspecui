import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

export default function SliderStyle() {
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  

  return (
    <>
      <h5>Price Range</h5>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange1}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
        />
      </Box>
    </>
  );
}
