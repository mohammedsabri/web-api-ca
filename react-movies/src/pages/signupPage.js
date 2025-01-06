import React, { useContext, useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const SignupPage = () => {
    const context = useContext(AuthContext)

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [registered, setRegistered] = useState(false)


    const register = () => {
      let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      const validPassword = passwordRegEx.test(password);
  
      if (validPassword && password === passwordAgain) {
        context.register(userName, password);
        setRegistered(true);
      }
    }
  
    if (registered === true) {
      return <Navigate to="/movies/login" />;
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
        Register
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
        
        <TextField
                  label="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  fullWidth
                  required
                  variant="outlined"
                />
                <TextField
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  required
                  variant="outlined"
                />
                <TextField
                  label="Password Again"
                  value={passwordAgain}
                  onChange={(e) => setPasswordAgain(e.target.value)}
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
        <Button variant="contained" color="primary" fullWidth onClick={register}>
          Register
        </Button>
      </Box>
    </Container>
    </>
  );
};

export default SignupPage;
