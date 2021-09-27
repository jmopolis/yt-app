import axios from 'axios';

const KEY = 'AIzaSyDltZl4Xrx1x7m8Vyw_uDZY276XNuTZlxE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
