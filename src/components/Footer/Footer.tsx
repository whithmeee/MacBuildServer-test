import styles from "./Footer.module.css";
import insta from "../../assets/insta.svg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import ina from "../../assets/in.svg";
const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <div className="container">
                <div className={styles["footer-item"]}>
                    <div className={styles["footer-imgs"]}>
                        <img src={fb} alt="fb" />
                        <img src={insta} alt="insta" />
                        <img src={twitter} alt="twitter" />
                        <img src={ina} alt="in" />
                    </div>
                    <p>Copyright ©2020 All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
