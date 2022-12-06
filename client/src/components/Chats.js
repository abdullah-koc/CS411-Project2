import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Colors from "../utils/Color";
import Message from "./Message";
import { margin } from "@mui/system";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Grid, OutlinedInput, FormControl } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from 'emoji-picker-react';

const useStyles = makeStyles({
  root: {
    height: "84%",
    width: "100%",
    background: Colors.primary_dark,
    color: "white",
  },
  rootsend: {
    height: "8%",
    width: "100%",
    background: Colors.primary_color,
    display: "flex",
    alignItems: "center",
    color: "white",
  },
});

const Chats = ({ stompClient, chats }) => {
  const classes = useStyles();

  const [isEmojiOpen, setIsEmojiOpen] = React.useState(false);
  const [text, setText] = React.useState("")
  const [privateChats, setPrivateChats] = React.useState(new Map())

  React.useEffect(() => {
    setPrivateChats(chats)
  }, [chats])


  const getName = () => {
    let link = window.location.href.split('/')
    return link[link.length - 1]
  }

  const sendPrivateValue = () => {
    if (stompClient) {
      var chatMessage = {
        sender: JSON.parse(localStorage.getItem("userInfo")),
        receiver: { name: getName() },
        message: text,
        status: "MESSAGED"
      };
      privateChats instanceof Map && privateChats.get(getName()).push(chatMessage);
      setPrivateChats(new Map(privateChats));
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
    }
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ height: "84vh", overflowY: "scroll", width: "100%" }}>
            {privateChats instanceof Map && [...privateChats.get(getName())].map((val, index) => (
              <Message
                message={val.message}
              />
            ))}
          </div>
        </Grid>
      </Grid>

      <div className={classes.rootsend}>
        <Grid container>
          <Grid item xs={1}>
            <EmojiEmotionsIcon style={{ fontSize: "35px", marginLeft: "20px", marginTop: "15px", cursor: "pointer" }}
              onClick={() => setIsEmojiOpen(!isEmojiOpen)} />
          </Grid>
          {isEmojiOpen && (
            <Grid item xs={12} style={{ position: 'fixed', bottom: "60px", zIndex: "1000" }}>
              <EmojiPicker onEmojiClick={(data) => setText(text + data.emoji)} />
            </Grid>
          )}
        </Grid>

        <Grid item xs={8}>
          <FormControl sx={{ m: 1, width: '66ch' }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder='Type a message'
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ borderRadius: "15px", backgroundColor: "white", height: "50px", display: "flex", alignItems: "center", paddingLeft: "20px" }}

            />
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <SendIcon style={{ fontSize: "35px", marginLeft: "40px", marginTop: "15px", cursor: "pointer" }}
            onClick={() => sendPrivateValue()} />
        </Grid>
      </div >
    </div>
  );
};

export default Chats;
