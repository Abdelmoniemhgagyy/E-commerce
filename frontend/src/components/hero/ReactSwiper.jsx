import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./slider.css"
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
function ReactSwiper() {
    const theme = useTheme()
    const swiperDate =[
        {
         id:1,
         imgSrc:"./6.jpg",
         title:"LAPTOPS",
         color:"#db4646"
        },
        {
         id:2,
         imgSrc:"./7.jpg" ,
         title:"SHOPING",
         color:"cornsilk"
        },
        ]
  return (
    <>
        <Swiper
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {swiperDate.map((slide,index)=>(
                            <SwiperSlide key={index}>
                            <img src={slide.imgSrc} alt="" />
                            <Box sx={{position:"absolute",left:"10%",top:{xs:"10%",sm:"30%"},
                                      textAlign:"left"
                                     }}>
                                    <Typography
                                    sx={{
                                    color: "#222",
                                    fontSize: {xs:"16px",sm:"26px"},
                                    letterSpacing:1.2
                                    }}
                                    variant="h5"
                                >
                                    LIFESTYLE COLLECTION
                                </Typography>
                                <Typography
                                            sx={{
                                                color: "#222",
                                                fontWeight: 500,
                                                my: 1,
                                                fontSize: {xs:"20px",sm:"32px"},
                                            }}
                                            variant="h1"
                                        >
                                            {slide.title}
                                        </Typography>
        
                                <Stack
                                    sx={{
                                    justifyContent:  "center",
                                    }}
                                    direction={"row"}
                                    alignItems={"center"}
                                >
                                    <Typography color={"#333"} sx={{fontSize: {xs:"22px",sm:"32px"}}} mr={1} variant="h4">
                                    SALE UP TO
                                    </Typography>
                                    <Typography color={slide.color} sx={{fontSize: {xs:"22px",sm:"32px"},fontWeight: 500,}} variant="h4">
                                    30% OFF
                                    </Typography>
                                </Stack>
                                <Typography
                                    sx={{
                                    color: "white",
                                    fontWeight: 400,
                                    my: 1,
                                    // @ts-ignore
                                    backgroundColor: theme.palette.secondary.main,
                                    width: "fit-content",
                                    px:"2px"
                                    }}
                                    variant="body1"
                                >
                                    Shipping on orders over $99.00
                                </Typography>
        
                                <Button
                                    sx={{
                                    px: 5,
                                    py: 1,
                                    mt: 2,
                                    backgroundColor: "#333",
                                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                    color: "#fff",
                                    borderRadius: "1px",
                                    "&:hover": {
                                        bgcolor: "#151515",
                                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                    },
                                    }}
                                    variant="contained"
                                >
                                    shop now
                                </Button>
                            </Box>
                        </SwiperSlide>
                           )
                )}


            </Swiper>
    </>
  )
}

export default ReactSwiper