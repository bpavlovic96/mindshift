import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import useSharedContext from "../../shared/SharedContext";
import { useEffect, useState } from "react";

function Navbar() {
  const { buttonClicked, onLogoClick } = useSharedContext();

  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []); // tu riješiti dependency

  return (
    <div className={styles.navbar}>
      <Link to="/">
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

      {currentUrl.includes("catalog") ? (
        <div className={styles.navLinkWrapper}>
          <Link to="/about" className={styles.navLink}>
            <h2 className={styles.navText}>ABOUT</h2>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
