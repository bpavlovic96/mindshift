import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { genreList } from "../../genres";
import { useEffect, useState } from "react";

function Navigation() {
  const [currentGenreIndex, setCurrentGenreIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGenreIndex((prevIndex) => (prevIndex + 1) % genreList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.navList}>
        <div className={styles.navListCatalog}>
          <li>
            <Link to="/catalog" className={styles.catalogLink}>
              CATALOG
            </Link>
          </li>
          <div className={styles.videoContainer}>
            {genreList.map((genre, index) => (
              <div className={styles.videoWrapper} key={genre.key}>
                <video
                  className={`${styles.video} ${
                    index === currentGenreIndex ? styles.videoVisible : ""
                  }`}
                  src={genre.background}
                  autoPlay
                  muted
                  loop
                ></video>
                <p
                  className={`${styles.genreName} ${
                    index === currentGenreIndex ? styles.genreNameVisible : ""
                  }`}
                >
                  {genre.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <li className={styles.navListAbout}>
          <Link to="/about" className={styles.aboutLink}>
            ABOUT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
