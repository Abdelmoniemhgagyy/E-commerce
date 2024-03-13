import { Box, Link } from "@mui/material"

function Footer() {
  return (
    <Box sx={{p:3,textAlign:"center"}}>
        © 2024 <Link href="https://www.linkedin.com/in/abdelmoniem-ahmed-3751761b7/" target="_blank" underline="none" >Abdelmoniem Hgagy</Link>. All rights reserved.
    </Box>
  )
}

export default Footer