import { Box, Typography } from "@mui/material";

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: "primary.dark",
        p: 2,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            opacity: 0.1,
            fontSize: "fullWidth.fontSize",
          }}
        >
          xprmntl
        </Typography>
      </Box>
      <Typography variant="h1">404</Typography>
    </Box>
  );
};

export default NotFound;
