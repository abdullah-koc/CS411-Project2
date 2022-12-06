import React, { useEffect, useState } from "react";
import { TextField, InputAdornment, Grid, Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Colors from "../utils/Color";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      navigate("/main")
    }
  }, [])

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please fill all the fields");
    }
    else {
      const info = {
        email: email,
        password: password
      }
      axios.post("http://localhost:8080/auth/login", info)
        .then(res => {
          localStorage.setItem("userInfo", JSON.stringify(res.data))
          alert("Successfully logged in")
          navigate("/main")
        })
        .catch(err => alert("Wrong username or password"))
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
          marginTop: "10%",
          fontSize: "2.8rem",
          fontWeight: "bold",
          color: Colors.primary_color,
        }}
      >
        Login
      </Grid>
      <Grid item xs={12} style={{ marginTop: "6%" }}>
        <TextField
          style={{ width: "400px" }}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          color="warning"
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
      <Grid item xs={12} style={{ marginTop: "6%" }}>
        <TextField
          style={{ width: "400px" }}
          placeholder="Password"
          type="password"
          value={password}
          onKeyPress={(e) => e.key === "Enter" && handleLogin()}
          onChange={(e) => setPassword(e.target.value)}
          color="warning"
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
      <Grid container>
        <Grid item xs={1} style={{ marginTop: "6%" }}>
          <Button
            variant="contained"
            size="large"
            style={{ backgroundColor: Colors.primary_color }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={3} style={{ marginTop: "6%" }}>
          <Button
            variant="outlined"
            size="large"
            style={{ backgroundColor: Colors.grey }}
            onClick={() => navigate("/register")}
          >
            Don't you have an account?
          </Button>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default Login;