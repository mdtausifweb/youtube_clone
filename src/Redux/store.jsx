import { configureStore } from "@reduxjs/toolkit"
// import thunk from "thunk"
import { VideoReducers } from "./VideoReducer/Reducers"
 const store = configureStore({
    reducer: {
        VideoArr: VideoReducers
    }
})
export default store