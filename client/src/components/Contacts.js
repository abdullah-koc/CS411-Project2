import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import Colors from '../utils/Color';
import { Grid } from "@mui/material";
import ContactCard from './ContactCard';


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

const Contacts = () => {

  const classes = useStyles();

  // mock data for now
  const [contacts, setContacts] = useState([
    {
      name: "Murat Furkan Uğurlu",
      ppUrl: "https://www.google.com",
    },
    {
      name: "Murat Furkan Uğurlu",
      ppUrl: null,
    },
    {
      name: "Murat Furkan Uğurlu",
      ppUrl: null,
    },
    {
      name: "Murat Furkan Uğurlu",
      ppUrl: null,
    },
    {
      name: "Murat Furkan Uğurlu",
      ppUrl: "https://www.google.com",
    },
    {
      name: "Murat Furkan Uğurlu",
      ppUrl: null,
    },
    {
      name: "Murat Furkan Uğurlu",
      ppUrl: null,
    },
    {
      name: "Murat Furkan Uğurlu",
      ppUrl: null,
    },
  ]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <div style={{ height: "85vh", overflowY: "scroll" }}>
            {contacts.map((message) => (
              <ContactCard
                name={message.name}
                ppUrl={message.ppUrl}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contacts;
