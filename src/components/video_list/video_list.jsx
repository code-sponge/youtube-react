import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos }) => (
  <ul className={styles.contents}>
    {videos.map((item) => {
      return <VideoItem key={item.id} video={item} />;
    })}
  </ul>
);

export default VideoList;
