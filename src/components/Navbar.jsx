import React from 'react'
import { Stack } from "@mui/material"
import { SearchBar } from "./index"
import { logo } from "../utils/constants"
import { Link } from "react-router-dom"
const Navbar = () => {
  
  return <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: "space-between", color: "white" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
}

export default Navbar