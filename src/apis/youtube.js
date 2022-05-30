import axios from "axios";
const KEY = "AIzaSyAXRWZJvIjACtgDMlwjs6z2-MQMIOxQOxA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",

  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
