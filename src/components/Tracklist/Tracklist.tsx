import Tracks from "../Tracks/Tracks";
import { Track } from "../Genre/Genre";
import styles from "./Tracklist.module.css";

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

export type TracklistProps = {
  tracks: Track[];
  videoItems?: { items: VideoItem[] };
  enabled?: boolean;
};

function Tracklist({ tracks, videoItems, enabled }: TracklistProps) {
  return (
    <div className={styles.trackList}>
      {enabled &&
        tracks.map((track) => (
          <Tracks link={track.track} videoItems={videoItems?.items} />
        ))}
    </div>
  );
}

export default Tracklist;
