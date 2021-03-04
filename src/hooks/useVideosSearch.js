import { items } from '../mock/youtube-videos-mock.json';

const YOUTUBE_API_BASE_URL = 'https://youtube.googleapis.com/youtube/v3/';

const useVideosSearch = (keyword = 'wizeline') => {
  if (process.env.NODE_ENV === 'development') {
    return new Promise((resolve, reject) => {
      resolve(items);
    });
  } else if (process.env.NODE_ENV === 'production') {
    return fetch(
      `${YOUTUBE_API_BASE_URL}search?q=${keyword}&maxResults=25&part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then(
        (data) =>
          new Promise((resolve, reject) => {
            resolve(data.items);
          })
      );
  }
};

export { useVideosSearch };
