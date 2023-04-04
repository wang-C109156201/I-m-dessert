import "antd/dist/antd";
import styles from "./homepagecontent.module.css";
import { Carousel } from "antd";



export default function HomePageContent({ title }) {

    return (
        <div className={styles.content}>
            <img className={styles.imgDispalyInDesktop} src="/images/偶素甜點-home page-1600.png" alt="logo"/>
            <img className={styles.imgDispalyInMobile} src="/images/偶素甜點-home page-768.png" alt="logo"/>
            <h2 className={styles.text}>最新消息</h2>
            

            <h2 className={styles.text}>{title}</h2>
        </div>
    );
}
