import React, { useState } from "react";
import "antd/dist/antd";
import styles from "./brandcontent.module.css";
import { Row, Col, Carousel, Button } from "antd";
import BrandList from "../BrandList";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

export default function BrandContent({ title }) {
    const [active, setActive] = useState(false);

    const typingContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.14,
            },
        },
    };

    const typingText = {
        hidden: { opacity: 0, y: "20px" },
        show: {
            opacity: 1,
            y: "0",
            transition: {
                ease: 'easeInOut',
            },
        },
    };

    return (
        <div className={styles.content}>
            <div className="container">
                <Row className={styles.RowCol}>
                    <Col className={styles.RowCol}>
                        <div className={styles.boxstyle}>
                            <motion.h1
                                className={styles.title}
                                variants={typingContainer}
                                initial="hidden"
                                animate="show"
                            >
                                {"偶素甜點".split("").map((word, i) => (
                                    <motion.span key={i} variants={typingText}>
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.h1>
                            <img
                                className={styles.ns}
                                src="/images/login_logo.png"
                                alt="news1" />
                        </div>

                    </Col>
                </Row>
            </div>

            <h2 className={styles.title}>{title}</h2>
            <BrandList />
        </div>
    );
}