import styles from "./Tracks.module.css";

interface GenreProps {
  name: string;
  link: string;
  key: React.Key;
  tracks: [name: string, track: string, key: number];
}

function Tracks({ name, link, key }: GenreProps) {
  return (
    <div className={styles.dataOverlay} key={key}>
      <h2 className={styles.dataName}>{name}</h2>
      <p className={styles.dataLink}>{link}</p>
    </div>
  );
}

export default Tracks;
