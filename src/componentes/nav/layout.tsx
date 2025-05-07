import { Box } from "@mui/material";
import * as React from "react";
import NavBar from "../nav/nav";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ width: "100vw", padding: "5px" }}>
      <NavBar />
      <Box
        sx={{
          margin: "50px 10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
