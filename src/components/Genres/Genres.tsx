import Genre, { VideoItem } from "../Genre/Genre";
import { genreList } from "../../genres";
import styles from "./Genres.module.css";
import { useEffect, useState } from "react";
import { videoIdList } from "../../functions/generateVideoIdList";

function Genres() {
  const channelKey = import.meta.env.VITE_CHANNEL_ID;

  const [videoItems, setVideoItems] = useState<{ items: VideoItem[] }>();

  useEffect(() => {
    const videoIdListMap = videoIdList(genreList);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIdListMap}&key=${channelKey}`
    )
      .then((res) => res.json())
      .then((data) => setVideoItems(data));
  }, [channelKey]);

  return (
    <div className={styles.genres}>
      {genreList.map((genre) => (
        <Genre
          name={genre.name}
          key={genre.key}
          video={genre.background}
          tracks={genre.tracks}
          videoItems={videoItems}
          enabled={true}
        />
      ))}
    </div>
  );
}

export default Genres;
