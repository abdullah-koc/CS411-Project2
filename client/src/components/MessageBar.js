import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Colors from "../utils/Color";
import MessageCard from "./MessageCard";
import { Grid } from "@mui/material";
import axios from "axios";

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

  const [users, setUsers] = useState([])
  React.useEffect(() => {
    const requests = [];
    [...chats.keys()].map(chat => requests.push(axios.get(`http://localhost:8080/auth/${chat}`)))
    axios.all(requests).then(axios.spread((...responses) => {
      const users = []
      responses.map(response => users.push(response.data))
      setUsers(users)
    }))
    console.log(users)
  }, [chats])

  return (

    < div className={classes.root} >
      <Grid container>
        <Grid item xs={12}>
          <div style={{ height: "85vh", overflowY: "scroll" }}>
            {users.map((user, index) => (
              user.name !== JSON.parse(localStorage.getItem("userInfo")).name &&
              <MessageCard
                key={index}
                user={user}
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
