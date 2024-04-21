import { Avatar, Box, Button, Typography } from "@mui/material";
import { useAppSelector } from "../../store";

const SuggestedFollow = () => {
    const auth = useAppSelector((state) => state.auth);
  return !auth.user ? null : (
    <>
      <Box sx={{ borderRadius: "10px", padding: "10px", bgcolor: "#262626" }}>
        <Typography variant="body1">Suggested for you</Typography>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Avatar
            src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg?w=740"
            alt="avatar"
            sx={{
              border: "2px solid #1d1d1d",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column"}}>
            <Typography variant="body2">Tes bang</Typography>
            <Typography variant="caption" sx={{ color: "#b2b2b2" }}>@ravifarhan</Typography>
          </Box>
          <Button
            variant="outlined"
            size="small"
            sx={{
              width: "100px",
              height: "30px",
              color: "white",
              borderColor: "white",
              ":hover": { borderColor: "white" },
              borderRadius: "20px",
              marginLeft: "auto",
              textTransform: "none",
            }}
          >
            Follow
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Avatar
            src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg?w=740"
            alt="avatar"
            sx={{
              border: "2px solid #1d1d1d",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column"}}>
            <Typography variant="body2">Tes bang</Typography>
            <Typography variant="caption">@tes</Typography>
          </Box>
          <Button
            variant="outlined"
            size="small"
            sx={{
              width: "100px",
              height: "30px",
              color: "white",
              borderColor: "white",
              ":hover": { borderColor: "white" },
              borderRadius: "20px",
              marginLeft: "auto",
              textTransform: "none",
            }}
          >
            Follow
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Avatar
            src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg?w=740"
            alt="avatar"
            sx={{
              border: "2px solid #1d1d1d",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column"}}>
            <Typography variant="body2">Tes bang</Typography>
            <Typography variant="caption">@tes</Typography>
          </Box>
          <Button
            variant="outlined"
            size="small"
            sx={{
              width: "100px",
              height: "30px",
              color: "white",
              borderColor: "white",
              ":hover": { borderColor: "white" },
              borderRadius: "20px",
              marginLeft: "auto",
              textTransform: "none",
            }}
          >
            Follow
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Avatar
            src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg?w=740"
            alt="avatar"
            sx={{
              border: "2px solid #1d1d1d",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column"}}>
            <Typography variant="body2">Tes bang</Typography>
            <Typography variant="caption">@tes</Typography>
          </Box>
          <Button
            variant="outlined"
            size="small"
            sx={{
              width: "100px",
              height: "30px",
              color: "white",
              borderColor: "white",
              ":hover": { borderColor: "white" },
              borderRadius: "20px",
              marginLeft: "auto",
              textTransform: "none",
            }}
          >
            Follow
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Avatar
            src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg?w=740"
            alt="avatar"
            sx={{
              border: "2px solid #1d1d1d",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column"}}>
            <Typography variant="body2">Tes bang</Typography>
            <Typography variant="caption">@tes</Typography>
          </Box>
          <Button
            variant="outlined"
            size="small"
            sx={{
              width: "100px",
              height: "30px",
              color: "white",
              borderColor: "white",
              ":hover": { borderColor: "white" },
              borderRadius: "20px",
              marginLeft: "auto",
              textTransform: "none",
            }}
          >
            Follow
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SuggestedFollow;
