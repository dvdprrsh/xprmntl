import Menu from "@mui/icons-material/Menu";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          "& > *:not(:last-child)": {
            mr: 2,
          },
        }}
      >
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h5" sx={{ flexGrow: 1, textTransform: "uppercase" }}>
          _xp_r_m_nt_l
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
