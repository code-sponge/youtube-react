import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos, onSelect, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;

  return (
    <ul className={`${styles.contents} ${displayType}`}>
      {videos.map((item) => {
        return (
          <VideoItem
            key={item.id}
            video={item}
            onSelect={onSelect}
            display={display}
          />
        );
      })}
    </ul>
  );
};
export default VideoList;
