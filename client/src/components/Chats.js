import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Colors from "../utils/Color";
import { Grid } from "@mui/material";
import Message from "./Message";
import { margin } from "@mui/system";

const useStyles = makeStyles({
  root: {
    height: "84%",
    width: "100%",
    background: Colors.primary_dark,
    color: "white",
  },
});

const Chats = () => {
  const classes = useStyles();

  // mock data for now
  const [messages, setMessages] = useState([
    { message: "sslşdfsldf sdşlfsdşlgf dfşlgdflşg dfşgldfşlgkd dfşlgkdfşl ffgşlhkfgşlh dfşglhfgşlh şlhfgşh şglhkşlfgh dfgşldfg dfgşldkflşg dfşgl dşf dfgşl dşlfgdf dfşgl df dfglş şldfg", time: "12:00", isIncoming: true },
    { message: "Hello World!", time: "12:00", isIncoming: false },
    { message: "Hello World!", time: "12:00", isIncoming: true },
    { message: "Hello World!", time: "12:00", isIncoming: false },
    { message: "Hello World!", time: "12:00", isIncoming: true },
    { message: "Hello World!", time: "12:00", isIncoming: false },
    { message: "sslşdfsldf sdşlfsdşlgf dfşlgdflşg dfşgldfşlgkd dfşlgkdfşl ffgşlhkfgşlh dfşglhfgşlh şlhfgşh şglhkşlfgh dfgşldfg dfgşldkflşg dfşgl dşf dfgşl dşlfgdf dfşgl df dfglş şldfg", time: "12:00", isIncoming: true },
    { message: "Hello World!", time: "12:00", isIncoming: true },
    { message: "Hello World!", time: "12:00", isIncoming: true },
    { message: "Hello World!", time: "12:00", isIncoming: false },
    { message: "Hello World!", time: "12:00", isIncoming: true },
    { message: "Hello World!", time: "12:00", isIncoming: false },
  ]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid>
          <div style={{ height: "84vh", overflowY: "scroll" }}>
            {messages.map((message) => {
              if (message.isIncoming) {
                return (
                  <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                    <Message
                      message={message.message}
                      time={message.time}
                      isIncoming={message.isIncoming}
                    />
                  </div>
                );
              }
              else {
                return (
                  <div style={{ marginLeft: "740px", marginTop: "10px" }}>
                    <Message
                      message={message.message}
                      time={message.time}
                      isIncoming={message.isIncoming}
                    />
                  </div>
                );
              }
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chats;
