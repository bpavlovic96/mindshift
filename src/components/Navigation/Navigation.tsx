import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { genreList } from "../../genres";
import { useEffect, useState } from "react";
import { useSharedContext } from "../../shared/ContextProvider";

function Navigation() {
  const [currentGenreIndex, setCurrentGenreIndex] = useState(0);

  const { onLogoClick } = useSharedContext();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGenreIndex((prevIndex) => (prevIndex + 1) % genreList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.navList}>
        <div className={styles.navListCatalog}>
          <li>
            <Link to="/catalog" className={styles.catalogLink}>
              <div
                className={styles.catalogHeaderWrapper}
                onClick={onLogoClick}
              >
                <span className={styles.catalogHeaderText}>GO TO </span>
                <h2 className={styles.catalogHeader}>CATALOG</h2>
              </div>
            </Link>
          </li>
          <h3 className={styles.catalogSubheader}>
            Explore a fusion of genres like never before.
          </h3>
          <p className={styles.catalogDescription}>
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
        <li className={styles.navListAbout}>
          <Link to="/about" className={styles.aboutLink}>
            <h2>ABOUT</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
