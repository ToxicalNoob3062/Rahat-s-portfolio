import styles from "./tech_stack.module.scss";
import { scroll, clearRepeatation } from "./stack.utils";
export default function TechStack(props) {
  const { children, stack_title } = props;
  const total = children.length - 1;
  let stack = 3;
  let repeat;
  let rotator = () => {
    repeat = setInterval(() => {
      if (stack > total) stack = 0;
      scroll(stack_title, stack);
      stack++;
    }, 1000);
  };
  return (
    <div className={`${styles.tech_box} ${stack_title}`}>
      <div className={`${styles.heading_secondary}`}>{stack_title}</div>
      <div onMouseOver={rotator} onMouseOut={() => clearRepeatation(repeat)} className={`${styles.stack_icon}`} />
      <div className={`${styles.techs}`}>{children}</div>
    </div>
  );
}
