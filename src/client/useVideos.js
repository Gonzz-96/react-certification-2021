import { items } from '../mock/youtube-videos-mock.json';

const YOUTUBE_API_BASE_URL = 'https://youtube.googleapis.com/youtube/v3/';

const useVideos = (keyword = 'wizeline') => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Local videos');
    return new Promise((resolve, reject) => {
      resolve(items);
    });
  } else if (process.env.NODE_ENV === 'production') {
    console.log('Remote videos');
    return fetch(
      `${YOUTUBE_API_BASE_URL}search?q=${keyword}&maxResults=25&part=snippet&key=AIzaSyCrDMiVWZcjDW-ZEJnxyoOVY860LhLZ2Hg`
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

export { useVideos };
