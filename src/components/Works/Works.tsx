import WorksItem from "../WorksItem/WorksItem";
import des from "../../assets/des.png";
import vib from "../../assets/vib.png";
import days from "../../assets/days.png";
import styles from "./Works.module.css";

export const WORKS_ITEM = [
    {
        id: 3,
        title: "Designing Dashboards",
        img: `${des}`,
        date: "2020",
        type: "Dashboard",
        description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 4,
        title: "Vibrant Portraits of 2020",
        img: `${vib}`,
        date: "2018",
        type: "Illustration",
        description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        id: 5,
        title: "36 Days of Malayalam type",
        img: `${days}`,
        date: "2018",
        type: "Typography",
        description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
];

const Works = () => {
    return (
        <div className="container">
            <div className={styles["works"]}>
                <h5>Featured works</h5>
                <div className={styles["works-content"]}>
                    <WorksItem items={WORKS_ITEM} />
                </div>
            </div>
        </div>
    );
};

export default Works;
