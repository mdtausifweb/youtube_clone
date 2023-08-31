import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { Videos } from "./"
import { fetchApi } from "../utils/fetchApi"

const VideoDetail = () => {
  const { id } = useParams()
  const [videoDetails, setvideoDetails] = useState(null)
  const [videos, setvideos] = useState(null)
  useEffect(() => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setvideoDetails(data.items[0])
    })
    fetchApi(`search?part=snippet&relatedVideoId=${id}&type=video`).then((data) => {
      setvideos(data.items)
    })
  }, [id])
  if (!videoDetails?.snippet) return "Loading....."
  const { snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount } } = videoDetails
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player" controls />
            <Typography color="#fff" variant='h5'
              fontWeight="bold" p={2}>{title}</Typography>
            <Stack direction="row" justifyContent="space-between"
              sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitlel', md: 'h6' }}
                  color="#fff">
                  {channelTitle}
                  <CheckCircle sx={{
                    fontSize: "12px", color: "gray"
                    , ml: "5px"
                  }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>

          </Box>
        </Box>
      <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center"
        alignItems="center">
        <Videos videos={videos} direction="column" />
      </Box>
      </Stack>
    </Box >
  )
}

export default VideoDetail