import styles from "./homepagecontent.module.css";

export default function HomePageContent({title}) {

    return (
        <div className={styles.content}>
            <img className={styles.img} src="/images/偶素甜點-home page.png" alt="logo" />
            <h2 className={styles.text}>最新消息</h2>
            <h2 className={styles.text}>{title}</h2>
        </div>
    );
}
