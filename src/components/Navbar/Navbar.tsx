import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useSharedContext } from "../../shared/ContextProvider";

function Navbar() {
  const { buttonClicked } = useSharedContext();

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img
          src="../../public/logo.png"
          alt="logo"
          className={
            buttonClicked
              ? `${styles.logo} ${styles.logoExpand}`
              : `${styles.logo}`
          }
        />
      </Link>
    </div>
  );
}

export default Navbar;
