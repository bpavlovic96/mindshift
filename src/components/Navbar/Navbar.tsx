import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import useSharedContext from "../../shared/SharedContext";

function Navbar() {
  const { buttonClicked, onLogoClick, showAbout, aboutPageRender } =
    useSharedContext();

  const navPageLinkRender = () => {
    if (showAbout === "catalog") {
      return (
        <div className={styles.navLinkWrapper}>
          <Link
            to="/about"
            className={styles.navLink}
            onClick={() => aboutPageRender("about")}
          >
            <h2 className={styles.navText}>ABOUT</h2>
          </Link>
        </div>
      );
    } else if (showAbout === "about") {
      return (
        <div className={styles.navLinkWrapper}>
          <Link
            to="/catalog"
            className={styles.navLink}
            onClick={() => aboutPageRender("catalog")}
          >
            <h2 className={styles.navText}>CATALOG</h2>
          </Link>
        </div>
      );
    }
  };

  return (
    <div className={styles.navbar}>
      <Link to="/" onClick={() => aboutPageRender("")}>
        <img
          src="../../public/logo.png"
          alt="logo"
          onClick={onLogoClick}
          className={
            buttonClicked
              ? `${styles.logo} ${styles.logoExpand}`
              : `${styles.logo}`
          }
        />
      </Link>

      {navPageLinkRender()}
    </div>
  );
}

export default Navbar;
