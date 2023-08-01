import styles from "./Genre.module.css";
import Tracks, { Track } from "../Tracks/Tracks";

export type VideoItem = {
  id: string;
  snippet: {
    localized: {
      title: string;
    };
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
};

type GenreProps = {
  video: string;
  name: string;
  tracks: Track[];
  videoItems?: { items: VideoItem[] };
};

function Genre({ name, video, tracks, videoItems }: GenreProps) {
  console.log(videoItems);
  return (
    <div className={styles.genreData}>
      <video className={styles.video} src={video} autoPlay muted loop />
      <div className={styles.genreWrapper}>
        <h2 className={styles.genreName}>{name}</h2>
        {tracks.map((track) => (
          <Tracks link={track.track} videoItems={videoItems?.items} />
        ))}
      </div>
    </div>
  );
}

export default Genre;
