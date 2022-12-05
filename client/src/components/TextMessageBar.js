import React from 'react';
import { makeStyles } from '@mui/styles';
import Colors from '../utils/Color';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Grid, OutlinedInput, FormControl } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


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



const TextMessageBar = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <EmojiEmotionsIcon style={{fontSize: "35px", marginLeft: "20px", marginTop: "15px"}}/>
        </Grid>
        <Grid item xs={10}>
        <FormControl sx={{ m: 1, width: '76ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            placeholder='Type a message'  
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            style={{borderRadius: "15px", backgroundColor: "white", height: "50px"}}
          />
        </FormControl>
        </Grid>
        <Grid item xs={1}>
          <SendIcon style={{fontSize: "35px", marginLeft: "5px", marginTop: "15px"}}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default TextMessageBar;