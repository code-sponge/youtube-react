import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (q) => {
    youtube
      .search(q) //
      .then((result) => setVideos(result));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((result) => setVideos(result));
  }, [youtube]);

  return (
    <div>
      <SearchHeader search={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
