import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (q) => {
    youtube
      .search(q) //
      .then((result) => {
        setVideos(result);
        setSelectedVideo(null);
      });
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((result) => setVideos(result));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader search={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onSelect={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
