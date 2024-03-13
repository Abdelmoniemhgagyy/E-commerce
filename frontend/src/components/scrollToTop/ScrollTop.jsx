import { ArrowUpward } from "@mui/icons-material"
import { Fab, Zoom, useScrollTrigger } from "@mui/material"

function ScrollTop() {
  return (
    <Zoom in={useScrollTrigger()}>
           <Fab
                variant="extended"
                onClick={()=>window.scroll({top:0,behavior:"smooth"})}
                color="primary"
                size="small"
                sx={{position:"fixed",bottom:"25px",right:"10px",zIndex:999}}>
              <ArrowUpward fontSize="small" />
           </Fab>
                       
    </Zoom>
  )
}

export default ScrollTop