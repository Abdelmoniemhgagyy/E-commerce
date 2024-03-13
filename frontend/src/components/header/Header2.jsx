import { Container, IconButton, ListItem, Stack, Typography } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import { styled} from '@mui/material/styles';
import { ShoppingCart } from "@mui/icons-material";
import InputBase from '@mui/material/InputBase';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";
import { useTheme } from "@emotion/react";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius:22,
  p:0,
  border:"1px solid",
  flexGrow:.6,
  borderColor:theme.palette.info.main,
  marginLeft: 0,
  minWidth: '200px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const options = ["All Categories", "CAR", "Clothes", "Electronics"];


const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
function Header2() {

  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Stack my={3} direction={"row"} alignItems={"center"} sx={{justifyContent: {xs:"center",md:'space-between'}}} gap={{xs:1,sm:0}}   flexWrap={"wrap"}>
        {/* Left Side  */}
         <Stack alignItems={"center"}>
          <ShoppingCartOutlinedIcon/>
            <Typography variant="body1" >E-commerce</Typography>
         </Stack>
        {/* End  Left Side  */}





        <Search
        sx={{
          display: "flex",
          borderRadius: "22px",
          justifyContent: "space-between",
          p:0
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
<div>
       <List
        component="nav"
        aria-label="Device settings"
        
        sx={{
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,p:0, backgroundColor:theme.palette.myColor.main
            }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{borderBottomRightRadius: 22,
               borderTopRightRadius: 22 }}
        >
          <ListItemText
             sx={{width:93,
                 fontSize:18,
                 textAlign: 'center'
             }}
            secondary={options[selectedIndex]}
          />
        <ExpandMoreIcon/>
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
</div>

          </Search>




        {/* Right Side  */}
        <Stack alignItems="center" direction={"row"}>

        <IconButton >
          <PermIdentityOutlinedIcon/>
        </IconButton>

          <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCart />
          </StyledBadge>
        </IconButton>
        </Stack>
        {/*End Right Side  */}
      </Stack>
    </Container>
  )
}

export default Header2