import React from 'react'
import { Grid } from '@mui/material';
import UserBar from '../components/UserBar';
import { makeStyles } from "@mui/styles";
import Colors from "../utils/Color";
import MessageBar from '../components/MessageBar';
import SearchBar from '../components/SearchBar';


const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
    background: Colors.primary_light,
    display: "flex",
    color: "white",
    borderTop: "1px solid #819CA9",
  },
});

const MainScreen = () => {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <UserBar />
          <SearchBar />
          <MessageBar />
        </Grid>
      </Grid>
    </div>
  )
}

export default MainScreen;