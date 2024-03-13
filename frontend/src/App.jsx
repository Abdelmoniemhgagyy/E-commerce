import Header1 from "./components/header/Header1"
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Hero from "./components/hero/Hero";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import SectionIcons from "./components/hero/SectionIcons";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import ScrollTop from "./components/scrollToTop/ScrollTop";
import { useEffect } from "react";

function App() {
  const [theme, colorMode] = useMode();


      //  useEffect(()=>{
      //   fetch("http://localhost:1337/api/products?populate=*")
      //   .then((response) => response.json()) // Parse JSON response
      //   .then((data) => {
      //       console.log(data); // Log the data received from the API
      //       // You can do something with the data here, like updating state
      //   })
      //  })
  return (
    <>
      <ColorModeContext.Provider 
// @ts-ignore
      value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
         <CssBaseline />
           <Header1/>
           <Header2/>
           <Header3/>
           <Box bgcolor={theme.
// @ts-ignore
           palette.bg.main}>
                <Hero/>
                <SectionIcons/>
                <Main/>
           </Box>
           <Footer/>
           <ScrollTop/>
       </ThemeProvider >
      </ColorModeContext.Provider>

    </>
  )
}

export default App
