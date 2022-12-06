import React, { useState } from 'react'
import { Grid, OutlinedInput, FormControl } from '@mui/material';
import UserBar from '../components/UserBar';
import { makeStyles } from "@mui/styles";
import Colors from "../utils/Color";
import MessageBar from '../components/MessageBar';
import SearchBar from '../components/SearchBar';
import MessageScreenBar from '../components/MessageScreenBar';
import Chats from '../components/Chats';
import Contacts from '../components/Contacts';
import Common from '../Common';
import GroupChat from '../components/GroupChat';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import SendIcon from '@mui/icons-material/Send';
import EmojiPicker from 'emoji-picker-react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from '../components/Message';

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
    background: Colors.primary_light,
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

var stompClient = null;

const MainScreen = () => {

  const classes = useStyles();
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState();
  const [isEmojiOpen, setIsEmojiOpen] = React.useState(false);
  const [text, setText] = React.useState("")
  const [curUser, setCurUser] = React.useState("")



  const getName = () => {
    let link = window.location.href.split('/')
    return link[link.length - 1]
  }

  React.useEffect(() => {
    setCurUser(getName())
    //re render whole component

  }, [getName()])


  React.useEffect(() => {

  }, [privateChats])


  React.useEffect(() => {
    let Sock = new SockJS('http://localhost:8082/ws');
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  }, [])

  const onConnected = () => {
    stompClient.subscribe('/chatroom/public', onMessageReceived);
    stompClient.subscribe('/user/' + JSON.parse(localStorage.getItem("userInfo")).name + '/private', onPrivateMessage);
    userJoin();
  }

  const onPrivateMessage = (payload) => {
    var payloadData = JSON.parse(payload.body);
    if (privateChats.get(payloadData.sender.name)) {
      console.log("entered")
      privateChats.get(payloadData.sender.name).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      console.log("zort")
      let list = [];
      list.push(payloadData);
      privateChats.set(payloadData.sender.name, list);
      setPrivateChats(new Map(privateChats));
    }
  }

  const onError = (err) => console.log(err)

  const userJoin = () => {
    var chatMessage = {
      sender: JSON.parse(localStorage.getItem("userInfo")),
      status: "JOINED"
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  }

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOINED":
        if (!privateChats.get(payloadData.sender.name)) {
          privateChats.set(payloadData.sender.name, []);
          setPrivateChats(new Map(privateChats));
        }
        break;
      case "MESSAGED":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  }


  const sendPrivateValue = () => {
    if (stompClient) {
      var chatMessage = {
        sender: JSON.parse(localStorage.getItem("userInfo")),
        receiver: { name: getName() },
        message: text,
        status: "MESSAGED"
      };
      privateChats.get(getName()).push(chatMessage);
      setPrivateChats(new Map(privateChats));
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
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
              {(window.location.pathname === "/main/group") ? <GroupChat /> : <MessageBar chats={privateChats} />}
            </>}
        </Grid>
        <Grid item xs={8}>
          <MessageScreenBar />


          <div className={classes.rootchats}>
            <Grid container>
              <Grid item xs={12}>
                <div style={{ height: "84vh", overflowY: "scroll", width: "100%" }}>
                  {console.log(privateChats)}
                  {privateChats.get(getName()) && privateChats.get(getName()).map((chat, index) => {
                    if (chat.sender.name !== JSON.parse(localStorage.getItem("userInfo")).name) {
                      return (
                        <div style={{ marginTop: "10px", marginLeft: "3%" }}>
                          <Message key={index} message={chat.message} />
                        </div>
                      )
                    }
                    else {
                      return (
                        <div style={{ marginTop: "10px", display: "flex", justifyContent: "flex-end" }}>
                          <Message key={index} message={chat.message} isIncoming={true} />
                        </div>

                      )
                    }
                  })}
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








        </Grid>
      </Grid>
    </div>
  )
}

export default MainScreen;