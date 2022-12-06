import React from "react";
import { makeStyles } from "@mui/styles";
import Colors from "../utils/Color";
import { Button, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: "8%",
    width: "100%",
    background: Colors.primary_color,
    display: "flex",
    alignItems: "center",
    color: "white",
  },
});

const UserBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (

    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <AccountCircleIcon
            style={{ fontSize: "45px", marginLeft: "10px", cursor: "pointer", }}
            onClick={() => navigate("/main/messages")}
          />
        </Grid>
        <Grid item xs={2}>
          <PeopleIcon
            style={{
              fontSize: "25px",
              marginTop: "10px",
              marginLeft: "50px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/main/group")}
          />
        </Grid>
        <Grid item xs={3}>
          <ChatIcon
            style={{
              fontSize: "25px",
              marginTop: "10px",
              marginLeft: "50px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/main/contacts")}
          />
        </Grid>
        <Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
          <Button onClick={() => {
            localStorage.clear()
            navigate("/login")
          }} variant="contained" color="error">Logout</Button>
        </Grid>
        <Grid item xs={1}>

        </Grid>
      </Grid>
    </div>
  );
};

export default UserBar;
