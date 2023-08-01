import Genre from "../Genre/Genre";
import { genreList } from "../../genres";
import styles from "./Genres.module.css";

function Genres() {
  return (
    <div className={styles.genres}>
      {genreList.map((genre) => (
        <Genre
          name={genre.name}
          key={genre.key}
          video={genre.background}
          tracks={genre.tracks}
        />
      ))}
    </div>
  );
}

export default Genres;
