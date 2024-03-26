import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface Input extends InputHTMLAttributes<HTMLInputElement> {
    isValid?: boolean;
}

const Input = ({ ...props }) => {
    return <input className={styles["input"]} {...props} />;
};

export default Input;
