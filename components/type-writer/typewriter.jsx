import styles from "./typewriter.module.scss";
import { useEffect } from "react";
import { test } from "./typewriter.animation";
export default function TypeWriter(props) {
  const {} = props;
  useEffect(test, []);
  return (
    <div id={styles.writer}>
      <h2 id={styles.text}></h2>
    </div>
  );
}
