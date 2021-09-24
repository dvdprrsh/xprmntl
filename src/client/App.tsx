import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.component";
import NotFound from "./views/NotFound.view";

const App: React.FC = () => {
  return (
    <Box sx={{ animation: (theme) => theme.animations.fadeIn() }}>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default App;
