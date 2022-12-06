import React from 'react'
import { makeStyles } from '@mui/styles';
import Colors from '../utils/Color';
import { Grid, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { useLocation } from 'react-router-dom';



const handleEmojies = () => {

};
const MessageSent = () => {

};
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

const MessageScreenBar = ({ id }) => {
  const classes = useStyles();
  const location = useLocation();

  const shapeStyles = { bgcolor: 'primary.main', width: 47, height: 47 };
  const shapeCircleStyles = { borderRadius: '50%' };
  function initials(value) {
    var result = "";
    var tokens = value.split(/\s/);
    for (var i = 0; i < tokens.length; i++) {
      result += tokens[i].substring(0, 1).toUpperCase();
    }
    return result;
  }

  const [information, setInformation] = React.useState({});


  React.useEffect(() => {
    axios.get("http://localhost:8080/auth/" + id).then((res) => {
      setInformation(res.data);
    });
  }, [id]);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          {(information !== undefined && information !== null) ? (
            <Box sx={{ ...shapeStyles, ...shapeCircleStyles }} style={{ marginLeft: "13px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {initials(information.name + " " + information.surname)}
            </Box>
          ) : (
            <AccountCircleIcon style={{ fontSize: "45px", marginLeft: "10px", cursor: "pointer" }}
              onClick={() => handleEmojies()} />
          )}
        </Grid>
        <Grid item xs={9}>
          {(information !== undefined && information !== null) ? (
            <div style={{ fontWeight: "bold", marginTop: "10px" }}>{information.name + " " + information.surname}</div>
          ) : (
            <div style={{ fontWeight: "bold", marginTop: "10px" }}>User</div>
          )}
        </Grid>
        <Grid item xs={1}>
          <SearchIcon style={{ fontSize: "25px", marginTop: "10px", marginLeft: "60px" }} />
        </Grid>
        <Grid item xs={1}>
          <MoreVertIcon style={{ fontSize: "25px", marginTop: "10px", marginLeft: "50px", cursor: "pointer" }}
            onClick={() => MessageSent()} />
        </Grid>
      </Grid>
    </div >
  )
}

export default MessageScreenBar;