import React, { useEffect, useState } from 'react'
import { Box, Typography } from "@mui/material"
import { Videos } from './'
import { fetchApi } from "../utils/fetchApi"
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const {searchTerm} = useParams()
  const [videos, setVideos] = useState([])
  console.log(searchTerm)
  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items)
      })
  }, [searchTerm])
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant='="h4' fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results:
        <span style={{ color: "#F31503" }}>
         { searchTerm}
        </span>
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed