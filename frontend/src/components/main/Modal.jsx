/* eslint-disable react/prop-types */
import { AddShoppingCart, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Modal({ open, handleClose, item }) {
  const [indexImg, setIndexImg] = useState(0);
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      {item && item.attributes && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            ".MuiPaper-root": {
              position: "relative",
              minHeight: 200,
              minWidth: { xs: "100%", md: "800px" },
            },
          }}
        >
          {/* sx={{position:"relative",}} */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {/* close btn  */}
            <IconButton
              onClick={() => handleClose()}
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                ":hover": { rotate: "180deg", transition: ".5s", color: "red" },
              }}
            >
              <Close />
            </IconButton>
            {/*End close btn  */}

            <Box sx={{ display: "flex", mx: "auto", mt: { xs: 7, md: 0 } }}>
              <img
                src={item.attributes.img.data[indexImg].attributes.url}
                alt=""
                width={300}
              />
            </Box>

            <Box
              sx={{
                width: { xs: "80%", md: "470px" },
                mx: "auto",
                mt: { xs: 1, md: 5 },
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{ justifyContent: "space-between", my: 1, mr: 4 }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {item.attributes.title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="subtitle2"
                  component="h6"
                  sx={{ fontSize: 18 }}
                  color="red"
                >
                  $ {item.attributes.price}
                </Typography>
              </Stack>

              <Typography
                sx={{ lineHeight: 1.9, pr: 1 }}
                variant="body2"
                color="text.secondary"
              >
                {item.attributes.description}
              </Typography>

              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{
                  mt: 2,
                  gap: 1,
                  justifyContent: { xs: "center", md: "left" },
                }}
              >
                <ToggleButtonGroup
                  value={indexImg}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                  sx={{display:"flex",gap:1,
                       ".Mui-selected":{opacity:1}}}
                >

                    {item.attributes.img.data.map((img, index) => (
                      // eslint-disable-next-line react/jsx-key
                      <>
                          <ToggleButton 
                          value={index}
                          aria-label="left aligned"
                          sx={{width:"110px",
                               height:"110px",
                               padding:0,
                               opacity:.6}}
                         >
                        <img
                          src={`${img.attributes.url}`}
                          onClick={() => setIndexImg(index)}
                          alt=""
                          style={{ borderRadius: "8px" }}
                          width={"100%"}
                          height={"100%"}
                        />
                    </ToggleButton>
                      </>
                    ))}
                </ToggleButtonGroup>
              </Stack>

              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 500,
                  px: 2,
                  my: 2,
                  mx: { xs: "auto", md: "0px" },
                }}
                variant="contained"
              >
                <AddShoppingCart fontSize="small" />
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: 12, ml: 0.5 }}
                  component={"p"}
                >
                  Buy Now
                </Typography>
              </Button>
            </Box>
          </Box>
        </Dialog>
      )}
    </>
  );
}

export default Modal;
