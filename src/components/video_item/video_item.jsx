import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video, onSelect, display, video: { snippet } }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;

  let viewCount = video.statistics.viewCount;
  if (viewCount >= 10000) {
    viewCount = Math.floor(viewCount / 10000) + '만회';
  } else if (viewCount >= 1000) {
    viewCount = Math.floor(viewCount / 1000, -1) + '천회';
  } else {
    viewCount = viewCount + '회';
  }

  let publishedDate = video.snippet.publishedAt;
  publishedDate = new Date(publishedDate);
  const currentTime = new Date();

  let difference_In_Time = currentTime.getTime() - publishedDate.getTime();

  let difference_In_Hour = difference_In_Time / (1000 * 3600);
  difference_In_Hour = Math.floor(difference_In_Hour);

  let difference_In_Date = difference_In_Time / (1000 * 3600 * 24);
  difference_In_Date = Math.floor(difference_In_Date);

  let TimeDiff;
  if (difference_In_Date === 0) {
    TimeDiff = difference_In_Hour + '시간전';
  } else {
    TimeDiff = difference_In_Date + '일전';
  }

  const selectVideo = () => {
    onSelect(video);
  };
  return (
    <li
      className={`${styles.contentWrap} ${displayType}`}
      onClick={selectVideo}
    >
      <div className={`${styles.content} ${displayType}`}>
        <img
          className={`${styles.thumbnail} ${displayType}`}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.under_thumbnail}>
          <img
            className={`${styles.avatar} ${displayType}`}
            src={video.channelInfo.thumbnails.default.url}
            alt="channel thumbnail"
          />
          <div className={styles.text}>
            <p className={`${styles.title} ${displayType}`}>{snippet.title}</p>
            <div className={styles.channel}>
              <p className={styles.channel_title}>{snippet.channelTitle}</p>
              <div className={styles.view_upload}>
                <span className={styles.view}>{`${viewCount} • `}</span>
                <span className={styles.upload}>{TimeDiff}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
