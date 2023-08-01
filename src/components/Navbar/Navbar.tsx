import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src="../../public/logo.png" alt="logo" className={styles.logo} />
      <ul className={styles.navList}>
        <li className={styles.navListHome}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navListAbout}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
