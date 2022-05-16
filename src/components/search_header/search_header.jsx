import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({ search }) => {
  const inputRef = useRef();
  const searchVideo = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    search(value);
    inputRef.current.value = '';
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <div className={styles.start}>
        <img
          className={styles.guide}
          src="/img/hamburger.png"
          alt="guide icon"
        />
        <div className={styles.logo} onClick={reload}>
          <img className={styles.icon} src="/img/logo.png" alt="logo" />
          <span className={styles.title}>Youtube</span>
          <span className={styles.region}>KR</span>
        </div>
      </div>
      <div className={styles.center}>
        <form className={styles.form} onSubmit={searchVideo}>
          <input
            className={styles.input}
            ref={inputRef}
            type="search"
            placeholder="검색"
          />
          <button className={styles.button}>
            <img
              className={styles.search_icon}
              src="/img/search.png"
              alt="search image"
            />
          </button>
        </form>
      </div>
      <div className={styles.end}>
        <img
          className={`${styles.topbar_menu_btn} ${styles.video_icon} `}
          src="/img/video.png"
          alt="video icon"
        />
        <img
          className={`${styles.topbar_menu_btn} ${styles.app_icon} `}
          src="/img/app.png"
          alt="app icon"
        />
        <img
          className={`${styles.topbar_menu_btn} ${styles.user} `}
          src="/img/user.png"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default SearchHeader;
