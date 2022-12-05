import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Colors from "../utils/Color";
import PersonCard from "./PersonCard";
import { TextField, InputAdornment, Grid, Button } from "@mui/material";
import { green } from "@mui/material/colors";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    background: Colors.primary_dark,
    color: "white",
    borderTop: "1px solid #819CA9",
  },
});

const GroupChat = () => {
  const classes = useStyles();

  // mock data for now
  const [infos, setInfos] = useState([
    {
      name: "Murat Furkan Uğurlu",
      photo: "https://www.google.com",
    },
    {
      name: "İlke Doğan",
      photo: "https://www.google.com",
    },
    {
      name: "Arda Serim",
      photo: "https://www.google.com",
    },
    {
      name: "Abdullah Koç",
      photo: "https://www.google.com",
    },
    {
      name: "Yuşa Babamademez",
      photo: "https://www.google.com",
    },
    {
      name: "Murat Furkan Uğurlu",
      photo: "https://www.google.com",
    },
    {
      name: "Murat Furkan Uğurlu",
      photo: "https://www.google.com",
    },
    {
      name: "İlke Doğan",
      photo: "https://www.google.com",
    },
    {
      name: "Arda Serim",
      photo: "https://www.google.com",
    },
    {
      name: "Abdullah Koç",
      photo: "https://www.google.com",
    },
    {
      name: "Yuşa Babamademez",
      photo: "https://www.google.com",
    },
    {
      name: "Murat Furkan Uğurlu",
      photo: "https://www.google.com",
    },
    {
      name: "Murat Furkan Uğurlu",
      photo: "https://www.google.com",
    },


  ]);

  return (
    <div className={classes.root}>
      <Grid container style={{ height: "75vh", overflowY: "scroll" }}>
        <Grid item xs={12} >
          {infos.map((info) => (
              <Grid item xs={12} >
                <PersonCard
                name={info.name}
                photo={info.photo}
              />
              </Grid>
            ))}
        </Grid>
      </Grid>
      <Grid container>
      <Grid item xs={12}>
          <div>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: green }}
            //onClick={() =>}
            >
              Create group
            </Button>
          </div>
        </Grid> 
      </Grid>
    </div>
  );
};

export default GroupChat;
