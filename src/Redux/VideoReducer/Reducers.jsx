
import { createReducer } from "@reduxjs/toolkit"
const initialState = {}
export const VideoReducers = createReducer(initialState, {
    getvideoRequest: (state) => {
        state.loading = true
    },
    getvideoSuccess: (state, action) => {
        state.loading = false;
        state.Videos = action.payload
    },
    getvideoFail: (state, action) => {
        state.loading = false;
        state.error = action.payload
    }
})