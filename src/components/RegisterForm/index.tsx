import { Box, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <>
      <Box
        sx={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography variant="h4" sx={{ color: "#04a51e", fontWeight: "bold" }}>
          Circle
        </Typography>
        <Typography variant="h6">Create an account Circle </Typography>
      </Box>
      <Box
        sx={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px",
        }}
        component="form"
        autoComplete="off"
      >
        <TextField
          label="Fullname*"
          variant="outlined"
          type="text"
          InputLabelProps={{ sx: { color: "gray" } }}
          InputProps={{ sx: { color: "white" } }}
        />
        <TextField
          label="Email*"
          variant="outlined"
          type="text"
          InputLabelProps={{ sx: { color: "gray" } }}
          InputProps={{ sx: { color: "white" } }}
        />
        <TextField
          label="Username*"
          variant="outlined"
          type="text"
          InputLabelProps={{ sx: { color: "gray" } }}
          InputProps={{ sx: { color: "white" } }}
        />
        <TextField
          label="Password*"
          variant="outlined"
          type="password"
          InputLabelProps={{ sx: { color: "gray" } }}
          InputProps={{ sx: { color: "white" } }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#04a51e",
            fontWeight: "bold",
            borderRadius: "20px",
            ":hover": {
              backgroundColor: "#04a51e",
            },
          }}
        >
          Register
        </Button>
        <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <Typography variant="body2" sx={{ color: "gray" }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#04a51e" }}
            >
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default RegisterForm;
