import { useEffect, useState } from "react";
import Modall from "./Modal";
import { useTheme } from "@emotion/react";
import {
  Box,
  CircularProgress,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useGetProductByNameQuery } from "../../redux/product";
import {motion} from "framer-motion"
function Main() {
  //data types
  const allProducts = "products?populate=*";
  const manProducts = "products?populate=*&filters[gender][$eq]=man";
  const womanProducts = "products?populate=*&filters[gender][$eq]=woman";
  const [currentProducts, setCurrentProducts] = useState(allProducts);
  const { data, error, isLoading } = useGetProductByNameQuery(currentProducts);
  // End data types
  const [oneItem, setOneItem] = useState({});
  const theme = useTheme();
  // @ts-ignore
  const [alignment, setAlignment] = useState("left");
  // @ts-ignore
  const handleAlignment = (event, newProducts) => {
    if (newProducts !== null) {
      setAlignment(newProducts);
      setCurrentProducts(newProducts);
    }
  };
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  // Loading
  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }
  // error
  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 10,
        }}
      >
        <Typography variant="h6" color="red">
          {error.error}
        </Typography>
        <Typography variant="h6" color="red">
          Please Try Again
        </Typography>
      </Box>
    );
  }
  //  main View
  if (data) {
    return (
      <Container sx={{ py: 4 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={{ xs: "center", md: "space-between" }}
          flexWrap={"wrap"}
          gap={2}
        >
          {/* left side  */}
          <Box
            sx={{ lineHeight: 1.3 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography variant="h6">Selected Products</Typography>
            <Typography
              variant="subtitle1"
              // @ts-ignore
              sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
            >
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          {/*End left side  */}

          {/* Toggle Button Group  */}
          <ToggleButtonGroup
            color="primary"
            value={currentProducts}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{ textTransform: "capitalize" }}
          >
            <ToggleButton
              value={allProducts}
              className="my-button"
              // @ts-ignore
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              value={manProducts}
              className="my-button"
              aria-label="centered"
              sx={{
                mx: "8px !important",
                // @ts-ignore
                color: theme.palette.mode === "dark" ? "#fff" : "#000",
              }}
            >
              MEN category
            </ToggleButton>
            <ToggleButton
              value={womanProducts}
              className="my-button"
              // @ts-ignore
              sx={{ color: theme.palette.mode === "dark" ? "#fff" : "#000" }}
              aria-label="right aligned"
            >
              Women category
            </ToggleButton>
          </ToggleButtonGroup>
          {/*End Toggle Button Group  */}
        </Stack>
        {/* Cards  */}
        <Stack
          direction={"row"}
          sx={{
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            mt: 4,
            gap: 5,
            ".MuiPaper-elevation": {
              boxShadow: "0 0 20px #333",
            },
          }}
        >
          {data.data.map((item) => (
            <Card
              component={motion.div}
              layout
              initial = {{scale:0}}
              animate = {{scale:1}}
              transition={{duration:1,type:"spring",stiffness:60}}
              key={item.id}
              sx={{
                maxWidth: 285,
                ":hover .MuiCardMedia-media": {
                  rotate: "-1deg",
                  scale: "1.2",
                  transition: ".6s",
                },
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image={`${item.attributes.img.data[0].attributes.url}`}
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  sx={{ justifyContent: "space-between", my: 1 }}
                >
                  <Typography gutterBottom variant="h5" component="div">
                    {item.attributes.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    component="p"
                    color="text.secondary"
                  >
                    $ {item.attributes.price}
                  </Typography>
                </Stack>
                <Typography
                  sx={{ lineHeight: 1.6 }}
                  variant="body2"
                  color="text.secondary"
                >
                  {item.attributes.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  onClick={() => {
                    handleClickOpen();
                    setOneItem(item);
                    console.log(oneItem);
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 500,
                    px: 2,
                  }}
                >
                  <AddShoppingCartIcon fontSize="small" />
                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: 12, ml: 0.5 }}
                    component={"p"}
                  >
                    Add To Card
                  </Typography>
                </Button>

                {/* Rating  */}
                <Rating
                  precision={0.5}
                  name="read-only"
                  value={item.attributes.rating}
                  readOnly
                />
                {/*End Rating  */}
              </CardActions>
            </Card>
          ))}
        </Stack>
        <Modall open={open} handleClose={handleClose} item={oneItem} />
        {/*End Cards  */}
      </Container>
    );
  }
}

export default Main;
