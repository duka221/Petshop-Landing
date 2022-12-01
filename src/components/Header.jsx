import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Vector from "../images/Vector.png";
import { Stack } from "@mui/system";

const pages = [
  { name: "About", path: "/" },
  { name: "Service", path: "/Service" },
  { name: "Modi-Core", path: "/Modi-Core" },
  { name: "Blog", path: "/Blog" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            color="#062D3E"
            fontSize="21px"
            fontWeight={600}
            variant="h6"
            noWrap
            component="a"
          >
            Pet-First
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Stack
                sx={{
                  ":hover": { backgroundImage: `url(${Vector})` },
                  width: "118px",
                  height: "20px",
                  top: "0.94px",
                  left: "-0.06",
                  textAlign: "center",
                  backgroundImage:
                    page.path === window.location.pathname
                      ? `url(${Vector})`
                      : null,
                }}
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  fontSize="14px"
                  fontWeight={400}
                  fontFamily="Josefin Sans"
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, cursor: "pointer" }}
                  color={
                    page.path === window.location.pathname
                      ? `#FFFFFF`
                      : "#062D3E"
                  }
                >
                  {page.name}
                </Typography>
              </Stack>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button
                onClick={handleOpenUserMenu}
                sx={{
                  borderRadius: 50,
                  textTransform: "none",
                  color: "#FFFFFF",
                  borderColor: "#FFFFFF",
                }}
                variant="outlined"
              >
                <Typography fontSize="20px" fontWeight={500}>
                  Sign-Up
                </Typography>
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
