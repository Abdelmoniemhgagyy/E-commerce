import { Box, Container, Paper, Stack, Typography } from "@mui/material"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import { useTheme } from "@emotion/react";
function SectionIcons() {
  const theme = useTheme()
  const myBox =[
    {
      icon: <ElectricBoltIcon  color="primary"/>,
      title: "Fast Delivery",
      subTitle:"Start from $10"
    },
    {
      icon: <CreditScoreOutlinedIcon  color="primary"/>,
      title: "Payment",
      subTitle:"Secure system"
    },
    {
      icon: <WorkspacePremiumOutlinedIcon  color="primary"/>,
      title: "Money Guarantee",
      subTitle:"7 Days Back"
    },
    {
      icon: <AccessAlarmOutlinedIcon  color="primary"/>,
      title: "365 Days",
      subTitle:"For free return"
    },
 ]
  return (
    <Container sx={{mt:1.2}}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}  flexWrap={"wrap"} gap={1}>
        {myBox.map((box,index)=>(
          <Paper  key={index} sx={{p:1,width:"282px",
                                 display:"flex",gap:2,
                                 alignItems:"center",
                                 justifyContent:"center",
                                 textAlign:"center",
                                 bgcolor:theme.palette.mode ==="dark"?"#000":"#fff"
                                  }}>
           {box.icon}
            <Box textAlign={"center"}>
            <Typography variant="h6" sx={{fontSize:"16px",fontWeight:400}}>
            {box.title}
           </Typography>
            <Typography variant="h6" sx={{fontSize:"13px",color:"#777"}}>
            {box.subTitle}
           </Typography>
            </Box>
           </Paper>
        ))}
      </Stack>
    </Container>
  )
}

export default SectionIcons