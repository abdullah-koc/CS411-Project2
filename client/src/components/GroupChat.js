import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Colors from "../utils/Color";
import MessageCard from "./MessageCard";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    background: Colors.primary_dark,
    display: "flex",
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
      name: "Murat Furkan Uğurlu",
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
      name: "Murat Furkan Uğurlu",
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
      <Grid container>
        <Grid item xs={12}>
          <div style={{ height: "85vh", overflowY: "scroll" }}>
            {infos.map((info) => (
              <MessageCard
                name={info.name}
                photo={info.photo}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default GroupChat;
