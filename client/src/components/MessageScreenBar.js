import React from 'react'
import { makeStyles } from '@mui/styles';
import Colors from '../utils/Color';
import { Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const useStyles = makeStyles({
  root: {
    height: "8%",
    width: "100%",
    background: Colors.primary_color,
    display: "flex",
    alignItems: "center",
    color: "white",
    borderLeft: "1px solid #819CA9"
  },
});


const MessageScreenBar = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={10}>
          <AccountCircleIcon style={{fontSize: "45px", marginLeft: "10px"}}/>
        </Grid>
        <Grid item xs={1}>
          <SearchIcon style={{fontSize: "25px", marginTop: "10px", marginLeft: "60px"}}/>
        </Grid>
        <Grid item xs={1}>
          <MoreVertIcon style={{fontSize: "25px", marginTop: "10px", marginLeft: "40px"}}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default MessageScreenBar;