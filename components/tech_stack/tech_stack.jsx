import styles from "./tech_stack.module.scss";
export default function TechStack(props) {
  const { children, stack_title } = props;
  return (
    <div className={`${styles.tech_box}`}>
      <div className={`${styles.heading_secondary}`}>{stack_title}</div>
      {children}
    </div>
  );
}
