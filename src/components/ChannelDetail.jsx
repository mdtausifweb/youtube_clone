import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Videos, ChannelCard } from "./"
import { fetchApi } from '../utils/fetchApi'

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setvideos] = useState([])
  const { id } = useParams()
  console.log(channelDetail)
  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`).then((data) => {
      setchannelDetail(data?.items[0])
    })
    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setvideos(data?.items)
    })
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(93,46,235,1) 52%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "100px"
          }}
        />
        <Box marginTop="-110px">
          <ChannelCard channelDetail={channelDetail} />
        </Box>
      </Box>
      <Box display="flex" p="2" width="100%">
        <Box sx={{ mr: { ms: "100px" } }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  )
}

export default ChannelDetail