import {
  FacebookRounded,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box sx={{ borderRadius: "10px", padding: "10px", bgcolor: "#262626", color: "white" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <Typography variant="body2">
              Develop by Ravi Farhan ●
            </Typography>
            <GitHub fontSize="small" />
            <LinkedIn fontSize="small" />
            <FacebookRounded fontSize="small" />
            <Instagram fontSize="small" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "-5px",
              gap: "5px",
            }}
          >
            <Typography variant="caption" sx={{ color: "#b2b2b2" }}>
              Powered by
            </Typography>
            <img
              src="https://dumbways.id/assets/images/brandv2.png"
              alt="dumbways"
              width="20px"
            />
            <Typography variant="caption" sx={{ color: "#b2b2b2" }}>
              Dumbways Indonesia ● #1 Coding Bootcamp
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
