import   { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, Stack, useTheme, Typography, Container } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Header1() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
  return (
    <>
     <Box  bgcolor={"#2B3445"} sx={{borderBottomRightRadius:"15px"}}>
     <Container >
        <Stack direction={"row"} alignItems={"center"} p="5px"  >
           
                <Typography variant="body1" 
                            sx={{backgroundColor: "red",
                            width:"max-content",
                            fontSize:16,
                            color:"white",
                            borderRadius:10,
                            padding:"2px 10px",
                            mr:2}}
                 >Hot</Typography>
                <Typography variant="body2" sx={{color:"white"}}>Free Express Shipping</Typography>
                <Box flexGrow={1}></Box>
              {/* mode  */}
                 <div>
            {theme.palette.mode === "light" ? (
               <IconButton
               sx={{m:0}}
                onClick={() => {
                    localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                }}
                color="inherit"
                >
                <LightModeOutlined sx={{color:"white",fontSize:20,m:0}}/>
                </IconButton>
            ) : (
                <IconButton

                sx={{m:0}}
                onClick={() => {
                    localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                }}
                color="inherit"
                >
                <DarkModeOutlined sx={{fontSize:20}}/>
                </IconButton>
            )}
                 </div>  
                 <TwitterIcon sx={{color:"white",fontSize:20,mr:1,ml:.5,cursor:"pointer"}} />
                 <FacebookIcon sx={{color:"white",fontSize:20,mr:1,cursor:"pointer"}}/>
                 <InstagramIcon sx={{color:"white",fontSize:20,mr:1,cursor:"pointer"}}/>
        </Stack>

     </Container>
    </Box>

     </>
  )
}

export default Header1