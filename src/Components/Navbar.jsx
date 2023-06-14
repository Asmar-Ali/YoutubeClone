import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router-dom";
import { logo } from "../utils/contants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#000",
          width: "100%",
          padding: 0,
          marginLeft: 0,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          p={2}
          sx={{
            position: "sticky",
            background: "#000",
            top: 0,
            justifyContent: "space-between",
          }}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" height={45} />
          </Link>
          <SearchBar />
        </Stack>
        <Outlet />
      </Box>
    </>
  );
};

export default Navbar;
