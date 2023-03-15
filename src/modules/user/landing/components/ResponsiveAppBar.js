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
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";

import PhotoSwiper from "./swiper/PhotoSwiper";
import { NavLink } from "react-router-dom";

const pages = [
  { title: "Gallery", href: "#Gallery" },
  { title: "About us", href: "#About us" },
  { title: "Menu", href: "#Menu" },
  { title: "Reservation", href: "#Reservation" },
  { title: "Contacts", href: "#Contacts" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box id="Gallery" sx={{ position: "relative" }}>
      <AppBar
        sx={{
          backgroundColor: "transparent;",
          padding: "21px 0",
          position: "inherit",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              marginBottom: "160px",
              display: "flex",
              justifyContent: "space-between",
              zIndex: 10,
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                overflow: "inherit",
                display: { xs: "none", md: "flex" },
                fontFamily: "Playball",
                fontWeight: 400,
                fontSize: "68px",
                lineHeight: "80px",
                color: "#EFEFEF",
                textBorder: "1px solid #000000",
                textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                textDecoration: "none",
              }}
            >
              Gordey
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
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
                  display: {
                    xs: "block",
                    md: "none",
                    background: "rgb(15 15 15 / 70%)",
                  },
                  "& .MuiMenu-list": { background: "rgb(15 15 15 / 70%)" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    sx={{
                      background: "rgb(15 15 15 / 30%)",
                    }}
                  >
                    <Link
                      href={page.href}
                      key={page.href}
                      onClick={handleCloseNavMenu}
                      sx={{
                        textDecoration: "none",
                        fontFamily: "Urbanist",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "22px",
                        lineHeight: "26px",
                        my: 2,

                        color: "white",
                        display: "block",
                      }}
                    >
                      {page.title}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Playball",
                fontWeight: 400,
                fontSize: "40px",
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Gordey
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "space-between",
                  maxWidth: "633px",
                },
              }}
            >
              {pages.map((page) => (
                <Link
                  href={page.href}
                  key={page.href}
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      color: "#FFA321",
                    },
                    textDecoration: "none",
                    fontFamily: "Urbanist",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "22px",
                    lineHeight: "26px",
                    my: 2,

                    color: "white",
                    display: "block",
                  }}
                >
                  {page.title}
                </Link>
              ))}
            </Box>
            <Button
              component={NavLink}
              to="auth/login"
              sx={{
                fontFamily: "Urbanist",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "22px",
                lineHeight: "26px",
                color: "black",
                background: "#FFA321",
                padding: "12px 24px",
                borderRadius: "6px",
                textTransform: "none",
              }}
            >
              Sign in
            </Button>
          </Toolbar>
        </Container>

        <Box
          className="title"
          sx={{
            pointerEvents: "none",
            zIndex: 10,
            textAlign: "center",
            backgroundColor: "transparent",
            color: "white",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              margin: "0 0 16px 0",
              fontFamily: "Playball",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "160px",
              lineGeight: "162px",
              "@media (max-width:600px)": {
                fontSize: "100px",
              },
            }}
          >
            Gordey
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "28px",
              lineGeight: "34px",
              marginBottom: "108px",
            }}
          >
            Restaurant for connoisseurs in Dnipro
          </Typography>
        </Box>
        <Box
          sx={{
            "& button:hover": {
              background: "rgb(255 163 33 / 20%)",
              border: "2px solid #FFA321",
            },
            width: "192px",
            margin: " 0 auto 169px auto",
            marginBottom: "169px",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#EFEFEF",
              fontFamily: "Urbanist",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "22px",
              lineHeight: "26px",
              textTransform: "none",
              padding: "12px 33px",
              border: "2px solid #FFA321",
              borderRadius: "6px",
            }}
          >
            Reservation
          </Button>
        </Box>

        <PhotoSwiper />
      </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
