import React, { useState } from 'react'
import { Grid, OutlinedInput, FormControl } from '@mui/material';
import UserBar from '../components/UserBar';
import { makeStyles } from "@mui/styles";
import Colors from "../utils/Color";
import MessageBar from '../components/MessageBar';
import SearchBar from '../components/SearchBar';
import MessageScreenBar from '../components/MessageScreenBar';
import Contacts from '../components/Contacts';
import Common from '../Common';
import GroupChat from '../components/GroupChat';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from 'emoji-picker-react';
import { useLocation } from 'react-router-dom';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from '../components/Message';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
    background: Colors.primary_dark,
    display: "flex",
    color: "white",
    borderTop: "1px solid #819CA9",
  },
  rootchats: {
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

var stomp = null;

const MainScreen = () => {

  const location = useLocation();
  const classes = useStyles();
  const [chatMessages, setChatMessages] = useState(new Map());
  const [publicChats, setPublicChats] = useState();
  const [isEmojiOpen, setIsEmojiOpen] = React.useState(false);
  const [text, setText] = React.useState("")
  const [curUser, setCurUser] = React.useState("")
  const [chatHistory, setChatHistory] = React.useState([])


  const getHourMinute = (info) => {
    return String(info).padStart(2, '0');
  }

  const getId = () => {
    let link = window.location.href.split('/')
    return link[link.length - 1]
  }

  React.useEffect(() => {
    setCurUser(getId())
  }, [location]);

  React.useEffect(() => {
    let Sock = new SockJS('http://localhost:8082/ws');
    stomp = over(Sock);
    stomp.connect({}, onConnected, onError);
  }, [])

  const onConnected = () => {
    stomp.subscribe('/chatroom/public', onMessageReceived);
    stomp.subscribe('/user/' + JSON.parse(localStorage.getItem("userInfo")).id + '/private', privMsgReceived);
    userJoin();
  }

  const privMsgReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    if (chatMessages.get(payloadData.sender.id.toString())) {
      chatMessages.get(payloadData.sender.id.toString()).push(payloadData);
      setChatMessages(new Map(chatMessages));
    } else {
      let list = [];
      list.push(payloadData);

      chatMessages.set(payloadData.sender.id.toString(), list);
      setChatMessages(new Map(chatMessages));
    }
  }

  const onError = (err) => console.log(err)

  const userJoin = () => {
    var chatMessage = {
      sender: JSON.parse(localStorage.getItem("userInfo")),
      status: "JOINED"
    };
    stomp.send("/app/message", {}, JSON.stringify(chatMessage));
  }

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOINED":
        if (!chatMessages.get(payloadData.sender.id.toString())) {
          chatMessages.set(payloadData.sender.id.toString(), []);
          setChatMessages(new Map(chatMessages));
        }
        break;
      case "MESSAGED":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  }


  const sendPrivMsg = () => {
    if (stomp) {
      axios.get("http://localhost:8080/auth/" + getId()).then(res => {
        var chatMessage = {
          sender: JSON.parse(localStorage.getItem("userInfo")),
          receiver: res.data,
          messageDate: new Date(),
          message: text,
          status: "MESSAGED"
        };
        chatMessages.get(getId().toString()).push(chatMessage);
        setChatMessages(new Map(chatMessages));
        stomp.send("/app/private-message", {}, JSON.stringify(chatMessage));
        setText("");
      })

    }
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <UserBar />
          <SearchBar />
          {(window.location.pathname === "/main/contacts") ? <Contacts /> :
            <>
              {(window.location.pathname === "/main/group") ? <GroupChat /> : <MessageBar chats={chatMessages} />}
            </>}
        </Grid>
        <Grid item xs={8}>
          {curUser !== "main" && (
            <MessageScreenBar id={curUser} />
          )}

          <div className={classes.rootchats}>
            {curUser !== "main" && (
              <>
                <Grid container>
                  <Grid item xs={12}>
                    <div style={{ height: "84vh", overflowY: "scroll", width: "100%" }}>
                      {chatMessages.get(curUser) && chatMessages.get(curUser).filter((value, index, self) =>
                        index === self.findIndex((t) => (
                          t.message === value.message
                        ))
                      ).map((chat, index) => {
                        if (chat.sender.id !== JSON.parse(localStorage.getItem("userInfo")).id) {
                          return (
                            <div style={{ marginTop: "10px", marginLeft: "3%" }}>
                              <Message key={index} message={chat.message} time={getHourMinute(new Date().getHours()) + ":" + getHourMinute(new Date().getMinutes())} />
                            </div>
                          )
                        }
                        else {
                          return (
                            <div style={{ marginTop: "10px", display: "flex", justifyContent: "flex-end", marginRight: "3%" }}>
                              <Message key={index} message={chat.message} isIncoming={true} time={getHourMinute(new Date().getHours()) + ":" + getHourMinute(new Date().getMinutes())} />
                            </div>

                          )
                        }
                      })}
                    </div>
                  </Grid>
                </Grid>

                <div className={classes.rootsend} >
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
                        id="messageInput"
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
                      onClick={() => sendPrivMsg()} id="sendIcon" />
                  </Grid>
                </div >
              </>
            )}
            {curUser === "main" && (
              <div style={{ height: "100%", width: "100%" }}>
                <div style={{ fontSize: "30px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  Please select a chat to start messaging
                </div>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default MainScreen;