import Image from "next/image";
import styles from "./banner.module.scss";
import TypeWriter from "../type-writer/typewriter";
export default function HeroBanner(props) {
  const {} = props;
  return (
    <div className={`${styles.hero_banner}`}>
      <div className={`${styles.hero_container}`}>
        <img className={`${styles.bio_pic}`} src="/images/me3.jpg" alt="rahat" />
      </div>
      <h1 className={`${styles.heading_primary}`}>Hello!! I am Rahat.</h1>
      <TypeWriter />
    </div>
  );
}
