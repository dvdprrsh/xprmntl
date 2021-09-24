import Menu from "@mui/icons-material/Menu";
import { AppBar, IconButton, styled, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MyLink = styled(Link)`
  color: inherit;
`;

const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
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
        <MyLink to="/">
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            xprmntl
          </Typography>
        </MyLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
