import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import Hero from "./components/hero/Hero";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import SectionIcons from "./components/hero/SectionIcons";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import ScrollTop from "./components/scrollToTop/ScrollTop";
import { motion } from "framer-motion";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider
        // @ts-ignore
        value={colorMode}
      >
        <ThemeProvider
          // @ts-ignore
          theme={theme}
        >
          <CssBaseline />
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Header1 />
            <Header2 />
            <Header3 />
            <Box
              bgcolor={
                // @ts-ignore
                theme.palette.bg.main
              }
            >
              <Hero />
              <SectionIcons />
              <Main />
            </Box>
            <Footer />
            <ScrollTop />
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
