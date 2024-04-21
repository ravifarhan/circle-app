import { Avatar, Box, Button, Typography } from "@mui/material";
import { useAppSelector } from "../../store";

const ProfileCard = () => {
  const profile = useAppSelector((state) => state.auth.user);
  const _host_url = "http://localhost:5000/uploads/";
  const auth = useAppSelector((state) => state.auth);

  return !auth.user ? null : (
    <>
      <Box sx={{ borderRadius: "10px", padding: "10px", bgcolor: "#262626" }}>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>My Profile</Typography>
        <img
          src={
            profile?.cover
              ? _host_url + profile.cover
              : "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="cover"
          width="100%"
          height="100px"
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
        <Box
          sx={{ display: "flex",  marginTop: "-30px", justifyContent: "space-between", alignItems: "flex-end",paddingInlineStart: "20px" }}
        >
          <Avatar
            src={
              profile?.avatar
                ? _host_url + profile.avatar
                : "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg?w=740"
            }
            alt="avatar"
            sx={{
              width: 56,
              height: 56,
              border: "2px solid #1d1d1d",
            }}
          />
          <Button
            variant="outlined"
            size="small"
            sx={{
              height: "25px",
              color: "white",
              borderColor: "white",
              ":hover": { borderColor: "white" },
              borderRadius: "20px",
              textTransform: "none",
            }}
          >
            Edit Profile
          </Button>
        </Box>
        <Box>
          <Typography variant="body1">✨{profile?.user.fullname}✨</Typography>
          <Typography variant="caption" sx={{ color: "#b2b2b2" }}>
            @{profile?.user.username}
          </Typography>
          <Typography variant="subtitle1">{profile?.bio}</Typography>
          <Typography variant="caption">
            100 Followers | 100 Following
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProfileCard;
