import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.mainWrapper}>
      <h2 className={styles.headerTextDescription}></h2>
      <div className={styles.headerTextWrapper}>
        <h1 className={styles.headerTextHead}>MINDSHIFT</h1>
        <div className={styles.headerTextParagraphWrapper}>
          <div className={styles.TextParagraphAndLineWrapper}>
            <p className={styles.headerTextParagraph}>Mind-bending</p>
            <hr className={styles.line} />
          </div>
          <div className={styles.TextParagraphAndLineWrapper}>
            <p className={styles.headerTextParagraph}>Innovative</p>
            <hr className={styles.line} />
          </div>
          <div className={styles.TextParagraphAndLineWrapper}>
            <p className={styles.headerTextParagraph}>Next-gen</p>
            <hr className={styles.line} />
          </div>
          <div className={styles.TextParagraphAndLineWrapper}>
            <p className={styles.headerTextParagraph}>Digital</p>
            <hr className={styles.line} />
          </div>
          <div className={styles.TextParagraphAndLineWrapper}>
            <p className={styles.headerTextParagraph}>Synthesized</p>
            <hr className={styles.line} />
          </div>
          <div className={styles.TextParagraphAndLineWrapper}>
            <p className={styles.headerTextParagraph}>Highly intensive</p>
            <hr className={styles.line} />
          </div>
          <div className={styles.TextParagraphAndLineWrapper}>
            <p className={styles.headerTextParagraph}>Intuitive</p>
            <hr className={styles.line} />
          </div>
          <div className={styles.TextParagraphAndLineWrapper}>
            <p className={styles.headerTextParagraph}>Futuristic</p>
            <hr className={styles.line} />
          </div>
          <div className={styles.TextParagraphAndLineWrapper}>
            <p className={styles.headerTextParagraph}>Transcendent</p>
            <hr className={styles.line} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
