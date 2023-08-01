import styles from "./Genre.module.css";
import Tracks from "../Tracks/Tracks";

interface GenreProps {
  video: string;
  name: string;
  link: string;
}

function Genre({ name, video, tracks }: GenreProps) {
  return (
    <div className={styles.genreData}>
      <video className={styles.video} src={video} autoPlay muted loop />
      <div className={styles.genreWrapper}>
        <h2 className={styles.genreName}>{name}</h2>
        {tracks.map((track) => (
          <Tracks name={track.name} link={track.track} key={track.key} />
        ))}
      </div>
    </div>
  );
}

export default Genre;
