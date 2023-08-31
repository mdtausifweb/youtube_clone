import React from 'react'
import { Stack, Box } from "@mui/material"
import { ChannelCard, VideoCard } from "./"
const Videos = ({ videos, direction }) => {
  // console.log(videos)
  if(!videos?.length) return "Loading......"
  return (
    <Stack direction={direction || "row"} flexWrap='wrap' justifyContent="flex-start"
      gap={2} >
      {
        videos.map((item, i) => {
          return <Box key={i}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetails={item} />}
          </Box>
        })
      }
    </Stack>
  )
}

export default Videos