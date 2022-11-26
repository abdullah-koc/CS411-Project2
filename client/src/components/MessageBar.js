import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";
import Colors from '../utils/Color';
import MessageCard from './MessageCard';
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


const MessageBar = () => {

  const classes = useStyles();
  
  // mock data for now
  const [messages, setMessages] = useState([{name: "Murat Furkan Uğurlu", message: "Hello World!", time: "12:00"},
    {name: "Murat Furkan Uğurlu", message: "Hello World!", time: "12:00"},
    {name: "Murat Furkan Uğurlu", message: "Hello World!", time: "12:00"},
    {name: "Murat Furkan Uğurlu", message: "Hello World!", time: "12:00"},
    {name: "Murat Furkan Uğurlu", message: "Hello World!", time: "12:00"},
    {name: "Murat Furkan Uğurlu", message: "Hello World!", time: "12:00"},
    {name: "Murat Furkan Uğurlu", message: "Hello World!", time: "12:00"},
    {name: "Murat Furkan Uğurlu", message: "Hello World!", time: "12:00"},
    {name: "Murat Furkan Uğurlu", message: "Hello World!", time: "12:00"},
    {name: "Murat Furkan Uğurlu", message: "Hello World!", time: "12:00"},
    {name: "Murat Furkan Uğurlu", message: "Hello World!", time: "12:00"},
    {name: "Murat Furkan Uğurlu", message: "Hello World!", time: "12:00"},
    {name: "Murat Furkan Uğurlu", message: "Hello World!", time: "12:00"}]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ height: "85vh", overflowY: "scroll" }}>
            {messages.map((message) => (
              <MessageCard name={message.name} message={message.message} time={message.time} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default MessageBar;