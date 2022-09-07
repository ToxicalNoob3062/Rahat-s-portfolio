import styles from "./tech_stack.module.scss";
import { scroll } from "./stack.utils";
export default function TechStack(props) {
  const { children, stack_title } = props;
  const total = children.length - 1;
  let stack = 3;
  return (
    <div className={`${styles.tech_box} ${stack_title}`}>
      <div className={`${styles.heading_secondary}`}>{stack_title}</div>
      <div
        onClick={() => {
          if (stack > total) stack = 0;
          scroll(stack_title, stack);
          stack++;
        }}
        className={`${styles.stack_icon}`}
      />
      {children}
    </div>
  );
}
