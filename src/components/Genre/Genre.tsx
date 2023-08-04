import styles from "./Genre.module.css";
import Tracklist from "../Tracklist/Tracklist";

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

export type Track = {
  track: string;
};

export type GenreProps = {
  video: string;
  name: string;
  tracks: Track[];
  videoItems?: { items: VideoItem[] };
  enabled?: boolean;
};

function Genre({ name, video, tracks, videoItems, enabled }: GenreProps) {
  return (
    <div className={styles.genreData}>
      <video className={styles.video} src={video} autoPlay muted loop />
      <div className={styles.genreWrapper}>
        <h2 className={styles.genreName}>{name}</h2>
        <Tracklist tracks={tracks} videoItems={videoItems} enabled={enabled} />
      </div>
    </div>
  );
}

export default Genre;
