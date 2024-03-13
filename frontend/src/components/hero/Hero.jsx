import { ArrowForward } from "@mui/icons-material"
import { Box, Container, Link, Stack, Typography } from "@mui/material"
import ReactSwiper from "./ReactSwiper"

function Hero() {
  return (
    <Container sx={{mt:3,display:"flex",alignItems:"center",gap:1}} >

        <ReactSwiper/>
        {/* right side  */}
        <Box sx={{display:{xs:"none",md:"block"},minWidth:"30%",gap:3,mb:{md:2,lg:0}}}>
          <Box sx={{position:"relative"}}>
                {/* <img src=".\1.jpg" alt="img" width={100%} width="240px"/> */}
                <img src=".\banner-17.jpg" alt="img" width={"100%"} style={{borderRadius:"5px"}} />
                <Stack sx={{position:"absolute",top:"10%",left:"7%"}}>
                <Typography
                    variant="caption"
                    sx={{
                      color: "#7d7878",
                      fontSize: "25px",
                    }}
                  >
                    NEW ARRIVALS
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#2B3445",
                      lineHeight: 1.6,
                      mt: 2,
                      fontSize:"26px",
                      letterSpacing: 1.3,
                      
                    }}
                  >
                    SUMMER
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#2B3445",
                      fontSize:"23px",
                    }}
                  >
                    SALE 20% OFF
                  </Typography>
                  <Link href={"#"} sx={{":hover":{color:"#db0078"},color:"#2B3445",mt:2,
                                        cursor:"pointer",textDecoration:"none",
                                          display:"flex",alignItems:"center",
                                          transition:.4,gap:.3
                  }}>
                  <Typography
                    variant="body1"                
                  >
                    shop now
                  </Typography>
                              <ArrowForward sx={{fontSize:"18px"}} />
                  </Link>
                </Stack>
            </Box>
          <Box sx={{position:"relative"}}>
                <img src=".\banner-16.jpg" alt="img" width={"100%"} style={{borderRadius:"5px"}}  />
                <Stack sx={{position:"absolute",top:"12%",left:"7%"}}>
                <Typography
                    variant="caption"
                    sx={{
                      color: "#7d7878",
                      fontSize: "25px",
                    }}
                  >
                      GAMING 4K
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#2B3445",
                      lineHeight: 1.4,
                      mt: 2,
                      fontSize:"25px",
                      letterSpacing: 1.3,
                      
                    }}
                  >
                    DESKTOPS &
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#2B3445",
                      fontSize:"24px",
                    }}
                  >
                    LAPTOPS
                  </Typography>
                  <Link href={"#"} sx={{":hover":{color:"#db0078"},color:"#2B3445",mt:2,
                                        cursor:"pointer",textDecoration:"none",
                                          display:"flex",alignItems:"center",
                                          transition:.4,gap:.3
                  }}>
                  <Typography
                    variant="body1"                
                  >
                    shop now
                  </Typography>
                              <ArrowForward sx={{fontSize:"18px"}} />
                  </Link>
                </Stack>
            </Box>

        </Box>

    </Container>
  )
}

export default Hero