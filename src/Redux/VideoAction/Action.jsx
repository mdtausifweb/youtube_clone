import axios from "axios";
const API="AIzaSyBIJ5Ei9Xia2Cs4BtK3TfA5Mo15OoEQqkg"
// const API = "AIzaSyCtCqfGIHyvpRHqMnFtdVpsnRQ-xpMIwh0";
export const getvideo = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: "getvideoRequest",
    });
    let { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?q=${obj.searchtext}&key=${API}&type=video&maxResults=30&part=snippet`
    );
    dispatch({
      type: "getvideoSuccess",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "getvideoFail",
      payload: err,
    });
  }
};
