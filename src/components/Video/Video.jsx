import React from 'react'
// import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getvideo } from "../../Redux/VideoAction/Action"
const Video = () => {
    const dispatch = useDispatch()
    // const [data, setdata] = useState([])
    const [searchtext, setsearchText] = useState()
    const [API] = useState()
    const state = useSelector((state) => state?.VideoArr?.Videos)
    // console.log(state)
    useEffect(() => {
        dispatch(getvideo({ searchtext }))
    }, [dispatch, searchtext, API])
    return (
        <div>
            <div>
                <div>
                    {
                        state?.items?.map((item, i) => {
                            console.log(item)
                            return (
                                <div key={i}>
                                    <iframe src={`https://www.youtube.com/embed/${item.id.videoId}`} frameborder="0"></iframe>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Video