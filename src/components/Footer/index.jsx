import styles from './footer.module.css';
import { Row, Col } from "antd";
export default function Footer() {

    return (
        <div>
            <hr className={styles.hrFooterLine} />
            <footer className={styles.footer}>
                <div className="container">
                    <Row className={styles.box} justify="space-between" align="middle" >
                        <Col span={24} lg={{ span: 15 }}>
                            <div className={styles.content}>
                                <img className={styles.img} src="/images/icon_logo.png" alt="logo" />
                                <p className={styles.text}>
                                    <p className={styles.title}>關於我們</p>
                                    電話：02-23027963<br />
                                    E-MAIL：iavd@gmail.com<br />
                                    地址：台北市大安區和平東路二段134號
                                </p>

                            </div>

                        </Col>
                        <Col span={24} lg={{ span: 4 }}>
                            <div className={styles.followUS}>
                                <p className={styles.title}>成為粉絲</p>
                                <div className={styles.iconsArea}>
                                    <a href="#">
                                        <img className={styles.icon} src="/images/ig.png" alt="instagram" />
                                    </a>
                                    <a href="#">
                                        <img className={styles.icon} src="/images/fb.png" alt="facebook" />
                                    </a>
                                    <a href="#">
                                        <img className={styles.icon} src="/images/tw.png" alt="twitter" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col span={24} lg={{ span: 4 }}>
                            <div className={styles.contactUS}>
                                <p className={styles.title}>合作品牌</p>
                                <div className={styles.iconsArea}>
                                    <a href="#">
                                        <img className={styles.icon} src="/images/icon_品牌logo1.png" alt="facebook" />
                                    </a>
                                    <a href="#">
                                        <img className={styles.icon} src="/images/icon_品牌logo2.png" alt="instagram" />
                                    </a>
                                    <a href="#">
                                        <img className={styles.icon} src="/images/icon_品牌logo3.png" alt="tiktok" />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <p className={styles.copyRight}>
                            Copyright © 2023 偶素甜點. All rights reserved.
                        </p>
                    </Row>
                </div>
            </footer>
        </div>

    );
}