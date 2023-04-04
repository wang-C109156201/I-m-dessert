import "antd/dist/antd";
import styles from "./homepagecontent.module.css";
import { Row, Col, Carousel } from "antd";



export default function HomePageContent({ title }) {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <div className={styles.content}>
            <img className={styles.imgDispalyInDesktop} src="/images/偶素甜點-home page-1600.png" alt="logo" />
            <img className={styles.imgDispalyInMobile} src="/images/偶素甜點-home page-768.png" alt="logo" />
            <h2 className={styles.text}>最新消息</h2>

            <div className="container">
                <Col align="middle">
                
                {/* <Row justify="space-between" align="middle">
                    <Col
                        justify="space-between" align="middle"
                    >
                        <img
                            className={styles.news}
                            src="/images/news-1.png"
                            alt="news1" />

                        <img
                            className={styles.news}
                            src="/images/news-2.png"
                            alt="news2" />

                        <img
                            className={styles.news}
                            src="/images/news-3.png"
                            alt="news3" />
                    </Col>
                </Row> */}
                {/* <div className={styles.newsbox}>
                                        <img
                            className={styles.news}
                            src="/images/news-1.png"
                            alt="news1" />

                        <img
                            className={styles.news}
                            src="/images/news-2.png"
                            alt="news2" />

                        <img
                            className={styles.news}
                            src="/images/news-3.png"
                            alt="news3" />
                            </div> */}
                <Row gutter={[32, 32]}
                    style={{ width: "100%", margin: "auto", paddingBottom: "2.5rem" }} justify="space-between" align="middle"
                >
                    <Col
                        justify="space-between" align="middle"
                    >

                        <Carousel 
                        afterChange={onChange}
                        className={styles.carousel}
                        >
                            <div>
                            <img
                            className={styles.news}
                            src="/images/news-1.png"
                            alt="news1" />
                            </div>
                            <div>
                            <img
                            className={styles.news}
                            src="/images/news-2.png"
                            alt="news2" />
                            </div>
                            <div>
                            <img
                            className={styles.news}
                            src="/images/news-3.png"
                            alt="news3" />
                            </div>
                        </Carousel>

                    </Col>
                </Row>
                </Col>
            </div>
            <h2 className={styles.text}>{title}</h2>
        </div>
    );
}
