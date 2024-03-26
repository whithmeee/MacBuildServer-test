import styles from "./PostItem.module.css";
import { POST_ITEM } from "../Posts/Post";

interface PostItemProps {
    items: typeof POST_ITEM;
}

const PostItem = ({ items }: PostItemProps) => {
    return (
        <div className={styles["post-item"]}>
            {items.map((item) => (
                <div key={item.id} className={styles["post-content"]}>
                    <h6>{item.title}</h6>
                    <div>
                        <span>{item.date}</span>
                        <span>{item.design}</span>
                    </div>
                    <p>{item.descriprion}</p>
                </div>
            ))}
        </div>
    );
};

export default PostItem;
