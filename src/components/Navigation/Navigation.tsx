import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { genreList } from "../../genres";
import { useEffect, useState } from "react";
import useSharedContext from "../../shared/SharedContext";

function Navigation() {
  const [currentGenreIndex, setCurrentGenreIndex] = useState(0);

  const { onLinkClick } = useSharedContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGenreIndex((prevIndex) => (prevIndex + 1) % genreList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.navList}>
        <div className={styles.navListSub}>
          <li>
            <Link to="/catalog" className={styles.link}>
              <div className={styles.headerWrapper} onClick={onLinkClick}>
                <div className={styles.headerTextWrapper}>
                  <span className={styles.headerText}>GO TO </span>
                  <h2 className={styles.header}>CATALOG</h2>
                </div>
              </div>
            </Link>
          </li>
          <h3 className={styles.subHeader}>
            Explore a fusion of genres like never before.
          </h3>
          <p className={styles.description}>
            Journey through celestial echoes in space-inspired harmonies, tap
            into collective experiences with archetype melodies, relive
            cinematic moments through captivating soundtracks, and rediscover
            favorites with reimagined covers. Elevate your auditory senses with
            our curated collection.
          </p>
          <div className={styles.videoContainer}>
            {genreList.map((genre, index) => (
              <div
                className={`${styles.videoWrapper} ${
                  index === currentGenreIndex
                    ? `${styles.fadeIn} ${styles.videoWrapper}`
                    : `${styles.hidden} ${styles.videoWrapper}`
                }`}
                key={genre.key}
              >
                <video
                  className={styles.video}
                  src={genre.background}
                  autoPlay
                  muted
                  loop
                ></video>
                <p className={styles.genreName}>{genre.name}</p>
              </div>
            ))}
          </div>
        </div>
        <li className={styles.navListSub}>
          <Link to="/about" className={styles.link}>
            <div className={styles.headerWrapper}>
              <div className={styles.headerTextWrapper}>
                <span className={styles.headerText}>GO TO </span>
                <h2 className={styles.header}>ABOUT</h2>
              </div>
              <h3 className={styles.subHeader}>
                UNCOVER THE WHO & WHAT BEHIND
                <span className={styles.mindshiftText}> MINDSHIFT</span>.
              </h3>
              <p className={styles.description}>
                Eager to unravel the creative minds and underlying inspirations
                steering our diverse musical selection? <br />
                Meet the visionaries behind the melodies and gain insight into
                our mission, explore the beating heart of our platform and get
                ready to dive deeper into the rhythms that resonate with you.
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
