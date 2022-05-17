import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => {
  let viewCount = parseInt(video.statistics.viewCount).toLocaleString();

  const publishedAt = new Date(video.snippet.publishedAt);
  const year = publishedAt.getFullYear();
  const month = publishedAt.getMonth() + 1;
  const date = publishedAt.getDate();
  const publishedDate = `${year}. ${month}. ${date}.`;

  return (
    <div className={styles.container}>
      <div className={styles.iframe_wrap}>
        <iframe
          className={styles.video}
          id="ytplayer"
          type="text/html"
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.title}>{video.snippet.title}</div>
      <div className={styles.statistics}>
        <span>조회수 {viewCount}회 </span>
        <span>{publishedDate}</span>
      </div>
      <div className={styles.line} />
      <div className={styles.channel}>
        <img
          className={styles.thumbnail}
          src={video.channelInfo.thumbnails.default.url}
          alt="channel thumbnail"
        />
        <div className={styles.name}>{video.snippet.channelTitle}</div>
      </div>
      <pre className={styles.description}>{video.snippet.description}</pre>
    </div>
  );
};

export default VideoDetail;
