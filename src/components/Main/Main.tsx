import styles from "./Main.module.css";
import mainImg from "../../assets/main_img.svg";
import Button from "../UI/Button/Button";

const Main = () => {
    return (
        <div className="container">
            <div className={styles["main"]}>
                <div className={styles["main-text"]}>
                    <h1>Hi, I am John, Creative Technologist</h1>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                    </p>
                    <Button children={"Download Resume"} />
                </div>
                <div className={styles["main-img"]}>
                    <img src={mainImg} alt="main-img" />
                </div>
            </div>
        </div>
    );
};

export default Main;
