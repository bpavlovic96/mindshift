import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img src="../../public/logo.png" alt="logo" className={styles.logo} />
      </Link>
    </div>
  );
}

export default Navbar;
