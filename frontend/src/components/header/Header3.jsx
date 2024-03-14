// @ts-nocheck
import { useTheme } from "@emotion/react";
import {
  Close,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  SportsEsportsOutlined,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import WindowIcon from "@mui/icons-material/Window";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import Links from "./Links";

function Header3() {
  const listMenu = [
    { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
    { mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
    {
      mainLink: "full screen menu",
      subLinks: ["Link 1", "Link 2", "Link 3"],
    },
    { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
    {
      mainLink: "user account",
      subLinks: ["Link 1", "Link 2", "Link 3"],
    },
    {
      mainLink: "vendor account",
      subLinks: ["Link 1", "Link 2", "Link 3"],
    },
  ];
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //drawer
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <IconButton
        onClick={toggleDrawer(anchor, false)}
        sx={{
          position: "absolute",
          top: "15px",
          right: "10px",
          ":hover": { rotate: "180deg", transition: ".5s", color: "red" },
        }}
      >
        <Close />
      </IconButton>

      <Box sx={{ width: 340 }}>
        {listMenu.map((item) => {
          return (
            <Accordion key={item} bgcolor="#333">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>{item.mainLink}</Typography>
              </AccordionSummary>
              <List>
                {item.subLinks.map((link) => {
                  return (
                    <ListItem key={link} disablePadding>
                      <ListItemButton>
                        <ListItemText primary={link} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Box>
        <Button
          className="b"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ width: 220, alignItems: "center" }}
        >
          <WindowIcon mr={2} />
          <Typography
            sx={{
              textTransform: "capitalize",
              color: theme.palette.white,
              mx: 1,
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />
          <ExpandMoreIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              bgcolor: theme.palette.myColor.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {/* menu for screen less than 1200px  */}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
      >
        {list("top")}
      </Drawer>

      {/* menu for screen more than 1200px  */}
      {useMediaQuery("(min-width:1200px)") && (
        <Stack direction={"row"} alignItems={"center"} sx={{ mr: 1 }} gap={3}>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </Stack>
      )}
    </Container>
  );
}

export default Header3;
