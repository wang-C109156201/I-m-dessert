import React, { useState } from "react";
import "antd/dist/antd";
import styles from "./homepagecontent.module.css";
import { Row, Col, Carousel, Button } from "antd";
import HotList from "../HotList";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const carouselEL = React.createRef()

export default function HomePageContent({ title }) {
    const [active, setActive] = useState(false);
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    // const contentStyle = {
    //     margin: 0,
    //     height: '160px',
    //     color: '#fff',
    //     lineHeight: '160px',
    //     textAlign: 'center',
    //     background: '#364d79',
    // };
    return (
        <div className={styles.content}>
            <img className={styles.imgDispalyInDesktop} src="/images/偶素甜點-home page-1600.png" alt="logo" />
            <img className={styles.imgDispalyInMobile} src="/images/偶素甜點-home page-768.png" alt="logo" />

            <div className="container">
                <h2 className={styles.title}>最新消息</h2>
                <Row className={styles.RowCol} >
                    <Col
                        className={styles.RowCol}
                    >
                        <div className={styles.newsbox}>
                            <div className={styles.boxstyle}>
                                <img
                                    className={styles.ns}
                                    src="/images/news-1.png"
                                    alt="news1" />
                                <div className={styles.NewsTextBox}>
                                    <p className={styles.text}>慶開幕！滿千免運費活動開跑</p>
                                    <Button className={styles.btn}   >
                                        MORE
                                    </Button>
                                </div>
                            </div>

                            <div className={styles.boxstyle}>
                                <img
                                    className={styles.ns}
                                    src="/images/news-2.png"
                                    alt="news2" />
                                <div className={styles.NewsTextBox}>
                                    <p className={styles.text}>草莓季登場！一起感受酸甜滋味</p>
                                    <Button className={styles.btn}   >
                                        MORE
                                    </Button>
                                </div>
                            </div>

                            <div className={styles.boxstyle}>
                                <img
                                    className={styles.ns}
                                    src="/images/news-3.png"
                                    alt="news3" />
                                <div className={styles.NewsTextBox}>
                                    <p className={styles.text}>偶素甜點，素別小學堂</p>
                                    <Button className={styles.btn}   >
                                        MORE
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>

                <Row gutter={[32, 32]}
                    className={styles.cl}
                >
                    <Col xs={{ span: 20 }}

                    >
                        <Button
                            className={styles.btnstyle}
                            style={{ left: 50 }}
                            onClick={() => {
                                carouselEL.current.prev();
                            }}

                            icon={<LeftOutlined />}
                        ></Button>
                        <Button
                            className={styles.nsbtnstyle}
                            style={{ right: 50 }}
                            onClick={() => {
                                carouselEL.current.next();
                            }}

                            icon={<RightOutlined />}
                        ></Button>
                        <Carousel autoplay ref={carouselEL} afterChange={onChange}  >
                            <div className={styles.newsbox}>
                                <img
                                    className={styles.news}
                                    src="/images/news-1.png"
                                    alt="news1" />
                                    <div className={styles.ClNewsTextBox}>
                                <p className={styles.text}>慶開幕！滿千免運費活動開跑</p>
                                <Button className={styles.btn} >
                                    MORE
                                </Button>
                                </div>
                            </div>
                            <div>
                                <img
                                    className={styles.news}
                                    src="/images/news-2.png"
                                    alt="news2" />
                                    <div className={styles.ClNewsTextBox}>
                                <p className={styles.text}>草莓季登場！一起感受酸甜滋味</p>
                                <Button className={styles.btn} >
                                    MORE
                                </Button>
                                </div>
                            </div>
                            <div>
                                <img
                                    className={styles.news}
                                    src="/images/news-3.png"
                                    alt="news3" />
                                    <div className={styles.ClNewsTextBox}>
                                <p className={styles.text}>偶素甜點，素別小學堂</p>
                                <Button className={styles.btn} >
                                    MORE
                                </Button>
                                </div>
                            </div>
                        </Carousel>

                    </Col>
                </Row>
            </div>
            <h2 className={styles.title}>{title}</h2>
            <HotList />
        </div>
    );
}
