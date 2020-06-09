import React from "react";
import { Box, useTheme } from "@material-ui/core";
import { HomeRounded } from "@material-ui/icons";
import { Link } from "gatsby";

export default function Branding({ mobile:isMobile }) {
  const theme = useTheme();
  return isMobile ? (
    <Link to="/" style={{ textDecoration: "none" }}>
      <HomeRounded />
    </Link>
  ) : (
    <Link
      to="/"
      color="inherit"
      style={{
        textDecoration: "none",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        padding:"2rem 0"
      }}
    >
      <Box
        color="#f44e03"
        fontFamily="VT323, monospace"
        fontWeight="400"
        fontSize="2.85rem"
      >
        what the saas
      </Box>
      <Box
        color="#03A9F4"
        fontFamily="VT323, monospace"
        fontWeight="400"
        fontSize="1.2rem"
      >
        Practical frontend tech tips for backend dev
      </Box>
    </Link>
  );
}
