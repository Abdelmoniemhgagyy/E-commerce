import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";
function Links({title}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          ":hover .show-list": { display: "block" },
          ":hover": { cursor: "pointer" },
        }}
      >
        <Typography variant="body1" sx={{ fontSize: "14px" }}>
          {title}
        </Typography>
        <ExpandMoreIcon />
        <Box
          className="show-list"
          sx={{
            display: "none",
            minWidth: 180,
            position: "absolute",
            top: "102%",
            left: "50%",
            zIndex:999,
            transform: "translateX(-50%)",
          }}
        >
          <Paper>
            <nav aria-label="secondary mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton sx={{ p: 0, px: 1.5, fontSize: 14 }}>
                    <ListItemText
                      primary={"Link"}
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "14px",
                          fontWeight: 300,
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>

                <ListItem
                  sx={{
                    position: "relative",
                    ":hover .show-secondary-list": { display: "block" },
                  }}
                  disablePadding
                >
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary="products"
                    />
                    <Box flexGrow={1} />

                    <KeyboardArrowRightOutlined fontSize="small" />
                  </ListItemButton>
                  <Box
                    className="show-secondary-list"
                    sx={{
                      display: "none",
                      position: "absolute",
                      left: "100%",
                      top: "5px",
                      minWidth: 140,
                    }}
                  >
                    <Paper>
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton sx={{ p: 0, px: 1.5, fontSize: 14 }}>
                            <ListItemText
                              primary={"Link"}
                              sx={{
                                "& .MuiTypography-root": {
                                  fontSize: "14px",
                                  fontWeight: 300,
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton sx={{ p: 0, px: 1.5, fontSize: 14 }}>
                            <ListItemText
                              primary={"Link"}
                              sx={{
                                "& .MuiTypography-root": {
                                  fontSize: "14px",
                                  fontWeight: 300,
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton sx={{ p: 0, px: 1.5, fontSize: 14 }}>
                            <ListItemText
                              primary={"Link"}
                              sx={{
                                "& .MuiTypography-root": {
                                  fontSize: "14px",
                                  fontWeight: 300,
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Paper>
                  </Box>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemButton sx={{ p: 0, px: 1.5, fontSize: 14 }}>
                    <ListItemText
                      primary={"Link"}
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "14px",
                          fontWeight: 300,
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton sx={{ p: 0, px: 1.5, fontSize: 14 }}>
                    <ListItemText
                      primary={"Link"}
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "14px",
                          fontWeight: 300,
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default Links;
