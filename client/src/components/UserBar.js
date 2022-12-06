import React from "react";
import { makeStyles } from "@mui/styles";
import Colors from "../utils/Color";
import { Button, Grid, Box } from "@mui/material";
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
  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem("userInfo")));
  const shapeStyles = { bgcolor: 'primary.main', width: 47, height: 47 };
  const shapeCircleStyles = { borderRadius: '50%' };
  function initials(value) {
    var result = "";
    var tokens = value.split(/\s/);
    for (var i = 0; i < tokens.length; i++) {
      result += tokens[i].substring(0, 1).toUpperCase();
    }
    return result;
  }


  return (

    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <Box sx={{ ...shapeStyles, ...shapeCircleStyles }} style={{ marginLeft: "13px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {initials(user.name + " " + user.surname)}
          </Box>
        </Grid>
        <Grid item xs={8} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "5%" }}>
          <Button onClick={() => {
            localStorage.clear()
            navigate("/login")
          }} variant="contained" color="error">Logout</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserBar;
