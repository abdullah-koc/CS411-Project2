import React from 'react'
import { makeStyles } from '@mui/styles';
import Colors from '../utils/Color';
import { Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const handleGroupChat = () => {

};

const handleSendingPrivateMessage = () => {

};

const handeSettings = () => {

};

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

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <AccountCircleIcon style={{ fontSize: "45px", marginLeft: "10px" }} />
        </Grid>
        <Grid item xs={2}>
          <PeopleIcon
            style={{ fontSize: "25px", marginTop: "10px", marginLeft: "50px", cursor:"pointer" }}
            onClick={() => handleGroupChat()} />

        </Grid>
        <Grid item xs={2}>
          <ChatIcon style={{ fontSize: "25px", marginTop: "10px", marginLeft: "50px" , cursor:"pointer" }}
            onClick={() => handleSendingPrivateMessage()} />
        </Grid>
        <Grid item xs={2}>
          <MoreVertIcon style={{ fontSize: "25px", marginTop: "10px", marginLeft: "30px", cursor:"pointer" }}
            onClick={() => handleSettings()} />
        </Grid>
      </Grid>
    </div>
  )
}

export default UserBar;