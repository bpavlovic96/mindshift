import styles from "./AboutInformation.module.css";
import {
  BiLogoSoundcloud,
  BiLogoFacebook,
  BiLogoSpotify,
  BiLogoYoutube,
} from "react-icons/bi";

const AboutInformation = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h1 className={styles.aboutTitle}>Discover Our Orchestral Sound</h1>
        <p className={styles.aboutDescription}>
          Immerse yourself in the captivating world of orchestral compositions.
          From Croatia, we craft intricate musical pieces that embody raw
          emotion and rich sound.
        </p>
        <p className={styles.aboutDescription}>
          Since our inception in 2014, we've strived to capture human
          experiences through our music. Our compositions invite you to explore
          emotions and imagination, bridging reality and art.
        </p>
        <p className={styles.aboutDescription}>
          Our collaboration fuses two minds attuned to melody. With each
          composition, venture into uncharted emotional territories, where
          harmonies paint vivid feelings and untold stories.
        </p>
        <p className={styles.aboutDescription}>
          Step into our realm of sonic artistry, where melodies speak the
          language of the heart, and notes are brushstrokes on the canvas of
          your mind. Dive into our compositions, immerse yourself in the
          symphony of emotions, and celebrate limitless artistic expression.
        </p>
      </div>
      <div className={styles.aboutImagesContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.imageHeader}>Antonio</h2>
            <ul className={styles.imageDescription}>
              <li className={styles.imageDescriptionParagraph}>
                A virtuoso on the piano keys.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                His compositions are emotional narratives.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                Each note tells a story, evoking feelings of nostalgia and
                tranquility.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                The gentle flow of his melodies is like a soothing balm for the
                soul.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                With each piece, he invites listeners to a world of
                introspection and reflection.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                Music as his brush, he paints emotions onto the canvas of sound.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                Architect of auditory cathedrals, his compositions are spaces to
                reflect and wander.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                Crafting harmony from life's dissonance, he transforms
                experiences into melodies.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                A guide through sound, he leads listeners on a journey of
                introspection.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                Composer of heartbeats, his rhythms synchronize with the pulse
                of emotions.
              </li>
            </ul>
          </div>
          <img
            src="public\antonio.jpg"
            alt="antonio"
            className={styles.aboutImage}
          />
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.imageHeader}>Bruno</h2>
            <ul className={styles.imageDescription}>
              <li className={styles.imageDescriptionParagraph}>
                A maven of musical fusion.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                Masterfully blends the traditional with the avant-garde.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                Synth sorcerer, he conjures electronic spells that resonate.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                Compositions are a journey, where electronic pulses intermingle
                with orchestral swells.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                Bruno's sonic alchemy creates an experience that's both
                otherworldly and grounded.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                Sound sculptor in a digital atelier, he shapes frequencies into
                art.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                Magician of fusion, he blurs boundaries, making old and new
                dance as one.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                Dream-weaver of auditory dimensions, his music evokes worlds yet
                to be discovered.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                Midwife to melodies, he births the ethereal through the embrace
                of technology.
              </li>
              <li className={styles.imageDescriptionParagraph}>
                Sonic voyager, he charts courses through the unexplored
                constellations of sound.
              </li>
            </ul>
          </div>
          <img
            src="public\bruno.jpg"
            alt="bruno"
            className={styles.aboutImage}
          />
        </div>
      </div>
      <div className={styles.platformsContainer}>
        <h2 className={styles.platformsTitle}>Connect with Us</h2>
        <ul className={styles.platformsList}>
          <li className={styles.platformLinkContainer}>
            <a href="your-youtube-link">YouTube</a>
            <BiLogoYoutube className={styles.platformIcons} />
          </li>
          <li className={styles.platformLinkContainer}>
            <a href="your-spotify-link">Spotify</a>
            <BiLogoSpotify className={styles.platformIcons} />
          </li>
          <li className={styles.platformLinkContainer}>
            <a href="your-soundcloud-link">SoundCloud</a>
            <BiLogoSoundcloud className={styles.platformIcons} />
          </li>
          <li className={styles.platformLinkContainer}>
            <a href="your-facebook-link">Facebook</a>
            <BiLogoFacebook className={styles.platformIcons} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutInformation;
