import { Avatar, Box, Button, TextField } from "@mui/material";
import { useAppSelector } from "../../../store";
import { MouseEvent, useState } from "react";
import { Image } from "@mui/icons-material";
import { createThread } from "../../../lib/api/call/thread";

const ThreadForm = () => {
  const profile = useAppSelector((state) => state.auth.user);
  const _host_url = "http://localhost:5000/uploads/";

  const [threadPost, setThreadPost] = useState<{
    content: string;
    image: FileList | null;
  }>({ content: "", image: null });

  const handlePost = async (e: MouseEvent) => {
    try {
      e.preventDefault();
      const res = await createThread(threadPost);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar
          src={
            profile?.avatar
              ? _host_url + profile.avatar
              : "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg?w=740"
          }
          alt="avatar"
        />
        <TextField
          label="What's on your mind?"
          autoComplete="off"
          value={threadPost.content}
          onChange={(e) =>
            setThreadPost({ ...threadPost, content: e.target.value })
          }
          sx={{
            width: "100%",
            "& label.Mui-focused": {
              color: "gray",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
            },
          }}
          InputLabelProps={{ sx: { color: "gray" } }}
          InputProps={{ sx: { color: "white" } }}
        />
        <label htmlFor="button-file">
          Image {threadPost.image?.length}
          <Image sx={{ cursor: "pointer", color: "#04a51e" }} />
        </label>
        <input
          id="button-file"
          type="file"
          hidden
          accept="image/*"
          multiple
          max={4}
          onChange={(e) =>
            setThreadPost({ ...threadPost, image: e.target.files })
          }
        />
        <Button
          variant="contained"
          size="small"
          onClick={handlePost}
          sx={{
            backgroundColor: "#04a51e",
            borderRadius: "20px",
            textTransform: "capitalize",
            ":hover": { backgroundColor: "#04a51e" },
          }}
        >
          Post
        </Button>
        {/* <Box>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {threadPost.image?.length !== null && threadPost.image.map((thread) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box> */}
      </Box>
    </>
  );
};

export default ThreadForm;
