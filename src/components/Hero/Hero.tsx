import styles from "./Hero.module.css";
import { descriptionList, header, descriptionSection } from "../../description";
import { useSharedContext } from "../../shared/ContextProvider";

function Hero() {
  const { buttonClicked, onButtonClick } = useSharedContext();

  return (
    <div
      className={
        buttonClicked
          ? `${styles.mainWrapper} ${styles.mainWrapperExpand}`
          : `${styles.mainWrapper}`
      }
    >
      <div
        className={
          buttonClicked
            ? `${styles.headerTextWrapper} ${styles.headerTextWrapperExpand}`
            : `${styles.headerTextWrapper}`
        }
      >
        <h1
          className={
            buttonClicked
              ? `${styles.headerTextHead} ${styles.headerTextHeadExpand}`
              : `${styles.headerTextHead}`
          }
        >
          {header.split("").map((letter, index) => (
            <p
              key={index}
              className={
                buttonClicked
                  ? `${styles.headerTextHeadLetter} ${styles.headerTextHeadLetterExpand}`
                  : `${styles.headerTextHeadLetter}`
              }
            >
              {letter}
            </p>
          ))}
        </h1>
        <div
          className={
            buttonClicked
              ? `${styles.headerTextParagraphWrapper} ${styles.headerTextParagraphWrapperExpand}`
              : `${styles.headerTextParagraphWrapper}`
          }
        >
          {buttonClicked
            ? descriptionSection.map((section, index) => (
                <div className={styles.TextParagraphAndLineWrapper} key={index}>
                  <p
                    className={
                      buttonClicked
                        ? `${styles.headerTextParagraph} ${styles.headerTextParagraphExpand}`
                        : `${styles.headerTextParagraph}`
                    }
                  >
                    {section.description}
                  </p>
                </div>
              ))
            : descriptionList.map((description, index) => (
                <div className={styles.TextParagraphAndLineWrapper} key={index}>
                  <p
                    className={
                      buttonClicked
                        ? `${styles.headerTextParagraph} ${styles.headerTextParagraphExpand}`
                        : `${styles.headerTextParagraph}`
                    }
                  >
                    {description}
                  </p>
                  <hr
                    className={
                      buttonClicked
                        ? `${styles.line} ${styles.lineExpand}`
                        : `${styles.line}`
                    }
                  />
                </div>
              ))}
        </div>
      </div>
      <button className={styles.expandButton} onClick={onButtonClick}>
        Expand
      </button>
    </div>
  );
}

export default Hero;
