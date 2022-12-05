import React, { useState } from "react";
import { TextField, InputAdornment, Grid, Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import BadgeIcon from "@mui/icons-material/Badge";
import Colors from "../utils/Color";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [approvePassword, setApprovePassword] = useState("");

  const isPasswordValid = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const isPasswordsSame = (password, approvePassword) => {
    if (password === approvePassword) return true;
    return false;
  };

  const handleRegisterButtonClick = () => {
    if (
      fullName === "" ||
      email === "" ||
      password === "" ||
      approvePassword === ""
    ) {
      alert("Please fill all the fields");
    } else if (!isPasswordValid(password)) {
      alert(
        "Password should be at least 8 characters long and contain at least one number, one capital letter, and one special letter"
      );
    } else if (!isPasswordsSame(password, approvePassword)) {
      alert("Passwords are not the same!");
    }
    else if(isPasswordsSame(password, approvePassword)){
      navigate("/main");
    }
  };

  return (
    <Grid
      container
      style={{
        marginLeft: "36%",
      }}
    >
      <Grid
        item
        xs={12}
        style={{
          marginTop: "10.5%",
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: Colors.primary_color,
        }}
      >
        ITextU Registration
      </Grid>
      <Grid item xs={12} style={{ marginTop: "4%" }}>
        <TextField
          style={{ width: "400px" }}
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          color="warning"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BadgeIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} style={{ marginTop: "3.5%" }}>
        <TextField
          style={{ width: "400px" }}
          placeholder="Email"
          color="warning"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} style={{ marginTop: "3.5%" }}>
        <TextField
          style={{ width: "400px" }}
          placeholder="Password"
          type="password"
          color="warning"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} style={{ marginTop: "3.5%" }}>
        <TextField
          style={{ width: "400px" }}
          placeholder="Approve Password"
          type="password"
          color="warning"
          value={approvePassword}
          onChange={(e) => setApprovePassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Grid>

      <Grid item xs={12} style={{ marginTop: "3.5%" }}>
        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: Colors.primary_color }}
          onClick={() => handleRegisterButtonClick()}

        >
          Register
        </Button>
      </Grid>
    </Grid>
  );
};

export default Register;
