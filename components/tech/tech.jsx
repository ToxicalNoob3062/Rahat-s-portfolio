import styles from "./tech.module.scss";

export default function Tech(props) {
  const { data, title, path, delay } = props;
  return (
    <div style={{ "--delay": `${delay}` }} className={`${styles.tech}`}>
      <div className={`${styles.tech_content}`}>
        <h4 className={`${styles.tech_content_title}`}>{title}</h4>
        <p className={`${styles.tech_content_text}`}>{data}</p>
      </div>
      <div className={`${styles.tech_preview}`}>
        <img className={`${styles.tech_preview_img}`} src={path} alt={title} />
      </div>
    </div>
  );
}
