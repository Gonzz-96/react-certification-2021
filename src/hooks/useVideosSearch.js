import { useEffect, useState, useContext } from 'react';
import KeywordContext from '../context/SearchContext';
import { items } from '../mock/youtube-videos-mock.json';

const YOUTUBE_API_BASE_URL = 'https://youtube.googleapis.com/youtube/v3/';

const useVideosSearch = () => {
  const [videos, setVideos] = useState([]);
  const { keyword } = useContext(KeywordContext);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `${YOUTUBE_API_BASE_URL}search?q=${keyword}&maxResults=25&part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );
        const { items } = await response.json();

        setVideos(items);
      } catch (e) {
        console.log(e);
        setVideos([]);
      }
    };

    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
      setVideos(items);
    } else {
      fetchVideos();
    }
  }, [keyword]);

  return videos;
};

export { useVideosSearch };
