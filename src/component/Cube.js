import { AppBar, Grid, Toolbar } from "@mui/material";
import React from "react";
import git from "../component/images/git.png";
import slack from "../component/images/slack.png";
import "../App.css";
import img from "../component/images/cube.svg";

const Header = () => {
  const appstyle = {
    boxShadow: "none",
    backgroundColor: "#43436B",
    marginLeft:20,
    marginTop: 2
  };

  return (
    <>
      <div className="appstyle">
        <AppBar style={appstyle}>
          <Toolbar>
            <img alt="logo" src={img} height={40} width={100} />
              <div className="link">
                <Grid container spacing={0}>
                 <Grid item xs={4}>
                  <a
                    className="git"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com"
                  >
                    <p style={{color:"white"}}> <img alt="git" src={git} height={35} width={35} /> GitHub</p>
                  </a>
                </Grid>
                
                <Grid item xs={4}>
                  <a href="https://slack.com/intl/en-in/">
                   <p style={{color:"white"}}> <img alt="Slack" src={slack} height={35} width={35} /> Slack</p>
                  </a>
                </Grid>
                
              </Grid>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Header;
