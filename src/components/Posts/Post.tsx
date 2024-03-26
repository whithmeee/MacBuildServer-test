import PostItem from "../PostItem/PostItem";
import styles from "./Post.module.css";

export const POST_ITEM = [
    {
        id: 1,
        title: "Making a design system from scratch",
        date: "12 Feb 2020",
        design: "Design, Pattern",
        descriprion:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 2,
        title: "Creating pixel perfect icons in Figma",
        date: "12 Feb 2020",
        design: "Figma, Icon Design",
        descriprion:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
];

const Posts = () => {
    return (
        <div className={styles["post"]}>
            <div className="container">
                <div className={styles["post-content"]}>
                    <div className={styles["post-text"]}>
                        <h6>Recent posts</h6>
                        <a href="#">View all</a>
                    </div>
                    <PostItem items={POST_ITEM} />
                </div>
            </div>
        </div>
    );
};

export default Posts;
