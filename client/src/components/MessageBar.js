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

const MessageBar = ({ chats }) => {
  const classes = useStyles();
  const [messages, setMessages] = React.useState(new Map());
  React.useEffect(() => {
    setMessages(chats)
  }, [chats])

  return (

    < div className={classes.root} >
      <Grid container>
        <Grid item xs={12}>
          <div style={{ height: "85vh", overflowY: "scroll" }}>
            {console.log(chats)}
            {[...messages.keys()].map((name, index) => (
              <MessageCard
                key={index}
                name={name}
                time={new Date().getHours().toString() + ":" + new Date().getMinutes().toString()}
                nonReadCount={0}
                ppUrl={""}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </div >
  );
};

export default MessageBar;
