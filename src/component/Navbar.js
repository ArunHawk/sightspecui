import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../App.css";
import { Grid } from "@mui/material";
import Date from "./Date";
import SliderStyle from "./SliderStyle";
import "../App.css"


export default function DisabledTabs() {
  const mystyle = {
    fontSize: 13,
    underline: { textDecorationLine: "underline" },
    fontFamily: "Arial",
    
  };

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <br></br>
      <div className="dateback">
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <div className="Activeborder">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="All" style={mystyle} />
              <Tab label="Shipped" style={mystyle} />
              <Tab label="Processing" style={mystyle} />
            </Tabs>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Date />{" "}
        </Grid>

        <Grid item xs={3}>
          <SliderStyle />
        </Grid>
      </Grid>
      </div>
    
    </>
  );
}
