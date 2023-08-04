import { VideoItem } from "../Genre/Genre";
import styles from "./Tracks.module.css";

type TracksProps = {
  link: string;
  videoItems?: VideoItem[];
};

function Tracks({ link, videoItems }: TracksProps) {
  return (
    <div className={styles.dataOverlay}>
      {videoItems?.map((item) => {
        if (item.id === link)
          return (
            <div className={styles.dataWrapper} key={item.id}>
              <h2 className={styles.dataName}>
                {item.snippet.localized.title}
              </h2>
              <img
                className={styles.dataLink}
                src={item.snippet.thumbnails.medium.url}
              />
            </div>
          );
      })}
    </div>
  );
}

export default Tracks;
