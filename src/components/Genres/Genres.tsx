import Genre, { VideoItem } from "../Genre/Genre";
import { genreList } from "../../genres";
import styles from "./Genres.module.css";
import { useEffect, useState } from "react";

function Genres() {
  const channelKey = import.meta.env.VITE_CHANNEL_ID;

  const [videoItems, setVideoItems] = useState<{ items: VideoItem[] }>();

  useEffect(() => {
    const videoIdList = genreList.map((genre) =>
      genre.tracks.map((track) => track.track)
    );
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIdList}&key=${channelKey}`
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
        />
      ))}
    </div>
  );
}

export default Genres;
