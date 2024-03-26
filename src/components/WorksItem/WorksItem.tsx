import { WORKS_ITEM } from "../Works/Works";
import styles from "./WorksItem.module.css";

interface WorksItemProps {
    items: typeof WORKS_ITEM;
}

const WorksItem = ({ items }: WorksItemProps) => {
    return (
        <div className={styles["works-items"]}>
            {items.map((item) => (
                <div className={styles["work-item"]} key={item.id}>
                    <img src={item.img} alt="img-item" />

                    <div className={styles["work-content"]}>
                        <h3>{item.title}</h3>
                        <div className={styles["date"]}>
                            <p className={styles["date-text"]}>{item.date}</p>
                            <span>{item.type}</span>
                        </div>
                        <p className={styles["work-desc"]}>
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorksItem;
