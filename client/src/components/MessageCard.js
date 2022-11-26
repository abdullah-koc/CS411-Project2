import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Colors from "../utils/Color";
import { Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const useStyles = makeStyles({
  root: {
    height: "65px",
    width: "100%",
    background: Colors.primary_dark,
    display: "flex",
    alignItems: "center",
    color: "white",
    borderTop: "1px solid #819CA9",
  },
});

const MessageCard = ( {name, message, time } ) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
          <AccountCircleIcon style={{ fontSize: "55px", marginLeft: "10px" }} />
        </Grid>
        <Grid item xs={8}>
          <div style={{ fontWeight: "bold", marginTop: "10px" }}>{name}</div>
          <div style={{ fontSize: "13px", marginTop: "4px" }}>{message}</div>
        </Grid>
        <Grid item xs={1}>
          <div style={{ fontSize: "12px", marginTop: "15px" }}>{time}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageCard;
