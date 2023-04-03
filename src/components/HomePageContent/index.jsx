import "antd/dist/antd";
import styles from "./homepagecontent.module.css";
import { Carousel } from "antd";


export default function HomePageContent({title}) {

    return (
        <div className={styles.content}>
            {/* <div className={styles.div}>
                <Carousel autoplay>
                    <div>
                        <h1 className={styles.box}>box1</h1>
                        <h1 className={styles.box}>box2</h1>
                        
                    </div>
                </Carousel>
            </div> */}
            <img className={styles.imgDispalyInDesktop} src="/images/偶素甜點-home page-1600.png" alt="logo"/>
            <img className={styles.imgDispalyInMobile} src="/images/偶素甜點-home page-768.png" alt="logo"/>
            <h2 className={styles.text}>最新消息</h2>
            {/* <div className={styles.Carousel} >
                <Carousel component={'div'} autoplay >
                    <div>
                        <h3 className={styles.contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 className={styles.contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 className={styles.contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 className={styles.contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div> */}
            
            <h2 className={styles.text}>{title}</h2>
        </div>
    );
}
