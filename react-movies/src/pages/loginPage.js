import React, { useState,useEffect, useContext } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const LoginPage = props => {
const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password)
  };

  let location = useLocation();

  const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

  if (context.isAuthenticated === true) {
    return <Navigate to={from} />;
  }

  return (
    <>
    <Paper 
      component="div" 
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 1.5,
      }} 
      >
      <Typography variant="h4" component="h3">
        Login
      </Typography>
    </Paper>

    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
      <Typography variant="h6" component="h6">
      You must log in to view the protected pages
      </Typography>
        <TextField
          id="username"
          label="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          fullWidth
          required
          variant="outlined"
        />
        <TextField
          id="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          variant="outlined"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
        </Box>
        <Button variant="contained" color="primary" fullWidth onClick={login}>
          Login
        </Button>
        <Typography variant="body2" textAlign="center">
          Not Registered?<Link href="/movies/signup">Sign Up!</Link>
        </Typography>
      </Box>
    </Container>
    </>
  );
};


export default LoginPage;
