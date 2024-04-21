import {
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import { IThread } from "../../types/app";
import { Comment, FavoriteBorder } from "@mui/icons-material";

interface ThreadCardProps {
  thread: IThread;
}
const ThreadCard: React.FC<ThreadCardProps> = ({ thread }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        borderBottom: "1px solid #3f3f3f",
        padding: "20px",
      }}
    >
      <Box>
        <Avatar src="">DW</Avatar>
      </Box>
      <Box>
        <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <Typography>{thread.author?.fullname}</Typography>
          <Typography variant="caption" sx={{ color: "gray" }}>
            @{thread.author?.username} ●
          </Typography>
          <Typography variant="caption" sx={{ color: "gray" }}>
            4h
          </Typography>
        </Box>
        <Typography>{thread.content}</Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {thread.images &&
            thread.images.map((image) => (
              <img
                key={image.image}
                src={"http://localhost:5000/uploads/" + image.image}
                alt="image"
                style={{height: "150px", borderRadius: "10px", objectFit: "cover", flex: 1 }}
              />
            ))}
          {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {thread.images &&
              thread.images.map((item) => (
                <ImageListItem key={item.image}>
                  <img
                    // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={"http://localhost:5000/uploads/" + image.image}
                    alt="image"
                  />
                </ImageListItem>
              ))}
          </ImageList> */}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <FavoriteBorder />
          <Comment />
          <Typography sx={{ color: "gray" }}>Replies</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ThreadCard;
