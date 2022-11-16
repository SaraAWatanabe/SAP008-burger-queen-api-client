import styles from "./Button.module.css";

export function Button(props) {
  return (
    <button
      type={props.type}
      className={`${styles.btn} ${styles[props.customClass]}`}
      id={props.id}
    >
      {props.text}
    </button>
  );
}
