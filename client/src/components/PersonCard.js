import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Colors from "../utils/Color";
import { Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const useStyles = makeStyles({
    root: {
        height: "65px",
        width: "100%",
        background: Colors.primary_dark,
        display: "flex",
        alignItems: "center",
        color: "white",
        borderTop: "1px solid #819CA9",
    },
});

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

const PersonCard = ({ name, ppUrl }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={2}>
                    {ppUrl ? (
                        <AccountCircleIcon style={{ fontSize: "55px", marginLeft: "10px" }} />
                    ) : (
                        <Box sx={{ ...shapeStyles, ...shapeCircleStyles }} style={{ marginLeft: "13px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {initials(name)}
                        </Box>
                    )}
                </Grid>
                <Grid item xs={8}>
                    <div style={{ fontWeight: "bold", marginTop: "10px" }}>{name}</div>
                </Grid>
                <Grid item xs={1}>
                <div>
                    <Checkbox {...label} size="large" />

                </div>
            </Grid>
        </Grid>
        </div >
    );
};

export default PersonCard;
