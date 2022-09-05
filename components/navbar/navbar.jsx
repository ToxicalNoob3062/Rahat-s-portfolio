import styles from "./navbar.module.scss";
import Link from "next/link";
export default function Navbar(props) {
  return (
    <div className={`${styles.navbar}`}>
      <h4 className={`${styles.navbar_heading}`}>Rahat</h4>
      <div className={`${styles.navbar_links}`}>
        <div className={`${styles.navbar_link}`}>
          <Link href="/about">About</Link>
        </div>
        <div className={`${styles.navbar_link}`}>
          <Link href="/projects">Projects</Link>
        </div>
        <div className={`${styles.navbar_link}`}>
          <Link href="/academy">Academy</Link>
        </div>
        <div className={`${styles.navbar_link}`}>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
