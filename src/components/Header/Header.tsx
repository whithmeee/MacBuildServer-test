import styles from "./Header.module.css";

const MENU_LIST = ["Home", "Blog", "Contact"];

const Header = () => {
    return (
        <div className="container">
            <div className={styles["header"]}>
                <div className={styles["header-list"]}>
                    <nav className={styles["header-menu"]}>
                        <ul>
                            {MENU_LIST.map((list, index) => (
                                <li key={index}>{list}</li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
