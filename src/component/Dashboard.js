import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import "../App.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Table from "@mui/material/Table";
import LaunchIcon from "@mui/icons-material/Launch";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DisabledTabs from "./Navbar";
import Cube from "./Cube";
import admin from "../component/images/admin.png"




function Dashboard() {
  const mystyle = {
    backgroundColor: "blue",
    color:"white"
  };

  const colstyle = {
    backgroundColor: "lightcyan",

  }



  // 3.Create one setstate
  const [product, setProduct] = useState([]);

  // 1.getFakeApi using axios

  const ProductData = async () => {
    try {
      const data = await axios.get(
        "https://62aad072a62365888bcd4b87.mockapi.io/expo/user"
      );
      console.log(data.data);
      setProduct(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ProductData();
  }, []);

  return (
    <>
   
      <center>
        <Cube/>
      </center>
      <div className="both">
        <div className="left">
          <div className="avatar">
            <center className="picPostion">
              <img alt="Admin" src={admin} height={90} width={90}></img>
              <h1>Arunkumar R</h1>
              <h3>Software Trainee</h3>
            </center>{" "}
            <br />
            <center>
              {" "}
              <hr />
            </center>
            <div className="dash-order">
              <Grid container spacing={2}>
                <Grid item xs={3} md={2}>
                  <DashboardIcon style={{ color: "blue" }}></DashboardIcon>
                </Grid>
                <Grid item xs={3} md={2}>
                  <p>Dashboard</p>
                </Grid>
              </Grid>
              <br></br>

              <Grid container spacing={2}>
                <Grid item xs={3} md={2}>
                  <AssignmentIcon style={{ color: "blue" }}></AssignmentIcon>
                </Grid>
                <Grid item xs={3} md={2}>
                  <p>Orders</p>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className="right">
          <DisabledTabs />
          <div>
            <Table className="Table">
              <TableHead>
                <TableRow>
                  <TableCell align="right" style={mystyle}>
                    Order Id
                  </TableCell>
                  <TableCell align="right" style={mystyle}>
                    Order Size
                  </TableCell>
                  <TableCell align="right" style={mystyle}>
                    Full Name
                  </TableCell>
                  <TableCell align="right" style={mystyle}>
                    User City
                  </TableCell>
                  <TableCell align="right" style={mystyle}>
                    Order Price
                  </TableCell>
                  <TableCell align="right" style={mystyle}>
                    Status
                  </TableCell>
                  <TableCell align="right" style={mystyle}>
                    Start date
                  </TableCell>
                  <TableCell align="right" style={mystyle}>
                    End Date
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {product.map((data) => (
                  <TableRow key={data.id}>
                    <TableCell align="right" style={colstyle}>{data.Orderid}</TableCell>
                    <TableCell align="right"  style={colstyle}>{data.Ordersize}</TableCell>
                    <TableCell align="right"  style={colstyle}>
                      {data.fullname}
                      <LaunchIcon style={{ fontSize: 18 }}></LaunchIcon>
                    </TableCell>
                    <TableCell align="right"  style={colstyle}>{data.usercity}</TableCell>
                    <TableCell align="right"  style={colstyle}>${data.Orderprice}</TableCell>
                    <TableCell align="right"  style={colstyle}>{data.Status}</TableCell>
                    <TableCell align="right"  style={colstyle} >{data.Startdate}</TableCell>
                    <TableCell align="right"  style={colstyle}>{data.Finishdate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
