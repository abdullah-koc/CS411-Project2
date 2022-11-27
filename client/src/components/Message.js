import React from 'react';
import { makeStyles } from '@mui/styles';
import Colors from '../utils/Color';
import { Grid } from '@mui/material';

const useStyles = makeStyles({
  root: {
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
    width: "200px",
    background: "red",
    display: "flex",
    alignItems: "center",
    color: "white",
    borderRadius: "10px",
  },
});

const Message = ({message, time, isIncoming}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={10}>
          {message}
        </Grid>
        <Grid item xs={2} style={{fontSize: "10px"}}>
          {time}
        </Grid>
      </Grid>
    </div>
  )
}

export default Message;