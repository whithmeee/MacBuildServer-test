import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
    return <button className={styles["button"]}>{children}</button>;
};

export default Button;
